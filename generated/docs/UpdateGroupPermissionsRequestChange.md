# UpdateGroupPermissionsRequestChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of permission change being applied | [default to undefined]
**group_id** | **string** | Group identifier | [default to undefined]
**add** | **Array&lt;string&gt;** | Identifiers to add to the group | [optional] [default to undefined]
**remove** | **Array&lt;string&gt;** | Identifiers to remove from the group | [optional] [default to undefined]

## Example

```typescript
import { UpdateGroupPermissionsRequestChange } from 'fulcrum-generated';

const instance: UpdateGroupPermissionsRequestChange = {
    type,
    group_id,
    add,
    remove,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
