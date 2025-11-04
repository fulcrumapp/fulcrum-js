# MembershipsChangePermissionsRequestChange

Permission change configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of permission change | [default to undefined]
**form_id** | **string** | Form ID (when type is form_members) | [optional] [default to undefined]
**project_id** | **string** | Project ID (when type is project_members) | [optional] [default to undefined]
**layer_id** | **string** | Layer ID (when type is layer_members) | [optional] [default to undefined]
**add** | **Array&lt;string&gt;** | Array of member IDs to add | [optional] [default to undefined]
**remove** | **Array&lt;string&gt;** | Array of member IDs to remove | [optional] [default to undefined]

## Example

```typescript
import { MembershipsChangePermissionsRequestChange } from 'fulcrum-generated';

const instance: MembershipsChangePermissionsRequestChange = {
    type,
    form_id,
    project_id,
    layer_id,
    add,
    remove,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
