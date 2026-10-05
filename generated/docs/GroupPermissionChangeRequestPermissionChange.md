# GroupPermissionChangeRequestPermissionChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of permission to change | [default to undefined]
**group_id** | **string** | Identifier of the group | [default to undefined]
**add** | **Array&lt;string&gt;** | IDs to add to the permission | [optional] [default to undefined]
**remove** | **Array&lt;string&gt;** | IDs to remove from the permission | [optional] [default to undefined]

## Example

```typescript
import { GroupPermissionChangeRequestPermissionChange } from 'fulcrum-generated';

const instance: GroupPermissionChangeRequestPermissionChange = {
    type,
    group_id,
    add,
    remove,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
