---
id: assets
title: Asset endpoints
---

In most cases, assets are images associated with encounters. However, other media can be associated with encounters, such as videos and audio recordings. The limit is 20MB per asset. This API is also used for logos and profile pictures.

Asset object prototype:
```
{
  "id": null,
  "owner_id": null,
  "formats": {
    "large": false,
    "mid": false,
    "thumbnail": false,
    "watermark": false,
  }
}
```

Sample asset object:
```
{
  "id": "Ooc8cx2CaxcC29yCx",
  "owner_id": "eCWkx92CaxcC29C6a",
  "formats": {
    "large": false,
    "mid": false,
    "thumbnail": true,
    "watermark": false,
  }
}
```

## Create asset
`CREATE /api/v0/asset`
This action can be performed when authenticated as any user. When a user uploads an asset they automatically become that asset's owner.
*...need to specify how img data will be handled...*

## Delete asset
`DELETE /api/v0/asset/asset-id`

This action can be performed when authenticated as an administrator or the asset's owner. All derivative assets wil be deleted as well (thumbnail, watermark, etc).
