# ReportTemplateRequestReportTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the report template | [default to undefined]
**description** | **string** | A description of the report template | [optional] [default to undefined]
**body** | **string** | The HTML/EJS template for the report body | [default to undefined]
**header** | **string** | The HTML/EJS template for the report header | [default to undefined]
**footer** | **string** | The HTML/EJS template for the report footer | [default to undefined]
**styles** | **string** | CSS styles for the report | [default to undefined]
**script** | **string** | JavaScript code for the report | [default to undefined]
**status** | **string** | The status of the report template | [default to undefined]
**type** | **string** | The type of the report template | [default to undefined]
**form_id** | **string** | The ID of the form this report template is associated with | [optional] [default to undefined]
**filename_pattern** | **string** | Pattern for generating report filenames | [optional] [default to undefined]
**config** | **string** | JSON-encoded string containing report configuration settings. The API accepts a JSON string that will be parsed server-side. After parsing, the JSON object contains page size, orientation, margins, output format, and optional parameters. | [default to undefined]

## Example

```typescript
import { ReportTemplateRequestReportTemplate } from 'fulcrum-generated';

const instance: ReportTemplateRequestReportTemplate = {
    name,
    description,
    body,
    header,
    footer,
    styles,
    script,
    status,
    type,
    form_id,
    filename_pattern,
    config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
