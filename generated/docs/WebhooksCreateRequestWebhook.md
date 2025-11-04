# WebhooksCreateRequestWebhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name for the webhook | [default to undefined]
**url** | **string** | Destination URL that will receive webhook payloads | [default to undefined]
**active** | **boolean** | Whether the webhook is enabled | [optional] [default to undefined]
**run_for_bulk_actions** | **boolean** | Whether the webhook runs for bulk record actions | [optional] [default to undefined]

## Example

```typescript
import { WebhooksCreateRequestWebhook } from 'fulcrum-generated';

const instance: WebhooksCreateRequestWebhook = {
    name,
    url,
    active,
    run_for_bulk_actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
