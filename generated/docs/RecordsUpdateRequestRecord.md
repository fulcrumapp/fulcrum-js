# RecordsUpdateRequestRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_id** | **string** | ID of the form this record belongs to | [optional] [default to undefined]
**latitude** | **number** | Latitude coordinate | [optional] [default to undefined]
**longitude** | **number** | Longitude coordinate | [optional] [default to undefined]
**form_values** | **object** | Field values keyed by field key | [optional] [default to undefined]
**status** | **string** | Status of the record | [optional] [default to undefined]
**project_id** | **string** | ID of the project | [optional] [default to undefined]
**assigned_to_id** | **string** | ID of user assigned to this record | [optional] [default to undefined]

## Example

```typescript
import { RecordsUpdateRequestRecord } from 'fulcrum-generated';

const instance: RecordsUpdateRequestRecord = {
    form_id,
    latitude,
    longitude,
    form_values,
    status,
    project_id,
    assigned_to_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
