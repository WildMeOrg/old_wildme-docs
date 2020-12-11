---
id: site_settings
title: Site settings endpoints
---

## Overview
Previous **java .properties files** have been replaced by a Configuration api.  Configuration properties accept various *values* based upon their defined *types* and other possible restrictions.  The metadata describing these constraints is called a **definition**.  Therefore, each configuration property has a *definition* and *value*.

Properties are hierarchical, where the leaf nodes are where actual values are settable. This allows for logical organization of configuration properties.  The properties, therefore, have IDs which are in dot-notation representing their place in the heirarchy.  For example: `socialAuth.facebook.auth.secret` and `socialAuth.facebook.auth.appid` might be two related configuration properties.

TODO:
- document traversing config trees from top-levels
- "bundles"
- "complex" types (taxonomy, custom fields)

## Configuration endpoints

Standard "CRUD" does not apply to configuration, as values can only be read and updated (CU?).  This is done via the endpoint:

* **/api/v0/configuration/*PROPERTY_ID***

A `GET` call will read a property value and a `POST` will update it.  Note that the POST body should be a JSON object with the **property ID** as key(s), so therefore, this ID can be left off the endpoint.  (e.g. `/api/v0/configuration` only).   A POST may contain multiple values:
```json
{
    "foo.bar.value": 12345,
    "foo.fu.name": "something"
}
```

Configuration endpoint responses follow [Response Content](/en/developers/edm-api#response-body) standards, so `GET /api/v0/configuration/site.name` might look like:
```json
{
    "success": true,
    "response": {
        "id": "site.name",
        "value": "fubar"
    },
    "transactionId": "54ecfda2-14b4-4aab-a2c2-f558e20c164b"
}
```
or (for an invalid ID, thus including a `.message`)
```json
{
    "success": false,
    "message": {
        "key": "invalid_configuration_id",
        "args": {
            "id": "not.a.valid.id"
        }
    },
    "transactionId": "1f69afe7-4383-4473-acfc-4c3f49e1c73d"
}
```

## Configuration Definition endpoint

Configuration *definitions* can be found (read-only, so R in CRUD) by altering the endpoint to be:
* **/api/v0/configurationDefinition/*PROPERTY_ID***
This might produce something such as:
```json
{
    "schema": {
        "displayOrder": 0,
        "panel": true
    },
    "fieldTypeKey": "string",
    "readOnly": false,
    "isPrivate": false,
    "transactionId": "39984090-bf70-42ac-9a97-6c327b4ad4f0",
    "required": true,
    "settable": true,
    "descriptionId": "CONFIGURATION_SITE_NAME_DESCRIPTION",
    "translationId": "CONFIGURATION_SITE_NAME",
    "labelId": "CONFIGURATION_SITE_NAME_LABEL",
    "success": true,
    "name": "configuration_site_name",
    "parentConfigurationId": "site",
    "configurationId": "site.name",
    "fieldType": "string",
    "currentValue": "fubar"
}
```

The contents of the definition is to guide the UI/UX and its structure is under development.
(more here soon?)

### Related code repo README files:
* [java configuration package](https://github.com/WildbookOrg/Wildbook/tree/uiux/src/main/java/org/ecocean/configuration)
* [config-json JSON files](https://github.com/WildbookOrg/Wildbook/blob/uiux/src/main/resources/bundles/config-json/README.md)


## Taxonomy endpoints (deprecated / TBD)
**THIS SECTION IS UNDER CONSTRUCTION AND MAY BE INVALID**
(usual CRUD todo)

Taxonomy object prototype:
```json
{
  id: null,
  scientificName: null,
  itisNumber: null,
  nonSpecific: false,
  commonNames: []
}
```

Taxonomy example:
```json
{
  id: "4445cd97-3737-4e4b-98b9-034e16e8d298",
  itisNumber: 555654,
  scientificName: "Delphinus capensis",
  commonNames: [L(Common dolphin)*, L(Common Long-Beaked Dolphin)*]
}
```

(*) **Note on common names**: not sure how we should *localize* these.  **L12N IDs** might not make sense: there may not, for example, be language translations of _all_ of them; but maybe that is okay!  Otherwise we might adopt a quick shorh-hand notation, e.g. `{enUs: "Canada goose", frCa: "outarde", frFr: "bernache du Canada"}`.
