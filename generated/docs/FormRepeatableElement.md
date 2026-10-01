# FormRepeatableElement

A repeatable section (child records) that can contain its own set of fields and captures 0-N rows per parent record.

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
**elements** | [**Array&lt;FormElement&gt;**](FormElement.md) | Child elements within the repeatable | [default to undefined]
**title_field_key** | **string** | Key of the child field used as the repeatable row title | [optional] [default to undefined]
**title_field_keys** | **Array&lt;string&gt;** | Keys of child fields used to compose the repeatable row title | [optional] [default to undefined]
**geometry_types** | **Array&lt;string&gt;** | Allowed geometry types for child record location. Empty array disables location on children. | [optional] [default to undefined]
**geometry_required** | **boolean** | When true, a location is required on each child record | [optional] [default to false]
**min_length** | **number** | Minimum number of child records required | [optional] [default to undefined]
**max_length** | **number** | Maximum number of child records allowed | [optional] [default to undefined]

## Example

```typescript
import { FormRepeatableElement } from 'fulcrum-generated';

const instance: FormRepeatableElement = {
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
    elements,
    title_field_key,
    title_field_keys,
    geometry_types,
    geometry_required,
    min_length,
    max_length,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
