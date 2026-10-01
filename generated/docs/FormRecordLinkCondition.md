# FormRecordLinkCondition

A filter on which records from the linked form can be selected. These properties are optional in the shared schema because Rails accepts incomplete input. When serializing a condition, Rails includes linked_form_field_key and operator (null if unset); it includes value (possibly null) unless value_field_key is set, in which case it includes only value_field_key. Unknown input keys are accepted and dropped; responses serialize only declared properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_form_field_key** | **string** | Key of the field on the linked form that is tested. | [optional] [default to undefined]
**operator** | **string** | Comparison operator. The form builder writes equal_to, not_equal_to, contains, starts_with, greater_than, less_than, is_empty, or is_not_empty. Choice, classification, and yes/no fields use equal_to, not_equal_to, is_empty, and is_not_empty. | [optional] [default to undefined]
**value** | [**FormRecordLinkConditionValue**](FormRecordLinkConditionValue.md) |  | [optional] [default to undefined]
**value_field_key** | **string** | Key of a field on this form whose value is compared against the linked form field. When set, this takes precedence over value in the serialized item. | [optional] [default to undefined]

## Example

```typescript
import { FormRecordLinkCondition } from 'fulcrum-generated';

const instance: FormRecordLinkCondition = {
    linked_form_field_key,
    operator,
    value,
    value_field_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
