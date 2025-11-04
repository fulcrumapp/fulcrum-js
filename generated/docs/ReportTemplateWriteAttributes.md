# ReportTemplateWriteAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the report template. | [default to undefined]
**description** | **string** | Optional description of the report template. | [optional] [default to undefined]
**body** | **string** | HTML body content for the report template. | [default to undefined]
**header** | **string** | HTML header content for the report template. | [default to undefined]
**filename_pattern** | **string** | Optional pattern controlling the generated filename. | [optional] [default to undefined]
**footer** | **string** | HTML footer content for the report template. | [default to undefined]
**styles** | **string** | CSS styles applied to the report template. | [default to undefined]
**script** | **string** | JavaScript executed when rendering the report. | [default to undefined]
**status** | **string** | Activation status of the report template. | [default to undefined]
**type** | **string** | Report template type identifier (for example, advanced). | [default to undefined]
**config** | [**ReportTemplateConfig**](ReportTemplateConfig.md) |  | [default to undefined]
**form_id** | **string** | Optional identifier of the associated form. | [optional] [default to undefined]

## Example

```typescript
import { ReportTemplateWriteAttributes } from 'fulcrum-generated';

const instance: ReportTemplateWriteAttributes = {
    name,
    description,
    body,
    header,
    filename_pattern,
    footer,
    styles,
    script,
    status,
    type,
    config,
    form_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
