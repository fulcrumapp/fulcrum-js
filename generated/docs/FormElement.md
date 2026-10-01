# FormElement

A single form element. Use the `type` property to determine which element-specific fields apply.

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
**numeric** | **boolean** | When true, restricts input to numbers. Use &#x60;format&#x60; to specify integer vs decimal. | [optional] [default to false]
**format** | **string** | Numeric display format. Only applicable when &#x60;numeric&#x60; is true. | [optional] [default to undefined]
**min** | **number** | Minimum numeric value (only when &#x60;numeric&#x60; is true) | [optional] [default to undefined]
**max** | **number** | Maximum numeric value (only when &#x60;numeric&#x60; is true) | [optional] [default to undefined]
**pattern** | **string** | Regular expression that the value must match | [optional] [default to undefined]
**pattern_description** | **string** | Human-readable description of the pattern requirement | [optional] [default to undefined]
**min_length** | **number** |  | [optional] [default to undefined]
**max_length** | **number** |  | [optional] [default to undefined]
**multiple** | **boolean** | When true, allows selecting multiple choices | [optional] [default to false]
**allow_other** | **boolean** | When true, users can enter a value not in the classification set | [optional] [default to false]
**choices** | [**Array&lt;FormElementChoice&gt;**](FormElementChoice.md) | List of selectable options | [default to undefined]
**choice_list_id** | **string** | ID of a shared Choice List resource to use instead of inline choices | [default to undefined]
**classification_set_id** | **string** | ID of a shared Classification Set resource | [default to undefined]
**classification_set_schema** | [**FormClassificationSetSchema**](FormClassificationSetSchema.md) |  | [default to undefined]
**positive** | [**FormYesNoOption**](FormYesNoOption.md) | Configuration for the \&#39;yes\&#39; option | [optional] [default to undefined]
**negative** | [**FormYesNoOption**](FormYesNoOption.md) | Configuration for the \&#39;no\&#39; option | [optional] [default to undefined]
**neutral** | [**FormYesNoOption**](FormYesNoOption.md) | Configuration for the neutral/N/A option | [optional] [default to undefined]
**neutral_enabled** | **boolean** | When true, the neutral option is shown | [optional] [default to false]
**track_enabled** | **boolean** | When true, GPS track is recorded with the video | [optional] [default to false]
**audio_enabled** | **boolean** | When true, audio is recorded with the video | [optional] [default to true]
**agreement_text** | **string** | Legal agreement text displayed above the signature pad | [optional] [default to undefined]
**elements** | [**Array&lt;FormElement&gt;**](FormElement.md) | Child elements contained within this section | [default to undefined]
**title_field_key** | **string** | Key of the child field used as the repeatable row title | [optional] [default to undefined]
**title_field_keys** | **Array&lt;string&gt;** | Keys of child fields used to compose the repeatable row title | [optional] [default to undefined]
**geometry_types** | **Array&lt;string&gt;** | Allowed geometry types for child record location. Empty array disables location on children. | [optional] [default to undefined]
**geometry_required** | **boolean** | When true, a location is required on each child record | [optional] [default to false]
**display** | [**FormCalculatedDisplay**](FormCalculatedDisplay.md) | Controls how the calculated result is formatted for display | [optional] [default to undefined]
**auto_populate** | **boolean** | When true, the address is automatically populated from the device GPS location | [optional] [default to false]
**expression** | **string** | JavaScript expression evaluated at runtime. Reference other fields with &#x60;$field_data_name&#x60;. | [optional] [default to undefined]
**default_values** | **{ [key: string]: any; }** | Optional map of field data names to default values used when the expression cannot be evaluated | [optional] [default to undefined]
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
import { FormElement } from 'fulcrum-generated';

const instance: FormElement = {
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
    numeric,
    format,
    min,
    max,
    pattern,
    pattern_description,
    min_length,
    max_length,
    multiple,
    allow_other,
    choices,
    choice_list_id,
    classification_set_id,
    classification_set_schema,
    positive,
    negative,
    neutral,
    neutral_enabled,
    track_enabled,
    audio_enabled,
    agreement_text,
    elements,
    title_field_key,
    title_field_keys,
    geometry_types,
    geometry_required,
    display,
    auto_populate,
    expression,
    default_values,
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
