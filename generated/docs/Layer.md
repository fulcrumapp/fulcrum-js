# Layer

Layer returned by the API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the layer | [optional] [default to undefined]
**description** | **string** | Description of the layer | [optional] [default to undefined]
**type** | **string** | Layer type (e.g., fulcrum, xyz, tilejson, geojson, mbtiles, wms, feature-service) | [optional] [default to undefined]
**source** | **string** | Source URL or data for the layer | [optional] [default to undefined]
**bounds** | **Array&lt;number&gt;** | Layer bounds | [optional] [default to undefined]
**center** | **number** | Layer center | [optional] [default to undefined]
**maxzoom** | **number** | Maximum layer zoom | [optional] [default to undefined]
**minzoom** | **number** | Minimum layer zoom | [optional] [default to undefined]
**access_token** | **string** | Layer access token | [optional] [default to undefined]
**id** | **string** | Layer ID | [optional] [default to undefined]
**created_at** | **string** | Timestamp when the layer was created | [optional] [default to undefined]
**updated_at** | **string** | Timestamp when the layer was last updated | [optional] [default to undefined]
**file_size** | **number** | File size in bytes, when applicable | [optional] [default to undefined]
**file_version** | **number** | Number of times the layer file has changed; 0 for layers without files | [optional] [readonly] [default to undefined]

## Example

```typescript
import { Layer } from 'fulcrum-generated';

const instance: Layer = {
    name,
    description,
    type,
    source,
    bounds,
    center,
    maxzoom,
    minzoom,
    access_token,
    id,
    created_at,
    updated_at,
    file_size,
    file_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
