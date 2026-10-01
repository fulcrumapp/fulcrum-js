# BatchAddOperationsRequestOperationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Action to perform for the operation | [default to undefined]
**resource** | **string** | Resource type the operation targets | [default to undefined]
**form_id** | **string** | Identifier of the form containing the records | [optional] [default to undefined]
**record_id** | **string** | Identifier of the record to delete | [optional] [default to undefined]

## Example

```typescript
import { BatchAddOperationsRequestOperationsInner } from 'fulcrum-generated';

const instance: BatchAddOperationsRequestOperationsInner = {
    action,
    resource,
    form_id,
    record_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
