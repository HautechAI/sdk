# PoseEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** |  | [default to KindEnum_Pose]
**sourceImage** | [**ImageEntity**](ImageEntity.md) |  | [default to undefined]
**previewImage** | [**ImageEntity**](ImageEntity.md) |  | [optional] [default to undefined]
**previewImageId** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**creatorId** | **string** |  | [default to undefined]
**metadata** | **object** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { PoseEntity } from './api';

const instance: PoseEntity = {
    kind,
    sourceImage,
    previewImage,
    previewImageId,
    id,
    creatorId,
    metadata,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
