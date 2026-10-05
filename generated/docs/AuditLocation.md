# AuditLocation

Location metadata captured at creation or update time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **number** | The latitude coordinate. | [optional] [default to undefined]
**longitude** | **number** | The longitude coordinate. | [optional] [default to undefined]
**altitude** | **number** | The altitude in meters. | [optional] [default to undefined]
**horizontal_accuracy** | **number** | The horizontal accuracy in meters. | [optional] [default to undefined]

## Example

```typescript
import { AuditLocation } from 'fulcrum-generated';

const instance: AuditLocation = {
    latitude,
    longitude,
    altitude,
    horizontal_accuracy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
