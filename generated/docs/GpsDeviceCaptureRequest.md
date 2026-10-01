# GpsDeviceCaptureRequest

GPS device metadata accepted during create/update. Known keys are documented and additional device-specific keys are accepted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_name** | **string** | Name of the GPS device | [optional] [default to undefined]
**manufacturer** | **string** | Manufacturer of the GPS device | [optional] [default to undefined]
**fix_type** | **string** | Type of GPS fix | [optional] [default to undefined]
**satellite_count** | **number** | Number of satellites used for the fix | [optional] [default to undefined]
**hdop** | **number** | Horizontal dilution of precision | [optional] [default to undefined]
**vdop** | **number** | Vertical dilution of precision | [optional] [default to undefined]
**pdop** | **number** | Position dilution of precision | [optional] [default to undefined]
**differential_correction** | **boolean** | Whether differential correction was used | [optional] [default to undefined]
**antenna_height** | **number** | Antenna height in meters | [optional] [default to undefined]
**firmware_version** | **string** | Device firmware version | [optional] [default to undefined]
**geometry** | [**Geometry**](Geometry.md) | GPS-captured geometry reference. | [optional] [default to undefined]

## Example

```typescript
import { GpsDeviceCaptureRequest } from 'fulcrum-generated';

const instance: GpsDeviceCaptureRequest = {
    device_name,
    manufacturer,
    fix_type,
    satellite_count,
    hdop,
    vdop,
    pdop,
    differential_correction,
    antenna_height,
    firmware_version,
    geometry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
