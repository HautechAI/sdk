# KateInpaintV1Input


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imageId** | **string** |  | [default to undefined]
**maskImageId** | **string** |  | [optional] [default to undefined]
**maskSpread** | **number** |  | [optional] [default to 0]
**prompt** | **string** |  | [default to undefined]
**seed** | **number** |  | [default to undefined]
**strength** | **number** |  | [default to undefined]
**height** | **number** |  | [optional] [default to undefined]
**width** | **number** |  | [optional] [default to undefined]
**numInferenceSteps** | **number** |  | [optional] [default to 30]
**guidanceScale** | **number** |  | [optional] [default to 7]
**branch** | **string** |  | [optional] [default to BranchEnum_Stable]

## Example

```typescript
import { KateInpaintV1Input } from './api';

const instance: KateInpaintV1Input = {
    imageId,
    maskImageId,
    maskSpread,
    prompt,
    seed,
    strength,
    height,
    width,
    numInferenceSteps,
    guidanceScale,
    branch,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
