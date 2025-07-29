# ListCollectionItemsParamsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collectionId** | **string** |  | [default to undefined]
**orderBy** | **string** |  | [optional] [default to OrderByEnum_CreatedAtDesc]
**limit** | **number** |  | [optional] [default to 50]
**kind** | **string** |  | [optional] [default to undefined]
**cursor** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ListCollectionItemsParamsDto } from './api';

const instance: ListCollectionItemsParamsDto = {
    collectionId,
    orderBy,
    limit,
    kind,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
