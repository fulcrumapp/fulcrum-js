# CreateReportTemplateRequestReportTemplateConfig

Configuration settings for the report

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **string** | Page size for the report | [optional] [default to undefined]
**landscape** | **boolean** | Whether to use landscape orientation | [optional] [default to undefined]
**margin_top** | **number** | Top margin in inches | [optional] [default to undefined]
**margin_right** | **number** | Right margin in inches | [optional] [default to undefined]
**margin_bottom** | **number** | Bottom margin in inches | [optional] [default to undefined]
**margin_left** | **number** | Left margin in inches | [optional] [default to undefined]
**output** | **string** | Output format | [optional] [default to undefined]
**parameters** | [**Array&lt;CreateReportTemplateRequestReportTemplateConfigParametersInner&gt;**](CreateReportTemplateRequestReportTemplateConfigParametersInner.md) | Array of parameter definitions | [optional] [default to undefined]

## Example

```typescript
import { CreateReportTemplateRequestReportTemplateConfig } from 'fulcrum-generated';

const instance: CreateReportTemplateRequestReportTemplateConfig = {
    size,
    landscape,
    margin_top,
    margin_right,
    margin_bottom,
    margin_left,
    output,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
