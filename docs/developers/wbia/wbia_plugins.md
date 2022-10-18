---
id: wbia_plugins
title: WBIA Plugin Integration
sidebar_label: Plugin Integration
---

Wildbook IA (WBIA) allows easy extensibility with plugins, python packages built to add specific functionality to the WBIA software. This document is a guide to plugin development & integration and assumes the reader is already familiar with the [overview of the WBIA software](wbia_overview.md) and python packages in general.

As a refresher, WBIA contains computer vision tools to detect and identify animals in photographs, as well as a structured database to store those photos and their derived data. WBIA contains core algorithms to answer "what species is this" and "what individual is this," but is most often used with additional plugins that are specialized for particular species or research questions. Plugins might integrate new algorithms into the established WBIA pipeline, such as [wbia-plugin-finfindr](https://github.com/WildMeOrg/wbia-plugin-finfindr) which is an individual identification algorithm optimized for whale and dolphin dorsal fins; or add entirely new steps to that pipeline, such as [wbia-plugin-2d-orientation](https://github.com/WildMeOrg/wbia-plugin-2d-orientation) which rotates annotations so they fit animal bodies more closely as part of the detection process.

## Examples

Much can be gleaned from our [wbia-plugin-id-example](https://github.com/WildMeOrg/wbia-plugin-id-example). [wbia-plugin-finfindr](https://github.com/WildMeOrg/wbia-plugin-finfindr) is also a fairly straightforward yet full-featured ID algorithm integration and will be used as an example throughout this document.

### Calling a Docker container

For resource usage and maintenance reasons, the ideal plugin runs natively in python on the wbia Docker container. When this is not feasible however, an easy route for integrating other software is to containerize your software in its own separate container and write a wbia plugin that calls that container via http requests. This is the architecture of the [wbia-plugin-deepsense](https://github.com/WildMeOrg/wbia-plugin-deepsense) and [finFindR](https://github.com/WildMeOrg/wbia-plugin-finfindr) plugins.

## Architecture & Naming Conventions

WBIA plugin names look like `wbia-plugin-X`. The plugin should have its own git repo with that name which follows python package guidelines. In the `wbia-plugin-X` folder, plugin code belongs in a subfolder `wbia_X` (note the switch from hyphens to underscores). The core plugin logic and api should be defined in that subfolder in `_plugin.py`.

Example plugin architecture:
```bash
wbia_plugin_x/
    LICENSE
    README.md
    requirements.txt
    setup.py
    wbia-x/
        _plugin.py
        backend_funcs.py
        model_files/
            some_weights.md5
```

While not required, we STRONGLY suggest all API endpoints (see [the web API section in the WBIA overview](wbia_overview#wbia-rest-api)) in a plugin in to be prefixed with `/api/plugin/<Plugin Name>/.../.../` to keep the registered APIs from conflicting.  We also suggest doing the same with your function names as well that are injected into the WBIA controller on load, for example using a function name of `ibs.wbia_plugin_<Plugin Name>_..._...()`.

## Identification Algorithm Integration

Adding new individual ID algorithms to WBIA requires only one key method be defined in your _plugin.py, of course being the method that performs identification. Our convention is that this method has the same name as the plugin itself. Let's look at `wbia-plugin-finfindr` as an example (doctests and comments removed for brevity):
```python
@register_preproc_annot(
    tablename='Finfindr',
    parents=[ANNOTATION_TABLE, ANNOTATION_TABLE],
    colnames=['score'],
    coltypes=[float],
    configclass=FinfindrConfig,
    requestclass=FinfindrRequest,
    fname='finfindr',
    rm_extern_on_delete=True,
    chunksize=None,
)
def wbia_plugin_finfindr(depc, qaid_list, daid_list, config):
    # this is going to load the distances from the distance cache and convert those to scores

    ibs = depc.controller
    distances = ibs.depc_annot.get('FinfindrDistance', (qaid_list, daid_list), 'distance')
    for distance in distances:
        score = finfindr_distance_to_match_score(distance)
        yield (score,)
```

Here are some key points we can see above:
1. **The method is integrated with our dependency cache.** The depc decorator tells us that for any two annotations, we will cache a float `score` which is the finFindR similarity of those annotations. This score will never be recomputed unless the parent annotations change or the cache is deleted.
2. **The input of the ID call is two lists of annotations, the query annots and the database annots.** The database annots are the "match-against set", the current catalog of annots (and the attached names) against which results are computed. In practice the query list is often a single annotation, and some of our plugins require that to be the case.
3. **The ID method returns similarity scores, not distances**. In other words a higher score must represent a stronger match. Ideally these scores range from 0 to 1. Since many algorithms return distances in an embedding space, we transform these distances using various methods that are up to your discretion. For finFindR:

```python
def finfindr_distance_to_match_score(distance, max_distance_scalar=500.0):
    if distance is None:
        score = 0.0
    else:
        score = np.exp(-1.0 * distance / max_distance_scalar)
    score = max(0.0, score)
    return score
```

### Illustrating ID Results

As is the case across ML, providing explainability to the end-user greatly increases the value of an ID algorithm. We do this by, for a query-database annot pair, rendering both annotations side-by-side and if possible illustrating the features that influenced the match score. For methods where these determining features might be obscure or hard to illustrate, simply showing the annots side-by-side is helpful to the users.

Looking again to finFindR, here are the illustration methods that once defined, integrate an algorithm's illustrations with the rest of WBIA. WBIA will save these illustrations to disk and serve them to the users as necessary, and also determines how many illustrations to render for a given match (since the daid_list might be many thousands of images, we only need to illustrate e.g. the top 16 match results).

``` python
class FinfindrRequest(dt.base.VsOneSimilarityRequest):
    _symmetric = False
    _tablename = 'Finfindr'

    @ut.accepts_scalar_input
    def get_fmatch_overlayed_chip(request, aid_list, config=None):
        depc = request.depc
        ibs = depc.controller
        passport_paths = ibs.depc_annot.get(
            'FinfindrPassport',
            aid_list,
            'image',
            config=config,
            read_extern=False,
            ensure=True,
        )
        passports = list(map(vt.imread, passport_paths))
        return passports

    def render_single_result(request, cm, aid, **kwargs):
        # HACK FOR WEB VIEWER
        chips = request.get_fmatch_overlayed_chip([cm.qaid, aid], config=request.config)
        out_img = vt.stack_image_list(chips)
        return out_img
```

1. The FinfindrRequest class extends the VsOneSimilarityRequest base class defined in the wbia database module dtool.
2. `render_single_result` makes the illustration using the finFindR-specific method `FinfindrPassport`. These passport photos highlight the finFindR feature on a cropped annotation image. `render_single_result` simply places the query and database annots' passport photos next to each other.

### Integrating with WBIA core

The WBIA package itself must be made aware of your ID plugin in a few places. Modifying these files in a way consistent with other plugins like finFindR will integrate your package with WBIA. Within the `wbia` folder:
1. `web/apis_engine.py:review_graph_match_html` lists the available ID plugins
2. `viz/viz_matches.py:get_query_annot_pair_info` lists the ID algorithms with custom visualizations
3. `control/IBEISControl.py` defines the ibeis/WBIA controller referred to as `ibs`; the top of this file has logic which loads plugins depending on flags at startup.
