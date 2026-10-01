# BatchCreateRequestBatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **boolean** | Whether the batch should begin processing immediately | [optional] [default to undefined]
**operations** | [**Array&lt;BatchAddOperationsRequestOperationsInner&gt;**](BatchAddOperationsRequestOperationsInner.md) | Operations that will be executed as part of the batch | [default to undefined]

## Example

```typescript
import { BatchCreateRequestBatch } from 'fulcrum-generated';

const instance: BatchCreateRequestBatch = {
    start,
    operations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
