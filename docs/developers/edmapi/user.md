---
id: user
title: User endpoints
---

User object prototype:
```
{
  "id": null,
  "name": null,
  "affiliation": null,
  "website": null,
  "email": null,
  "photo_id": null,
  "role": "user",
  "organizations": [],
  "encounters": [],
  "collaborators": [],
  "followed_users": [],
  "followed_individuals": [],
  "followed_orgs": [],
  "followed_encounters": []
}
```

Sample user object:
```
{
  "id": "GGtP32eZvKYlo2C254T9E7S",
  "name": "Captain Ahab",
  "affiliation": "University of Oregon",
  "website": "https://id.sito.org/uwi/",
  "email": "ahab@gmail.com",
  "photo_id": "/assets/ahab1.jpg",
  "role": "user",
  "collaborators": [],
  "organizations": [
    "9XJJ02eZvKYlo2ClwuJ1rbA",
    "ZvKYlo2ClwuJ1rbAcWczE31",
  ],
  "encounters": [
    "39bf0f5a0633",
    "eb1b96242453",
    "bd8f1eaf7fe3"
  ],
  "followed_users": [
    "c13Ylo2ClwuJ1rbAcWczE35",
  ],
  "followed_individuals": [],
  "followed_orgs": [],
  "followed_encounters": []
}
```
**Role** is an enum with three options: `user`, `moderator`, and `administator`.

## Create user 
`POST /api/v0/user`
This action can be performed without authentication.

## Read user
`GET /api/v0/user/user-id` 
This action can be performed without authentication. Some attributes will be left out if authentication is not provided, or if the authenticated user doesn't have permission to view those attributes.

## Update user 
`PUT /api/v0/user/user-id`
This action can only be performed when authenticated as an administrator or the user in question.

## Delete user 
`DELETE /api/v0/user/user-id`
This action can only be performed when authenticated as an administrator. 
