# PipelinePreviewDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** |  | [default to undefined]
**estimatedCredits** | **string** | Total estimated credits of all tasks in the pipeline as a decimal string | [default to undefined]
**consumedCredits** | **string** | Consumed credits of all successfully completed tasks in the pipeline as a decimal string | [default to undefined]
**id** | **string** |  | [default to undefined]
**creatorId** | **string** |  | [default to undefined]
**metadata** | **object** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]

## Example

```typescript
import { PipelinePreviewDto } from './api';

const instance: PipelinePreviewDto = {
    kind,
    estimatedCredits,
    consumedCredits,
    id,
    creatorId,
    metadata,
    createdAt,
    updatedAt,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
