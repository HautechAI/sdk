# VideoEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** |  | [default to KindEnum_Video]
**id** | **string** |  | [default to undefined]
**creatorId** | **string** |  | [default to undefined]
**metadata** | **object** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**width** | **number** |  | [default to undefined]
**height** | **number** |  | [default to undefined]
**duration** | **number** |  | [default to undefined]
**previewImage** | [**ImageEntity**](ImageEntity.md) |  | [optional] [default to undefined]
**previewImageId** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [default to undefined]

## Example

```typescript
import { VideoEntity } from './api';

const instance: VideoEntity = {
    kind,
    id,
    creatorId,
    metadata,
    createdAt,
    updatedAt,
    width,
    height,
    duration,
    previewImage,
    previewImageId,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
