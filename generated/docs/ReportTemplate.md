# ReportTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**updated_at** | **string** |  | [optional] [default to undefined]
**created_by_id** | **string** |  | [optional] [default to undefined]
**updated_by_id** | **string** |  | [optional] [default to undefined]
**version** | **number** |  | [optional] [default to undefined]
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
import { ReportTemplate } from 'fulcrum-generated';

const instance: ReportTemplate = {
    id,
    created_at,
    updated_at,
    created_by_id,
    updated_by_id,
    version,
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
