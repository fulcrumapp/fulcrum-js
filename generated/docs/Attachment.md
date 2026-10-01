# Attachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the attachment | [optional] [default to undefined]
**owners** | [**Array&lt;AttachmentOwnersInner&gt;**](AttachmentOwnersInner.md) | List of owner references for the attachment | [optional] [default to undefined]
**name** | **string** | Filename of the attachment | [optional] [default to undefined]
**file_size** | **number** | Size of the attachment file in bytes | [optional] [default to undefined]
**url** | **string** | URL to access the attachment | [optional] [default to undefined]
**uploaded_at** | **string** | Timestamp when the attachment was uploaded | [optional] [default to undefined]
**complete** | **boolean** | Whether the attachment upload is complete | [optional] [default to undefined]
**attached_to_id** | **string** | ID of the resource this attachment is attached to | [optional] [default to undefined]
**attached_to_type** | **string** | Type of resource this attachment is attached to | [optional] [default to undefined]
**status** | **string** | Status of the attachment | [optional] [default to undefined]

## Example

```typescript
import { Attachment } from 'fulcrum-generated';

const instance: Attachment = {
    id,
    owners,
    name,
    file_size,
    url,
    uploaded_at,
    complete,
    attached_to_id,
    attached_to_type,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
