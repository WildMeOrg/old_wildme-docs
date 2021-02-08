---
id: wbia_overview
title: Wildbook IA Overview
sidebar_label: Wildbook IA Overview
---

Wildbook Image Analysis (WBIA or Wildbook IA) is a computer vision program for analyzing photos of animals and answering important biological questions. It aims to detect animals in photographs, label their species, and identify which individual animals they are; answering who, what, and where in wildlife images. WBIA contains tools to answer these questions as well as a structured database to store images and their derived data.

This project is the machine learning and computer vision component of the [Wildbook project](https://wildme.org/#/wildbook).  WBIA began as a fork of the IBEIS (Image Based Ecological Information System) software suite for wildlife conservation, which is maintained by Jon Crall (@Erotemic) at https://github.com/Erotemic/ibeis. The IBEIS toolkit was originally a wrapper around HotSpotter, an individual identification algorithm authored by Jon Crall that we still use to identify species such as zebras and humpback whales.

WBIA is build around an SQLite database, a web GUI, and matplotlib visualizations, and it communicates with Wildbook via http requests. Algorithms employed include convolutional neural networks for detection, localization, and classification; hessian-affine keypoint detection; SIFT keypoint description; LNBNN identification using approximate nearest neighbors; and even simple decision trees. Optional plugins provide features such as species-specific identification algorithms; their design is described on our [WBIA Plugin Integration](wbia_plugins.md) page.

## Requirements

- Python 3.5+
- OpenCV 3.4.10
- Python dependencies listed in requirements.txt in https://github.com/WildMeOrg/wildbook-ia

## Installation Instructions

### PyPI

The WBIA software is now available on [pypi](https://pypi.org/project/wbia/) for Linux systems. This means if you have [Python installed](https://xdoctest.readthedocs.io/en/latest/installing_python.html). You can simply run:

```
pip install wbia
```

to install the software. Then the command to run the GUI is:

```
wbia
```

We highly recommend using a Python virtual environment: https://docs.python-guide.org/dev/virtualenvs/#lower-level-virtualenv

### Docker

The WBIA software is built and deployed as a Docker image `wildme/wbia`.  You can download and run the pre-configured instance from the command line using:

```
# Install Docker - https://docs.docker.com/engine/install/
docker pull wildme/wbia:latest
docker container run -p <external port>:5000 --name wildbook-ia -v /path/to/local/database/:/data/docker/ wildme/wbia:latest
```

This image is built using the multi-stage Dockerfiles in `devops/`.

### Source

This project depends on an array of other repositories for functionality.

First Party Toolkits (Required)

- https://github.com/WildMeOrg/wbia-utool

- https://github.com/WildMeOrg/wbia-vtool

First Party Dependencies for Third Party Libraries (Required)

- https://github.com/WildMeOrg/wbia-tpl-pyhesaff

- https://github.com/WildMeOrg/wbia-tpl-pyflann

- https://github.com/WildMeOrg/wbia-tpl-pydarknet

- https://github.com/WildMeOrg/wbia-tpl-pyrf

First Party Plugins (Optional)

- https://github.com/WildMeOrg/wbia-plugin-cnn

- https://github.com/WildMeOrg/wbia-plugin-flukematch

- https://github.com/WildMeOrg/wbia-plugin-deepsense

- https://github.com/WildMeOrg/wbia-plugin-finfindr

- https://github.com/WildMeOrg/wbia-plugin-curvrank

- - https://github.com/WildMeOrg/wbia-tpl-curvrank

- https://github.com/WildMeOrg/wbia-plugin-kaggle7

- - https://github.com/WildMeOrg/wbia-tpl-kaggle7

- https://github.com/WildMeOrg/wbia-plugin-2d-orientation

- - https://github.com/WildMeOrg/wbia-tpl-2d-orientation

- https://github.com/WildMeOrg/wbia-plugin-lca

- - https://github.com/WildMeOrg/wbia-tpl-lca

Plugin Templates (Reference--see also the [WBIA Plugin Integration](wbia_plugins.md) page)

- https://github.com/WildMeOrg/wbia-plugin-template

- https://github.com/WildMeOrg/wbia-plugin-id-example

Miscellaneous (Reference)

- https://github.com/WildMeOrg/wbia-pypkg-build

- https://github.com/WildMeOrg/wbia-project-website

- https://github.com/WildMeOrg/wbia-aws-codedeploy

## Documentation

The package documentation is built and available online at [wildmeorg.github.io/wildbook-ia/](http://wildmeorg.github.io/wildbook-ia/). To build the docs locally,

```
# checkout the source code
# install the project in development mode
pip install -e .

# build the docs
scripts/build-docs.sh
```

The WBIA documentation style uses a modified version of Sphinx `doctests` for all documentation and testing.  The ability to write good documentation directly in the header of the function is of high value to any contributor to the WBIA code base and any plugin maintainer; please document your contributions!


## Code Style and Development Guidelines

### Contributing

It's recommended that you use ``pre-commit`` to ensure linting procedures are run on any commit you make. (See also [pre-commit.com](https://pre-commit.com/))

Reference [pre-commit's installation instructions](https://pre-commit.com/#install) for software installation on your OS/platform. After you have the software installed, run ``pre-commit install`` on the command line. Now every time you commit to this project's code base the linter procedures will automatically run over the changed files.  To run pre-commit on files preemtively from the command line use:

```
git add .
pre-commit run

# or

pre-commit run --all-files
```

### Brunette

Our code base has been formatted by Brunette, which is a fork and more configurable version of Black (https://black.readthedocs.io/en/stable/).

### Flake8

Try to conform to PEP8.  You should set up your preferred editor to use flake8 as its Python linter, but pre-commit will ensure compliance before a git commit is completed.

To run flake8 from the command line use:

```
flake8
```

This will use the flake8 configuration within ``setup.cfg``,
which ignores several errors and stylistic considerations.
See the ``setup.cfg`` file for a full and accurate listing of stylistic codes to ignore.

All WBIA Python code requires a Linter to be run on any code contributions for the main code base.  While we do not explicitly require this for WBIA plugins, we STRONGLY suggest using one for all Python code.  We do acknowledge, however, that the full Python Flake8 (http://flake8.pycqa.org/en/latest/) specification is quire restrictive.  We have a set of allowed errors and warnings to ignore, below:

```
D100, D101, D102, D103, D105
D200, D205, D210
D400, D401, D403
E127,
E201, E202, E203, E221, E222, E241, E265, E271, E272,
E301,
E501,
N802, N803, N805, N806
```

Writing good Python code is subjective but a linter will help to make all Python contributors follow a consistent set of cleanliness standards.

### PyTest

Our code uses Google-style documentation tests (doctests) that uses pytest and xdoctest to enable full support.  To run the tests from the command line use:

```
pytest
```

To run doctests with `+REQUIRES(--web-tests)` do:

```
pytest --web-tests
```

The immediate benefit of this structure  is that documentation can live alongside parameter specifications, REST API endpoints, and unit testing code block(s). To run a given test code block, one must simply tell python to execute the module and pass in the function name and the test index.  For example, if you want to run the first code test for the function ibs.wbia_plugin_id_hello_world() in this file, you can call

```
python -m wbia_id._plugin --test-wbia_plugin_id_hello_world:0
```

Note the `:0` index specifier at the end of this Command Line call.  To run all of the tests for a specified function, you must remove any post-fix.  For example,

```
python -m wbia_id._plugin --test-wbia_plugin_id_hello_world
```

will run all of the tests for that function.  To run all tests for an entire file, you can simply call:

```
python -m wbia_id._plugin --allexamples
```
We also provide a handy script at the top level path for this repository called `run_tests.py` that will execute all of the tests for all files.  A summary report `timeings.txt` and `failed_doctests.txt` will be created for each run.

When run in bulk, you may with to disable a specific test from the set of all tests you end up writing.  You may do this to improve the speed of the batch test call or to exclude tests that are currently a work-in-progress or are intended for storing notes and helpful code snippets.  You can add the first-line macro `ENABLE_DOCTEST` or `DISABLE_DOCTEST` to enable or disable the test.

### Python Code Profiling (ut.inject2)

On top of a large suite of tools, utool (referred to as `ut`) also offers profiling functions for code segments.  To see this in action, run any Python CLI command (e.g. a test) with the extra CLI parameter `--profile` at the end. Any function that has the `@profile` decorator on the function will be profiled for run-time efficiency.  For example, running from the CLI:

```
python -m wbia_id._plugin --test-wbia_plugin_id_file_download:1 --profile
```

Will run the test of downloading an image from a remote server, check a local copy, delete it, then re-download the image.  The output of this call will look something like this:

```
**[TEST.FINISH] wbia_plugin_id_file_download -- SUCCESS
[util_io] * Writing to text file: timeings.txt
L_____________________________________________________________
+-------
| finished testing fpath='wbia_plugin_id/wbia_plugin_id/_plugin.py'
| passed 1 / 1
L-------
Dumping Profile Information
 -1.00 seconds - None                                             :None:None
  0.14 seconds - wbia_plugin_id_file_download:wbia_plugin_id/wbia_plugin_id/_plugin.py:536
[util_io] * Writing to text file: profile_output.txt
[util_io] * Writing to text file: profile_output.<timestamp>.txt
```

This output is indicating that the function tool 0.14 seconds to finish. Inspecting the file `profile_output.txt` shows:

```
Timer unit: 1e-06 s

Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
...
586         2         48.0     24.0      0.0      with ut.Timer() as timer:
587         2     136968.0  68484.0     99.9          file_filepath = ut.grab_file_url(file_url, appname='wbia_plugin_id', check_hash=True)
588
589                                               # ut.Timer() is a handy context that allows for you to quickly get the run-time
590                                               # of the code block under its indentation.
591         2         18.0      9.0      0.0      print('Download / verification tool %0.02f seconds' % (timer.ellapsed, ))
592
593                                               # Ensure that the image exists locally
594         2         12.0      6.0      0.0      print('File located at: %r' % (file_filepath, ))
595         2         38.0     19.0      0.0      assert os.path.exists(file_filepath)
596
597                                               # Return the download local file's absolute path
```

This output tells us that we spent 0.1369 seconds and 99.9% of our total run-time in this function downloading the file on line 587.  This output is very helpful for any developer wishing to optimize the run-time performance of their code.


## WBIA Controller and Database

WBIA supports dynamically-injected methods to the controller object.  Any function that you wrap with the `@register_ibs_method` decorator is automatically added to the controller as `ibs.<function_name>()` method.  The function then becomes accessible anywhere in the codebase if one has access to the WBIA controller.

For example,

```
@register_ibs_method
def new_plugin_function(ibs, parameter1, *args, **kwargs):
    return '%s in %s' (parameter1, ibs.dbname, )
```

will be accessible at `ibs.new_plugin_function('test')` and will return the value `test for testdb_identification` when executed if the database's containing folder is named `testdb_identification`.

### Database Structure
A WBIA database, at its core, is simply a folder on the local file system. WBIA uses SQLite3 and static folders for all of its database and asset storage and has the following structure:

```
wbia_database_folder/
    _ibsdb/
        _wbia_backups/
        _wbia_cache/
        _wbia_logs/
        images/
        _wbia_database.sqlite3
        _wbia_staging.sqlite3
        <other miscellaneous folders and files>
    smart_patrol/
    <other miscellaneous folders and files>
```

The volatile (i.e. cannot be re-computed) database files and folders are:

| Path                     | Description |
| ------------------------ | ----------- |
| `_wbia_database.sqlite3` | The primary WBIA database.  This database contains many tables to store image, annotation, name, asset properties and store various decisions and computed results. |
| `_wbia_staging.sqlite3`  | A staging database for semi-temporary results, content in this database is intended to eventually be committed or resolved into the primary database |
| `images/`                | A folder containing all of the localized images for the datbase.  Images are renamed when copied to this folder to be `<UUID>.<EXT>`.  The image's UUID is computed deterministically based on the pixel content of the image and we inherit any original file extensions to prevent loosing any metadata. |

We also have extensive caching processes for different computer vision and machine learning results along with modified versions of the original assets.  All cached data is stored in the `_ibsdb/_wbia_cache/` folder.  This folder can be deleted freely at any point to delete any pre-computed results.  Conversely, we also take daily snapshots of the primary and staging database whenever the WBIA controller is first started.  These backups are stored in `_ibsdb/_wbia_backups/`.  The WBIA controller also supports incremental updates, so a database backup is also performed before any database update.

We provide an example below on how to write a customized database controller along with example incremental update functions.

### First-order Data Objects

There are 5 main data constructs in WBIA:

| Object      | Prefix   | Description |
| ----------- | -------- | ----------- |
| Image       | GID      | Original images provided by the user or contributor. ImageSets and Images have a many-to-many relationship as more than one image can be in an ImageSet and an image can be a member of multiple ImageSets. |
| Annotation  | AID      | Pixel regions within an Image to designate a single animal. Annotations are, in their most basic form, a bounding box. Bounding boxes in WBIA are parameterized by (xtl, ytl, w, h) where `xtl` designates "x pixel coordinate for the top-left corner", `ytl` designates "y pixel coordinate for the top-left corner", `w` designates "the width of the box in pixel coordinates", and `h` designates "the height of the box in pixel coordinates". Annotations can also have a `theta` parameter describing rotation of the bounding box in cases where the region of interest is not parallel to the image boundaries, but annotations are always rectangular. Images and Annotations have a one-to-many relationship.  |
| Part        | PID      | A sub-region of an Annotation that designates a part of that animal (e.g. head, tail, fluke).  The Part object has almost 100% feature parity with Annotations except it has an additional parent Annotation attribute.  Parts are not the same as Annotations, and most algorithms do not accept Parts natively. |
| Name        | NID      | A ID label for an annotation.  A one-to-many relationship between Names and Annotations is usually the end-result of using the WBIA system. |
| ImageSet    | IMGSETID | A collection of images into a single group.  This grouping is used as a very general association and can indicate, for example, the set of images taken at the same time and place or the images that all contain a target species or the images that are to be used by a machine learning algorithm for training or testing. |

In general, a single instance of the WBIA code base only has one WBIA controller (commonly referred to by the variable name `ibs`) and is the primary development handle for any new features.  The controller is packed with very handy functions, including:

```
gid_list = ibs.get_valid_gids()  # returns the internal rowids for images
aid_list = ibs.get_valid_aids()  # returns the internal rowids for annotations
nid_list = ibs.get_valid_nids()  # returns the internal rowids for names
```

These lists of internal rowids allow for a wide range of adders, getters, setters, deleters and algorithm calls.  For example,

```
image_gps_list  = ibs.get_image_gps(gid_list)    # Returns a parallel list of image 2-tuple (lat, lon) GPS coordinates

annot_uuid_list = ibs.get_annot_uuids(aid_list)  # Returns a parallel list of annotation UUIDs

aids_list       = ibs.get_name_aids(nid_list)    # Returns a parallel list of lists of aids
```

In general, if you think a function should exist to associate two object types
or compute some value, it probably already exists.

## WBIA API

### Controller API Injection

Any function that is decorated by `@register_ibs_method` should accept the WBIA `ibs` controller object as the first parameter.

IMPORTANT: To be enabled, a plugin must be manually registered with the WBIA controller.  The registration process involves adding the module import name for this `_plugin.py` file to a list of plugins.  This list lives in the main WBIA repository at:

```
wbia/wbia/control/WBIAControl.py
```

The plugin must be added to the list with variable name `AUTOLOAD_PLUGIN_MODNAMES` at the top of the file.  On load, the WBIA controller will add its own injected controller functions and will then proceed to add any external plugin functions.  The injection code will look primarily for any functions with the `@register_ibs_method decorator`, but will also add any of the decorators described below for web requests.

```
_, register_ibs_method = controller_inject.make_ibs_register_decorator(__name__)
```

WBIA supports a web-based REST API that allows for local functions to be called from public end-points.  The POST and GET arguments that are passed to the web server by the client are automatically parsed into Python-valid objects using a customized JSON converter.  Any responses from API calls are also wrapped by a JSON encoding and thus also need to be serialize-able.

Any function that you wish to expose to the web simply needs a `@register_api` decorator added above the function's definition (after any `@register_ibs_method)` decorators.  This decorator takes in the endpoint and the allowed HTTP method(s) (e.g. GET, POST, PUT, DELETE) that are allowed.  The same REST endpoint can point to different functions through the specifications of different methods.

### WBIA REST API

There already exists an extensive REST API that mirrors the existing Python
API, but is a curated subset of useful functions.  For example, the Python API
function

```
gps_list = ibs.get_image_gps(gid_list=[1,2,3] )
```

has a mirrored REST API interface at the endpoint
```
[GET] /api/image/gps/?gid_list=[1,2,3]
```
and returns a JSON-formatted response with the same contents for gps_list.

Alternatively, a user can opt to expose an endpoint that does not apply any JSON response serialization.  Specific examples of this include serving HTML pages, raw image bytes, CSV or XML downloads, redirects, HTTP errors or any other non-JSON response.  Functions that are decorated with `@register_route` also benefit from the same parameter JSON serialization as `@register_api`.

### WBIA Web Interface

WBIA also supports a basic web interface with viewing and curation tools. For example, the routes `/view/imagesets/`, `/view/images/`, `/view/annotations/`, and `/view/parts/` allow for a user to quickly see the state of the database. There is also a batch uploading function to easily add a handful of images to a database without needing to use the full Python or REST APIs for larger imports.

The web tools for turking (borrowing the phrase from *Amazon Mechanical Turk*) support a wide range of helpful functions.  The most helpful interface is arguably the annotation bounding box and metadata interface.  This interface can be viewed at `/turk/detection/?gid=X` and shows the current annotations for Image RowID=X, where they are located, what metadata is set on them, what parts (if any) have been added to the annotations, and what metadata is on the parts.

### Background API Job Engine

The REST API has a background job engine.  The purpose of the job engine is to preserve the special properties of a responsive and state-less web paradigm.  In short, the WBIA web controller will automatically serialize concurrent requests but some API calls involve a very long processing delay. If a long API call is called in the main thread, it will deny any and all simultaneous web calls from resolving.  The solution is to mode any long API calls that are exposed by the web interface to the job engine to promote responsiveness and reduce or eliminate client-side web time outs.  Any API that uses the job engine (as shown in an example below) should return a job UUID and should be prefixed with `/api/engine/plugin/<Plugin Name>/.../.../` to differentiate it from an instantaneous call.  We also recommend having any engine calls accept the POST HTTP method by default.

A user or application can query on the status of a background job, get its original request metadata, and retrieve any results.  The job engine supports automatic callbacks with a specified URL and HTTP method when the job is complete.

```
register_api = controller_inject.get_wbia_flask_api(__name__)
register_route = controller_inject.get_wbia_flask_route(__name__)
```

## WBIA Dependency Graph

WBIA supports a dependency-graph cache computation structure for easy pipelining. This is similar to other frameworks (e.g. Luigi) but has been customized and implemented by hand to resolve assets consistent with the WBIA database.

In general, a dependency cache (referred to by `depc` in the code base) is a coding tool to eliminate the complexity of managing state and staged pipeline configurations.  For example, say we want to compute the sum and product of a cryptographically secure hash of an image's pixel data.  We may want to build a dependency graph that looks like this

```
                  +-----------+
                  |           |
                  |   Images  |
                  |           |
                  +-----+-----+
                        |
      +-----------------+-----------------+
      |                 |                 |
+-----+-----+     +-----+-----+     +-----+-----+
|           |     |           |     |           |
|  Feature  |     |    Hash   |     | Thumbnail |
|           |     |           |     |           |
+-----+-----+     +-----+-----+     +-----+-----+
                        |
                        +-----------------+
                        |                 |
                  +-----+-----+     +-----+-----+
                  |           |     |           |
                  |  HashSum  |     |  HashProd |
                  |           |     |           |
                  +-----------+     +-----------+
```

To compute the HashSum on an Image, we first need to compute a Hash on the Image.  The dependency cache will preserve this ordering by computing and storing intermediate results for use by the depc node you want to retrieve. Therefore, we would expect that any call to HashSum for Image RowID=10 would also compute the Hash for Image RowID=10.  Subsequently calling the call for HashProd on Image RowID=10 (with the same configuration) will simply retrieve the pre-computed Hash for RowID=10.

The WBIA dependency cache infrastructure designates three ROOT object types for this type of computation: Images, Annotations, and Parts.  There exists three parallel decorators that allow one to make a new function for the appropriate dependency graph tree.  Adding a new node to the graph requires writing a function with the correct inputs and a specific configured decorator. We provide a working example below on how to write the decorator for Hash and HashSum.

We provide an example below on how to create your own custom depc and decorator function

```
register_preproc_image = controller_inject.register_preprocs['image']
register_preproc_annot = controller_inject.register_preprocs['annot']
register_preproc_part  = controller_inject.register_preprocs['part']
```

## Miscellaneous notes

Note 1: The WBIA code base has a constants file for a lot of convenient conversions and names of constructs.  This constants module also keeps track of very convenient environment variables:

```
wbia.constants.CONTAINERIZED  (Set to True if running inside a Docker container)
wbia.constants.PRODUCTION     (Set to True if running in production mode)
```

When PRODUCTION is set to True, please observe a restraint in resource utilization for system memory, number of concurrent threads, and GPU memory.

Note 2: We suggest to use interactive embedding with utool.embed() whenever and wherever possible.  The use of ut.embed() (we commonly import `utool` with the shorthand namespace of `ut`) is used throughout the WBIA code base and is supremely helpful when debugging troublesome code.  We have set an example below that uses ut.embed() in the ibs.wbia_plugin_id_hello_world() documentation.  We highly recommend calling this function's example test and play around with the ibs controller object.  The ibs controller supports `TAB` completion for all method functions.  For example, when in the embedded iPython terminal, you can input:

```
In [1]: ibs
Out[1]: <WBIAController(testdb_identification) with UUID 1654bdc9-4a14-43f7-9a6a-5f10f2eaa279>

In [2]: gid_list = ibs.get_valid_gids()

In [3]: len(gid_list)
Out[3]: 69

In [4]: ibs.get_image_p <tab complete>
       [  get_image_orientation()            get_image_paths()                  get_image_species_uuids()           ]
       [  get_image_orientation_str()        get_image_reviewed()               get_image_thumbnail()               ]
       [< get_image_party_rowids()           get_image_sizes()                  get_image_thumbpath()              >]
       [  get_image_party_tag()              get_image_species_rowids()         get_image_thumbtup()                ]
```

This embedded terminal shows all of the WBIA functions that start with the prefix `ibs.get_image_p`, for example `ibs.get_image_paths()`.  If you are unsure about the API specification for this function, you can ask help from Python directly in the embedded session.

```
In  [5]: help(ibs.get_image_paths)
Out [5]: Help on method get_image_paths in module wbia.control.manual_image_funcs:

         get_image_paths(gid_list) method of wbia.control.WBIAControl.WBIAController instance
             Args:
                 ibs (WBIAController):  wbia controller object
                 gid_list (list): a list of image absolute paths to img_dir

             Returns:
                 list: gpath_list

             CommandLine:
                 python -m wbia.control.manual_image_funcs --test-get_image_paths

             RESTful:
                 Method: GET
                 URL:    /api/image/file/path/

             Example:
                 >>> # ENABLE_DOCTEST
                 >>> from wbia.control.manual_image_funcs import *  # NOQA
                 >>> import wbia
                 >>> # build test data
                 >>> ibs = wbia.opendb('testdb1')
                 >>> #gid_list = ibs.get_valid_gids()
                 >>> #gpath_list = get_image_paths(ibs, gid_list)
                 >>> new_gpath = ut.unixpath(ut.grab_test_imgpath('carl.jpg'))
                 >>> gid_list = ibs.add_images([new_gpath], auto_localize=False)
                 >>> new_gpath_list = get_image_paths(ibs, gid_list)
                 >>> ut.assert_eq(new_gpath, new_gpath_list[0])
                 >>> result = str(new_gpath_list)
                 >>> ibs.delete_images(gid_list)
                 >>> print(result)
```

The embedded session will dump out the doctest (hopefully with parameter and example usage documentation) for that controller function.

## Citation

If you use this code or its models in your research, please cite:

```
@inproceedings{crall2013hotspotter,
    title={Hotspotter — patterned species instance recognition},
    author={Crall, Jonathan P and Stewart, Charles V and Berger-Wolf, Tanya Y and Rubenstein, Daniel I and Sundaresan, Siva R},
    booktitle={2013 IEEE workshop on applications of computer vision (WACV)},
    pages={230--237},
    year={2013},
    organization={IEEE}
}

@inproceedings{parham2018animal,
    title={An animal detection pipeline for identification},
    author={Parham, Jason and Stewart, Charles and Crall, Jonathan and Rubenstein, Daniel and Holmberg, Jason and Berger-Wolf, Tanya},
    booktitle={2018 IEEE Winter Conference on Applications of Computer Vision (WACV)},
    pages={1075--1083},
    year={2018},
    organization={IEEE}
}

@inproceedings{berger2015ibeis,
    title={IBEIS: Image-based ecological information system: From pixels to science and conservation},
    author={Berger-Wolf, TY and Rubenstein, DI and Stewart, CV and Holmberg, J and Parham, J and Crall, J},
    booktitle={Bloomberg Data for Good Exchange Conference, New York, NY, USA},
    volume={2},
    year={2015}
}

@article{berger2017wildbook,
    title={Wildbook: Crowdsourcing, computer vision, and data science for conservation},
    author={Berger-Wolf, Tanya Y and Rubenstein, Daniel I and Stewart, Charles V and Holmberg, Jason A and Parham, Jason and Menon, Sreejith and Crall, Jonathan and Van Oast, Jon and Kiciman, Emre and Joppa, Lucas},
    journal={arXiv preprint arXiv:1710.08880},
    year={2017}
}
```



## Conclusion

Support for WBIA is maintained by Wild Me.

Wild Me is a non-profit located in Portland, OR, USA.

Please refer any questions to dev@wildme.org or https://github.com/WildMeOrg/wildbook-ia .

