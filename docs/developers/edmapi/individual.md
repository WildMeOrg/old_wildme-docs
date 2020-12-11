---
id: individual
title: Individual endpoints
---

Individual schema:
```
{
        id: string,
        names: [
          {
            name: string,
            label: string,
            userId: string,
            orgId: string,
          }
        ],
        images: [
          {
                id: string,
                url: string,
                isProfile: boolean,
          }
        ],
        users: [
          {
            id: string,
            encounters: array of strings,
          }
        ],
        customFields: [
          {
            id: number,
            value: any,
          }
        ],
        relationships: [
          {
            targetIndividualId: string,
            direction: enum, // 'object' or 'subject',
            type: enum,
          }
        ],
        history: [
          {
            userId: string,
            date: int,
            action: string, // ie. 'Changed "sex" from male to female'
          }
        ],
        sex: enum,
        taxonomy: {
          id: string,
          itisTsn: int,
          scientificName: string,
        },
        encounters: array of TBD,
        timeOfBirth: iso8601 string,
        timeOfDeath: iso8601 string,
}
```

## Create individual 
`POST /api/v0/individuals`
This action can be performed when authenticated as any user. Any user who creates an org will be automatically added as a member and administrator of that org. 

## Read individual
`GET /api/v0/individuals/individual-id` 
This action can be performed without authentication. Some attributes will be left out if authentication is not provided, or if the authenticated user doesn't have permission to view those attributes.

## Update individual 
`PUT /api/v0/individuals/individual-id`
This action can only be performed when authenticated as an administrator.

## Delete individual 
`DELETE /api/v0/individuals/individual-id`
This action can only be performed when authenticated as an administrator. 
