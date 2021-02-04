---
id: locationID
title: Study Sites
---

import useBaseUrl from '@docusaurus/useBaseUrl';

A study site in Wildbook (also called an Encounter's "location ID") is a fixed value that represents a specific area where wildlife data is collected. A study site is one of Wildbook's three "where" data fields, which also include the more exact GPS coordinates (exact positioning) and the less exact verbatim locality (simply called "location"). Study sites defined in Wildbook can be used to search and filter data, define location-specific permissions, and filter computer vision matching to only likely or realistic resighting locations.

<img src={useBaseUrl('img/encounterLocationID.png')} alt="encounterLocationID" width="33%" height="33%" />

In this example, "Maldives" is the location ID for this reported Encounter. Location IDs can be as large as oceans or continents and as small as specific SCUBA diving buoys. The base definition of a study site is a location that you repeatedly visit to observe wildlife. 

## Reporting an Encounter with a Location ID

When you [report an Encounter](report_encounter.md), you can set its location ID directly. Location IDs are hierarchical and nested, allowing for regional organization.

<img src={useBaseUrl('img/submitLocationID.png')} alt="encounterLocationID" width="33%" height="33%" />

An important aspect of setting a location ID on an Encounter submission is that the location ID will be used to filter automatic matching to only that study site and species. If you wish to match against the entire Flukebook catalog or other study sites (such as regional study sites nearby), [you can start a manual match from the Encounter](matching_process.md#manually-starting-a-match), which allows you to multi-select location IDs to match an Annotation against, as shown below.

<img src={useBaseUrl('img/matchCriteria.png')} alt="matchCriteria" height="50%" width="50%" /> 

Assigning your Encounters to the correct location IDs will ensure your data is easy to find and that computer vision matching can be filtered to a specific site and other logical sites in the region. Avoiding global photo ID matching for a species and excluding implausible movement can help improve matching accuracy by removing potential false positives in the match results.

## Adding a New Study Site

To add a new study site, you'll need to contact your Wildbook's administrator or make the request at the [Wildbook Community](https://community.wildme.org). Location IDs are added to a file in Wildbook named locationID.json. Each location ID is defined in the JSON format as follows:

```
{ "name":"Iceland", "id":"Iceland", "locationID":[] }
```

and can be nested.

	{"name":"South Pacific","id":"South Pacific","locationID":[
				{"name": "Tasman Sea", "id": "Tasman Sea" },
				{ "name":"NewZealand", "id":"NewZealand", "locationID":[] }
	]}
The fields are used as follows:

- *name* - the descriptive, human-readable name of the study site
- *id* - the value of the study site to store in the "ENCOUNTER" table of the Wildbook database in the "LOCATIONID" column. This value must be unique in locationID.json
- *locationID* - a JSON array of other location IDs that are nested and logical subsites of this location

Restart Tomcat after making changes.

### Example locationID.json

[Here is an example locationID.json file from the Flukebook.org platform.](https://github.com/WildMeOrg/Wildbook/blob/flukebook/src/main/resources/bundles/locationID.json)
