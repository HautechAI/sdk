# LindaHauteV1Input


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspectRatio** | **string** |  | [default to undefined]
**productImageId** | **string** |  | [default to undefined]
**prompt** | **string** |  | [default to undefined]
**seed** | **number** |  | [default to undefined]
**imageWeight** | **number** |  | [optional] [default to 0.5]
**negativePrompt** | **string** |  | [optional] [default to '(too many fingers, face asymmetry, eyes asymmetry, deformed eyes, open mouth), worst quality, low quality, illustration, 3d, 2d, painting, cartoons, sketch']
**inferenceSteps** | **number** |  | [optional] [default to 33]
**guidanceScale** | **number** |  | [optional] [default to 6]
**strength** | **number** |  | [optional] [default to 0.3]

## Example

```typescript
import { LindaHauteV1Input } from './api';

const instance: LindaHauteV1Input = {
    aspectRatio,
    productImageId,
    prompt,
    seed,
    imageWeight,
    negativePrompt,
    inferenceSteps,
    guidanceScale,
    strength,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
