# ReportTemplateParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The internal parameter name. | [default to undefined]
**label** | **string** | The human-friendly parameter label. | [default to undefined]
**type** | **string** | The parameter type identifier. | [default to undefined]
**required** | **boolean** | Indicates if the parameter must be supplied when generating a report. | [default to undefined]
**multiple** | **boolean** | Whether the parameter accepts multiple values. | [default to undefined]
**_options** | **Array&lt;string&gt;** | Optional suggestion metadata for the parameter. | [optional] [default to undefined]
**query** | **string** | Optional lookup configuration for the parameter. | [optional] [default to undefined]
**_default** | **Array&lt;any&gt;** | Default value used when the parameter is omitted. | [optional] [default to undefined]

## Example

```typescript
import { ReportTemplateParameter } from 'fulcrum-generated';

const instance: ReportTemplateParameter = {
    name,
    label,
    type,
    required,
    multiple,
    _options,
    query,
    _default,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
