# CreateReportTemplateRequestReportTemplateConfigParametersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Parameter name | [optional] [default to undefined]
**label** | **string** | Display label for the parameter | [optional] [default to undefined]
**type** | **string** | Parameter type | [optional] [default to undefined]
**required** | **boolean** | Whether the parameter is required | [optional] [default to undefined]
**multiple** | **boolean** | Whether multiple values are allowed | [optional] [default to undefined]
**_options** | **Array&lt;any&gt;** | Available options for the parameter | [optional] [default to undefined]
**query** | **string** | Query to filter available options | [optional] [default to undefined]
**_default** | **Array&lt;any&gt;** | Default value(s) for the parameter | [optional] [default to undefined]

## Example

```typescript
import { CreateReportTemplateRequestReportTemplateConfigParametersInner } from 'fulcrum-generated';

const instance: CreateReportTemplateRequestReportTemplateConfigParametersInner = {
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
