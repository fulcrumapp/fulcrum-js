# LayersCreateRequestLayer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the layer | [default to undefined]
**description** | **string** | Description of the layer | [optional] [default to undefined]
**type** | **string** | Layer type (e.g., xyz, wms, geojson) | [default to undefined]
**source** | **string** | Source URL or data for the layer | [optional] [default to undefined]

## Example

```typescript
import { LayersCreateRequestLayer } from 'fulcrum-generated';

const instance: LayersCreateRequestLayer = {
    name,
    description,
    type,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
