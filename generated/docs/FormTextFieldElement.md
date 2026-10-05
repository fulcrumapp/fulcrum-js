# FormTextFieldElement

A single-line or multi-line text field. Set `numeric: true` and `format` for numeric inputs.

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
**min_length** | **number** | Minimum number of characters (or items for media fields) | [optional] [default to undefined]
**max_length** | **number** | Maximum number of characters (or items for media fields) | [optional] [default to undefined]

## Example

```typescript
import { FormTextFieldElement } from 'fulcrum-generated';

const instance: FormTextFieldElement = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
