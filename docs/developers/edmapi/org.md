---
id: org
title: Org endpoints
---

Org object prototype:
```
{
  "id": null,
  "name": null,
  "affiliation": null,
  "description": null,
  "website": null,
  "email": null,
  "photo_id": null,
  "admins": [],
  "members": []
}
```

Sample org object:
```
{
  "id": "GGtP32eZvKYlo2C254T9E7S",
  "name": "Coastal Foundation",
  "affiliation": "Northern Rhode Island University",
  "description": "Founding various coasts since 2017",
  "website": "https://coastal-foundation.org/",
  "email": "admin@coastal-foundation.org",
  "photo_id": "JCc51sXk0dkXc9lafCd",
  "admins": ["9XJJ02eZvKYlo2ClwuJ1rbA"],
  "members": [
    "9XJJ02eZvKYlo2ClwuJ1rbA",
    "ZvKYlo2ClwuJ1rbAcWczE31",
  ]
}
```

## Create org 
`POST /api/v0/user`
This action can be performed when authenticated as any user. Any user who creates an org will be automatically added as a member and administrator of that org. 

## Read org
`GET /api/v0/user/user-id` 
This action can be performed without authentication. Some attributes will be left out if authentication is not provided, or if the authenticated user doesn't have permission to view those attributes.

## Update org 
`PUT /api/v0/user/user-id`
This action can only be performed when authenticated as an administrator or an admin of the org in question.

## Delete org 
`DELETE /api/v0/user/user-id`
This action can only be performed when authenticated as an administrator. 

