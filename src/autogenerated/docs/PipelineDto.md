# PipelineDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** |  | [default to undefined]
**estimatedCredits** | **string** | Total estimated credits of all tasks in the pipeline as a decimal string | [default to undefined]
**consumedCredits** | **string** | Consumed credits of all successfully completed tasks in the pipeline as a decimal string | [default to undefined]
**state** | [**{ [key: string]: PipelineDtoStateValue; }**](PipelineDtoStateValue.md) | State of the pipeline tasks | [default to undefined]
**output** | **object** |  | [optional] [default to undefined]
**input** | **object** |  | [optional] [default to undefined]
**tasks** | [**Array&lt;TaskDto&gt;**](TaskDto.md) |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**creatorId** | **string** |  | [default to undefined]
**metadata** | **object** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]

## Example

```typescript
import { PipelineDto } from './api';

const instance: PipelineDto = {
    kind,
    estimatedCredits,
    consumedCredits,
    state,
    output,
    input,
    tasks,
    id,
    creatorId,
    metadata,
    createdAt,
    updatedAt,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
