# CreateAttachmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Optional display name for the attachment file | [optional] [default to undefined]
**file_size** | **number** | File size in bytes used for storage validation | [optional] [default to undefined]
**metadata** | **object** | Optional metadata that will be stored with the attachment | [optional] [default to undefined]
**owners** | [**Array&lt;CreateAttachmentRequestOwnersInner&gt;**](CreateAttachmentRequestOwnersInner.md) | At least one owner that the attachment belongs to | [default to undefined]

## Example

```typescript
import { CreateAttachmentRequest } from 'fulcrum-generated';

const instance: CreateAttachmentRequest = {
    name,
    file_size,
    metadata,
    owners,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
