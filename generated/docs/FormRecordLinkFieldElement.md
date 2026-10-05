# FormRecordLinkFieldElement

A field linking records from another form. form_id is required and must identify an existing form by resource id. At least one of allow_existing_records or allow_creating_records must be true; the API does not enable either when omitted. This shared schema permits unknown element properties on input; Rails accepts then drops them, including linked_form_id and allow_empty_records. Responses serialize only declared properties. Saving without a link is controlled by the common required property. The account plan must have record links enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**key** | **string** | Unique 4-character hex key identifying this element within the form (e.g. \&#39;af72\&#39;) | [default to undefined]
**label** | **string** | Display label for the field | [default to undefined]
**data_name** | **string** | Snake-case column name used in exports and the query API (e.g. \&#39;park_name\&#39;) | [default to undefined]
**description** | **string** | Help text shown below the field label | [optional] [default to undefined]
**required** | **boolean** | Whether a value is required to save the record | [optional] [default to false]
**disabled** | **boolean** | Whether the field is read-only in the mobile app | [optional] [default to false]
**hidden** | **boolean** | Whether the field is hidden by default | [optional] [default to false]
**default_value** | **any** |  | [optional] [default to undefined]
**visible_conditions_type** | **string** | Whether ALL or ANY visible conditions must be met. Null means no conditions. | [optional] [default to undefined]
**visible_conditions** | [**Array&lt;FormElementCondition&gt;**](FormElementCondition.md) | Conditions that control when this element is visible | [optional] [default to undefined]
**required_conditions_type** | **string** | Whether ALL or ANY required conditions must be met. Null means no conditions. | [optional] [default to undefined]
**required_conditions** | [**Array&lt;FormElementCondition&gt;**](FormElementCondition.md) | Conditions that control when this element becomes required | [optional] [default to undefined]
**form_id** | **string** | Resource id of an existing form in this account whose records can be linked. This is the element property; Rails derives its internal association from it. An element-level linked_form_id is ignored. | [default to undefined]
**allow_existing_records** | **boolean** |  | [default to undefined]
**allow_creating_records** | **boolean** |  | [default to undefined]
**allow_updating_records** | **boolean** | Allow editing a linked record inline. Omitted values are stored as false. The form builder writes false; that is not an API request default. | [optional] [default to undefined]
**allow_multiple_records** | **boolean** | Allow linking more than one record. Omitted values are stored as false. When true, record_defaults are ignored and not stored. The form builder writes false; that is not an API request default. | [optional] [default to undefined]
**record_conditions_type** | **string** | Whether all or any record_conditions must match. Null when there are no conditions. With conditions present, \&quot;all\&quot; is stored as \&quot;all\&quot;; an omitted value or any other string is stored as \&quot;any\&quot;. Responses contain \&quot;all\&quot;, \&quot;any\&quot;, or null. | [optional] [default to undefined]
**record_conditions** | [**Array&lt;FormRecordLinkCondition&gt;**](FormRecordLinkCondition.md) | Filters which linked-form records can be selected. Null when there are no conditions. Each serialized item has linked_form_field_key, operator, and either value or value_field_key; missing input keys are not rejected. | [optional] [default to undefined]
**record_defaults** | [**Array&lt;FormRecordLinkDefault&gt;**](FormRecordLinkDefault.md) | Values copied onto a newly created linked record. Null when unset. Ignored and not stored when allow_multiple_records is true. Each serialized item has source_field_key and destination_field_key; missing input keys are not rejected. | [optional] [default to undefined]
**default_previous_value** | **boolean** | When true, the mobile app pre-fills the previously used link. Omitted values are stored as false. | [optional] [default to undefined]

## Example

```typescript
import { FormRecordLinkFieldElement } from 'fulcrum-generated';

const instance: FormRecordLinkFieldElement = {
    type,
    key,
    label,
    data_name,
    description,
    required,
    disabled,
    hidden,
    default_value,
    visible_conditions_type,
    visible_conditions,
    required_conditions_type,
    required_conditions,
    form_id,
    allow_existing_records,
    allow_creating_records,
    allow_updating_records,
    allow_multiple_records,
    record_conditions_type,
    record_conditions,
    record_defaults,
    default_previous_value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
