# NaomiHauteV1Input


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secondaryCategory** | **string** | The category of the second garment | [optional] [default to undefined]
**secondaryGarmentImageId** | **string** | The image of the second garment | [optional] [default to undefined]
**loraIds** | **Array&lt;string&gt;** | UNSTABLE | [optional] [default to undefined]
**prompt** | **string** |  | [default to undefined]
**category** | **string** |  | [default to undefined]
**garmentImageId** | **string** |  | [default to undefined]
**poseId** | **string** |  | [default to undefined]
**seed** | **number** |  | [default to undefined]
**width** | **number** |  | [default to undefined]
**height** | **number** |  | [default to undefined]
**textGuidanceScale** | **number** |  | [optional] [default to 2.5]
**imageGuidanceScale** | **number** |  | [optional] [default to 1.6]
**numInferenceSteps** | **number** |  | [optional] [default to 50]
**mode** | **string** |  | [optional] [default to ModeEnum_ApparelToModel]

## Example

```typescript
import { NaomiHauteV1Input } from './api';

const instance: NaomiHauteV1Input = {
    secondaryCategory,
    secondaryGarmentImageId,
    loraIds,
    prompt,
    category,
    garmentImageId,
    poseId,
    seed,
    width,
    height,
    textGuidanceScale,
    imageGuidanceScale,
    numInferenceSteps,
    mode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
