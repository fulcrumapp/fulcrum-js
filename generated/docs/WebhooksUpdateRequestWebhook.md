# WebhooksUpdateRequestWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Updated display name for the webhook | [optional] [default to undefined]
**url** | **string** | Updated destination URL that will receive webhook payloads | [optional] [default to undefined]
**active** | **boolean** | Whether the webhook is enabled | [optional] [default to undefined]
**run_for_bulk_actions** | **boolean** | Whether the webhook executes for bulk record actions | [optional] [default to undefined]

## Example

```typescript
import { WebhooksUpdateRequestWebhook } from 'fulcrum-generated';

const instance: WebhooksUpdateRequestWebhook = {
    name,
    url,
    active,
    run_for_bulk_actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
