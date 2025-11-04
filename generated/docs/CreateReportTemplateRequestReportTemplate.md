# CreateReportTemplateRequestReportTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the report template | [default to undefined]
**description** | **string** | A description of the report template | [optional] [default to undefined]
**body** | **string** | The HTML/EJS template for the report body | [optional] [default to undefined]
**header** | **string** | The HTML/EJS template for the report header | [optional] [default to undefined]
**footer** | **string** | The HTML/EJS template for the report footer | [optional] [default to undefined]
**styles** | **string** | CSS styles for the report | [optional] [default to undefined]
**script** | **string** | JavaScript code for the report | [optional] [default to undefined]
**filename_pattern** | **string** | Pattern for generating report filenames | [optional] [default to undefined]
**config** | [**CreateReportTemplateRequestReportTemplateConfig**](CreateReportTemplateRequestReportTemplateConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateReportTemplateRequestReportTemplate } from 'fulcrum-generated';

const instance: CreateReportTemplateRequestReportTemplate = {
    name,
    description,
    body,
    header,
    footer,
    styles,
    script,
    filename_pattern,
    config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
