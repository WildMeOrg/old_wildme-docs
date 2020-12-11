---
id: edm_api_overview
title: EDM API Overview
sidebar_label: Overview
---

The EDM API is used for communication between the official Codex frontend and the official Codex backend _only_. This document is meant to be a reference for developers working on the Codex platform. Attempting to use this API to scrape data is a violation of our terms and conditions and will result in your account being banned. 

## Overview
The primary purpose of the API is to interact with four classes of objects objects: [encounters](/docs/developers/edmapi/encounter), [individuals](/docs/developers/edmapi/individual), [users](/docs/developers/edmapi/user), and [orgs](/docs/developers/edmapi/org). All of these objects are associated with unique IDs. For each type of object there are endpoints for creation, reading, updating, deletion, and search.

There are three other groups of endpoints. [Site settings](/docs/developers/edmapi/site_settings) endpoints are used to configure global settings for the Codex instance. [Authentication](/docs/developers/edmapi/authentication) endpoints are used to manage users logging in and out. [Asset](/docs/developers/edmapi/assets) endpoints are used for uploading images and other files.

### Create
Create a new entity and receive a unique ID in response. The server responds with 200 if the request is successful and 400 if the entity already exists.

Endpoint taxonomy: `POST /api/v0/object-type`

### Read
Retrieve the object associated with a particular entity ID. The server responds with 200 if the request is successful and 402 if no matching entity is found.

Endpoint taxonomy: `GET /api/v0/object-type/entity-id`

### Update
Update the object associated with a particular entity ID. The server responds with 200 if the request is successful and 400 if the request is malformed. 

Endpoint taxonomy: `PUT /api/v0/object-type/entity-id`

### Delete
Delete the entity matching a given ID. The server responds with 200 if the request is successful and 402 if no matching entity is found.

Endpoint taxonomy: `DELETE /api/v0/object-type/entity-id`

### Search
Fetch a list of matching entity IDs based on search parameters. The server responds with 200 if the request is successful and 400 if the request is malformed. If no matching entities are found, the request will still succeed with `matches: []`.

*...still need to discuss search spec...*

Endpoint taxonomy: `GET /api/v0/search/object-type`

### Notes on Notation

**Internationalization/Localization** (I18N, L12N) details have not been finalized, but will be supported.  For the sake of examples below, the notation **L(example)** will be used to represent the JSON required to represent the localization of the string "*example*".  The actual schema of this type of data is to be determined.  Note that this is different than the literal string, which would be given as simply `"example"`.

Also, some *values* of properties may be returned as literals (e.g. in English), such as `"female"` or `"juvenile"` which the front-end may decide to independently use as a key to lookup in localization tables.  As such, even literal strings may ultimately be subjected to internationalization by front end.

In the case of **Taxonomies**, such as for a value of the property `species`, an example UUID will be given.  Assume this to be an ID to the Taxonomy class.

### Response Content

API Responses may contain a simple message (e.g. success or error) or more complex results (as in a search of objects).  This section describes some *proposed* fundamental basic standards across all responses.  ***[ under development ]***

#### HTTP Status Code
This is the most "basic" level of response status.  Codes in **2XX** range generally mean the request was processed.  Note however, a 200 response may still have `success: false` set within the *body* of the response.  **Non-2XX** codes may be dealt with accordingly at the discretion of the application making the call, but should also be expected to have a *body* with content as described below.

#### Response Body
The response body of an API call will always be a JSON Object, with some standardized top-level properties.  (Additional properties will appear as needed, such as a specific property with search result array, etc.)

`success` *(boolean)* - a broad indicator of whether the API call worked.  If not present, it should be assumed to be **false**.

`response` *(object)* - the actual content (expected results) of the API endpoint.  Currently, this is assumed to be a JSON object (i.e. not an array).  **Proposal:** a top-level `responseIsArray` (boolean; default false) signals that this is an array.  Otherwise, an array might be nested *under* `response`, such as:  `response: { list: [ ] }`.

`transactionId` *(uuid)* - internal reference (e.g. for logging); might be worth exposing in client during debugging (e.g. in javascript console). Should be considered optional (may not exist).

`message` *(object)* - potential user-facing message about response.  Because of localization, it will be encoded for translation.  Translation keys will start with `API_RESPONSE_` prefix, and it may include substitution values via the `args` property.^1^  It *may* be desirable to have this instead be **an array of multiple messages**, in the event we wish allow for more than one error message, etc.  ***TBD?***

*Example:*

```json
{
    "success": false,
    "transactionId": "0b56c6ca-47f1-4d47-8871-61e82f84ead7",
    "message": {
        "key": "API_RESPONSE_ERROR_NUMBER_BELOW_MIN",
        "args": [ 37, 100 ]
    }
}
```
Successful (with `response` content):
```json
{
    "success": true,
    "response": {  "somethingUseful": 1234 },
    "transactionId": "bd033d41-255b-457d-acb7-b009bfbed33f"
}
```

*Footnote on arg/substitutions:*
> ^1^ **substitution** via `args` might take on different forms depending on what front-end dev prefers.  (For example, I have been finding some interesting insight from other projects, such as [i18next](https://www.i18next.com/translation-function/formatting) and [Mozilla](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization).)
>
> For the case of examples, I am assuming array-offset format, such as java uses; but one could imagine name-value format, which might look more like `args: { value: 37, minValue: 100 }`; or even *more complex* formatting, such as i18next (above) uses.
>
> **Update: I think we will standardize on name-value format.** Such as: `message: { key: "INVALID_CONFIGURATION_ID", args: { id: "fubar" } }`
>
> So the above might be used like:
> - *English*: "{value} must be greater or equal to {minValue}"
> - *Yoda*: "Greater than {minValue}, {value} must be, young jedi."
>
> We should probably consider also "nested" translations (in general, not just for response messages).  For example, if the message text itself needs to reference *another* translation, should the translation happen on the back-end first, or be handled by the front end?
>
> Consider this example error message, whose *translation* might be **"The value '{0}' is invalid for {1}"**.  The second substitution might be the label of a option presented to a user, which itself has a localization (e.g. "Username" in English).  This substitution could happen in multiple ways:
>
> - **back-end**: (would need to know user-language so as to provide second arg) `message: { key: "API_RESPONSE_ERROR_INVALID_VALUE", args: [ "my user name", "Username" ] }`
> - **front-end translation**: (notation in second arg meaning nested translation must be done) `message: { key: "API_RESPONSE_ERROR_INVALID_VALUE", args: [ "my user name", { key: "FOO_BAR_SECTION_USERNAME" } ] }`
> - **front-end other**: in this case, the front-end code would not use/need any *textual message* but rather would use the `key` (and/or some *additional* info?) to provide something like a *visual message* to the user, such as highlighting the invalid input element in red, etc.
{.is-info}

