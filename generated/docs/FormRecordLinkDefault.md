# FormRecordLinkDefault

Copies a value from a field on this form into a field on a newly created linked record. These properties are optional in the shared schema because Rails accepts incomplete input; when serializing a default, Rails includes source_field_key and destination_field_key (null if unset). Unknown input keys are accepted and dropped; responses serialize only declared properties. Ignored and not stored when allow_multiple_records is true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_field_key** | **string** | Key of the field on this form whose value is copied. | [optional] [default to undefined]
**destination_field_key** | **string** | Key of the field on the linked form that receives the copied value. | [optional] [default to undefined]

## Example

```typescript
import { FormRecordLinkDefault } from 'fulcrum-generated';

const instance: FormRecordLinkDefault = {
    source_field_key,
    destination_field_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
