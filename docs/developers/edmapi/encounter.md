---
id: encounter
title: Encounter endpoints
---

Encounter object prototype:
```
{
  "id": null,
  "thumbnail_id": null,
  "species": null,
  "assets": [],
  "org_id": null,
  "context": null,
  "notes": null,
  "lat": null,
  "long": null,
  "region": null,
  "country": null,
  "project": null,
  "status": "IN_DISCOVERY_QUEUE",
  "custom_fields": [],
  "photographer_name": null,
  "photographer_email": null,
  "permissions": "LIMITED",
  "annotations": [],
}
```

**Context** is an enum with four possible values: `UNKNOWN`, `WILDLIFE_TOUR`, `OPPORTUNISTIC_SIGHTING`, `RESEARCH_EFFORT`.

**Permissions** is an enum with three possible values: `LIMITED`, `PRIVATE`, and `PUBLIC`.

**Region** can be any region specified in the site settings object, as well as `unknown`.

**Species** can be any species specified in the site settings object, as well as `unknown`.

**Status** is an enum with 6 possible values: `IN_DISCOVERY_QUEUE`, `DISCOVERING`, `IN_IDENTIFICATION_QUEUE`, `IDENTIFYING`, `PENDING_REVIEW`, `COMPLETE`, and `ERROR`.

Sample encounter object:
```
{
  "id": "8dcd818a110c",
  "thumbnail_id": "309c2836ba00",
  "species": "5a54a483-9f00-4613-a09c-56627cece7f4",
  "assets": ["309c2836ba00","1fdac362b029", "fa3b87f8e88c"],
  "org_id": "7182238bb1a7",
  "context": "UNKNOWN",
  "notes": "",
  "lat": null,
  "long": null,
  "region": "Antigua",
  "country": "Colombia",
  "project": "",
  "photographer_name": "",
  "photographer_email": "",
  "permissions": "PUBLIC",
  "status": "PENDING_REVIEW",
  "custom_fields": [{
    "water_depth": 52.1,
    "salinity": -4.1
  }],
  "annotations": [{
    "asset_id": "1fdac362b029",
    "x1": 42,
    "y1": 82,
    "x2": 234,
    "y2": 437,
    "match": null,
    "sex": "female",
    "status": "pregnant",
    "observed_behavior": null,
    "custom_fields": [{
      "Scarring": "None"
    }],
    "candidates": [{
      "individual_id": "9d5ce1b6b099",
      "annotation_id": "5Tcce1b6b087",
      "encounter_id": "7m4ce1b6b00F",
      "scores": [{
        "algorithm": "CurvRank",
        "asset_id": "3b97fa6c5273",
        "score": 1.092
      }, 
      {
        "algorithm": "SmartE",
        "asset_id": "f176d48fb407",
        "score": 0.239
      },
      ...
      ],
      "selected_annotation_id": "5Tcce1b6b087"
      "selected_candidate_id": "5Tcce1b6b087"
    }]
  }],
}
```

The **annotation** object must have an `asset_id` and coordinates to draw a bounding box inside that image (`x1`, `y1`, `x2`, `y2`). The `asset_id` must match one of the images in the encounter's `assets` array. The other properties are optional. 

The **candidates** property is populated by the backend after identification has been performed. When a candidate match is selected, the `selected_candidate_id` and `selected_annotation_id` fields will be set. 

## Create encounter 
`POST /api/v0/encounters`
This action can be performed when authenticated as any user. 

## Read encounter
`GET /api/v0/encounters/encounter-id` 
This action can be performed without authentication. Some attributes will be left out if authentication is not provided, or if the authenticated user doesn't have permission to view those attributes.

## Update encounter 
`PUT /api/v0/encounters/encounter-id`
This action can only be performed when authenticated as an administrator or the user who submitted the encounter.

## Delete encounter 
`DELETE /api/v0/encounters/encounter-id`
This action can only be performed when authenticated as an administrator or the user who submitted the encounter. 

