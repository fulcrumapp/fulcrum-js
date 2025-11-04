# FinalizeAttachmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Attachment identifier returned from the create attachment request | [default to undefined]
**owners** | [**Array&lt;FinalizeAttachmentRequestOwnersInner&gt;**](FinalizeAttachmentRequestOwnersInner.md) | Owners to associate with the attachment if they were not provided during creation | [optional] [default to undefined]

## Example

```typescript
import { FinalizeAttachmentRequest } from 'fulcrum-generated';

const instance: FinalizeAttachmentRequest = {
    id,
    owners,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
