# CreateBatchRequestBatchOperationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** | Action to perform for the operation | [default to undefined]
**resource** | **string** | Resource type the operation targets | [default to undefined]
**form_id** | **string** | Identifier of the form containing the records | [optional] [default to undefined]
**query** | **string** | SQL query used to select records | [optional] [default to undefined]
**ids** | **Array&lt;string&gt;** | Explicit record identifiers to include in the operation | [optional] [default to undefined]

## Example

```typescript
import { CreateBatchRequestBatchOperationsInner } from 'fulcrum-generated';

const instance: CreateBatchRequestBatchOperationsInner = {
    action,
    resource,
    form_id,
    query,
    ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
