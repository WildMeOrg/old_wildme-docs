---
id: authentication
title: Authentication endpoints
---

Endpoints for logging in, logging out, forgot password, and update password.

## Login
`POST /api/v0/login`

Sample arguments: 
```
{
  "username": "ahab"
  "password": "ishmael2020"
}
```
Sample response:
```
{
  "cookie": "1j2cEAXxf452ke0lk"
}
```

## Logout 
`POST /api/v0/logout`

Arguments: 
```
{
  "username": "ahab"
}
```

## RESET password
`POST /api/v0/reset`

Sample arguments: 
```
{
  "email": "ahab@gmail.com"
}
```
