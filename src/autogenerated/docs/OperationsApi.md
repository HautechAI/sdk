# OperationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**operationsControllerGetOperationV1**](#operationscontrollergetoperationv1) | **GET** /v1/operations/{id} | |
|[**operationsControllerGetOperationsV1**](#operationscontrollergetoperationsv1) | **POST** /v1/operations/many | |
|[**operationsControllerListOperationsV1**](#operationscontrollerlistoperationsv1) | **GET** /v1/operations | |
|[**operationsControllerRunAnimateCreatomateV1V1**](#operationscontrollerrunanimatecreatomatev1v1) | **POST** /v1/operations/run/animate.creatomate.v1 | |
|[**operationsControllerRunAnimateKling16ProV1V1**](#operationscontrollerrunanimatekling16prov1v1) | **POST** /v1/operations/run/animate.kling_1_6_pro.v1 | |
|[**operationsControllerRunAnimateKling21V1V1**](#operationscontrollerrunanimatekling21v1v1) | **POST** /v1/operations/run/animate.kling_2_1.v1 | |
|[**operationsControllerRunCompositeV1V1**](#operationscontrollerruncompositev1v1) | **POST** /v1/operations/run/composite.v1 | |
|[**operationsControllerRunContrastV1V1**](#operationscontrollerruncontrastv1v1) | **POST** /v1/operations/run/contrast.v1 | |
|[**operationsControllerRunCropV1V1**](#operationscontrollerruncropv1v1) | **POST** /v1/operations/run/crop.v1 | |
|[**operationsControllerRunCutV1V1**](#operationscontrollerruncutv1v1) | **POST** /v1/operations/run/cut.v1 | |
|[**operationsControllerRunEchoV1V1**](#operationscontrollerrunechov1v1) | **POST** /v1/operations/run/echo.v1 | |
|[**operationsControllerRunEditFluxKontextDevV1V1**](#operationscontrollerruneditfluxkontextdevv1v1) | **POST** /v1/operations/run/edit.flux_kontext_dev.v1 | |
|[**operationsControllerRunGptV1V1**](#operationscontrollerrungptv1v1) | **POST** /v1/operations/run/gpt.v1 | |
|[**operationsControllerRunGptV2V1**](#operationscontrollerrungptv2v1) | **POST** /v1/operations/run/gpt.v2 | |
|[**operationsControllerRunHauteLindaV1V1**](#operationscontrollerrunhautelindav1v1) | **POST** /v1/operations/run/haute.linda.v1 | |
|[**operationsControllerRunHauteNaomiV1V1**](#operationscontrollerrunhautenaomiv1v1) | **POST** /v1/operations/run/haute.naomi.v1 | |
|[**operationsControllerRunImagineKateV1V1**](#operationscontrollerrunimaginekatev1v1) | **POST** /v1/operations/run/imagine.kate.v1 | |
|[**operationsControllerRunInpaintKateV1V1**](#operationscontrollerruninpaintkatev1v1) | **POST** /v1/operations/run/inpaint.kate.v1 | |
|[**operationsControllerRunMathV1V1**](#operationscontrollerrunmathv1v1) | **POST** /v1/operations/run/math.v1 | |
|[**operationsControllerRunNegateImageV1V1**](#operationscontrollerrunnegateimagev1v1) | **POST** /v1/operations/run/negateImage.v1 | |
|[**operationsControllerRunNoiseV1V1**](#operationscontrollerrunnoisev1v1) | **POST** /v1/operations/run/noise.v1 | |
|[**operationsControllerRunObjectDetectionV1V1**](#operationscontrollerrunobjectdetectionv1v1) | **POST** /v1/operations/run/objectDetection.v1 | |
|[**operationsControllerRunOnecompilerV1V1**](#operationscontrollerrunonecompilerv1v1) | **POST** /v1/operations/run/onecompiler.v1 | |
|[**operationsControllerRunPipelineMapV1V1**](#operationscontrollerrunpipelinemapv1v1) | **POST** /v1/operations/run/pipelineMap.v1 | |
|[**operationsControllerRunPoseEstimationV1V1**](#operationscontrollerrunposeestimationv1v1) | **POST** /v1/operations/run/poseEstimation.v1 | |
|[**operationsControllerRunResizeV1V1**](#operationscontrollerrunresizev1v1) | **POST** /v1/operations/run/resize.v1 | |
|[**operationsControllerRunSegmentAnythingEmbeddingsV1V1**](#operationscontrollerrunsegmentanythingembeddingsv1v1) | **POST** /v1/operations/run/segmentAnything.embeddings.v1 | |
|[**operationsControllerRunSegmentAnythingMaskV1V1**](#operationscontrollerrunsegmentanythingmaskv1v1) | **POST** /v1/operations/run/segmentAnything.mask.v1 | |
|[**operationsControllerRunStringsTemplateV1V1**](#operationscontrollerrunstringstemplatev1v1) | **POST** /v1/operations/run/strings.template.v1 | |
|[**operationsControllerRunTranslateV1V1**](#operationscontrollerruntranslatev1v1) | **POST** /v1/operations/run/translate.v1 | |
|[**operationsControllerRunUpscaleV1V1**](#operationscontrollerrunupscalev1v1) | **POST** /v1/operations/run/upscale.v1 | |
|[**operationsControllerRunVtonGiseleV1V1**](#operationscontrollerrunvtongiselev1v1) | **POST** /v1/operations/run/vton.gisele.v1 | |
|[**operationsControllerUpdateMetadataV1**](#operationscontrollerupdatemetadatav1) | **PUT** /v1/operations/{id}/metadata | |

# **operationsControllerGetOperationV1**
> OperationEntity operationsControllerGetOperationV1()


### Example

```typescript
import {
    OperationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.operationsControllerGetOperationV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**OperationEntity**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerGetOperationsV1**
> Array<OperationEntity> operationsControllerGetOperationsV1(getOperationsParamsDto)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    GetOperationsParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let getOperationsParamsDto: GetOperationsParamsDto; //

const { status, data } = await apiInstance.operationsControllerGetOperationsV1(
    getOperationsParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getOperationsParamsDto** | **GetOperationsParamsDto**|  | |


### Return type

**Array<OperationEntity>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerListOperationsV1**
> ListOperationsDto operationsControllerListOperationsV1()


### Example

```typescript
import {
    OperationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let orderBy: 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC'; // (optional) (default to 'createdAt_DESC')
let limit: number; // (optional) (default to 50)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.operationsControllerListOperationsV1(
    orderBy,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | [**&#39;createdAt_ASC&#39; | &#39;createdAt_DESC&#39; | &#39;updatedAt_ASC&#39; | &#39;updatedAt_DESC&#39;**]**Array<&#39;createdAt_ASC&#39; &#124; &#39;createdAt_DESC&#39; &#124; &#39;updatedAt_ASC&#39; &#124; &#39;updatedAt_DESC&#39;>** |  | (optional) defaults to 'createdAt_DESC'|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **cursor** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListOperationsDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunAnimateCreatomateV1V1**
> AnimateCreatomateV1Response operationsControllerRunAnimateCreatomateV1V1(animateCreatomateV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    AnimateCreatomateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let animateCreatomateV1Request: AnimateCreatomateV1Request; //

const { status, data } = await apiInstance.operationsControllerRunAnimateCreatomateV1V1(
    animateCreatomateV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **animateCreatomateV1Request** | **AnimateCreatomateV1Request**|  | |


### Return type

**AnimateCreatomateV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunAnimateKling16ProV1V1**
> AnimateKling16ProV1Response operationsControllerRunAnimateKling16ProV1V1(animateKling16ProV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    AnimateKling16ProV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let animateKling16ProV1Request: AnimateKling16ProV1Request; //

const { status, data } = await apiInstance.operationsControllerRunAnimateKling16ProV1V1(
    animateKling16ProV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **animateKling16ProV1Request** | **AnimateKling16ProV1Request**|  | |


### Return type

**AnimateKling16ProV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunAnimateKling21V1V1**
> AnimateKling21V1Response operationsControllerRunAnimateKling21V1V1(animateKling21V1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    AnimateKling21V1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let animateKling21V1Request: AnimateKling21V1Request; //

const { status, data } = await apiInstance.operationsControllerRunAnimateKling21V1V1(
    animateKling21V1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **animateKling21V1Request** | **AnimateKling21V1Request**|  | |


### Return type

**AnimateKling21V1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunCompositeV1V1**
> CompositeV1Response operationsControllerRunCompositeV1V1(compositeV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    CompositeV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let compositeV1Request: CompositeV1Request; //

const { status, data } = await apiInstance.operationsControllerRunCompositeV1V1(
    compositeV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **compositeV1Request** | **CompositeV1Request**|  | |


### Return type

**CompositeV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunContrastV1V1**
> ContrastV1Response operationsControllerRunContrastV1V1(contrastV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    ContrastV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let contrastV1Request: ContrastV1Request; //

const { status, data } = await apiInstance.operationsControllerRunContrastV1V1(
    contrastV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contrastV1Request** | **ContrastV1Request**|  | |


### Return type

**ContrastV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunCropV1V1**
> CropV1Response operationsControllerRunCropV1V1(cropV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    CropV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let cropV1Request: CropV1Request; //

const { status, data } = await apiInstance.operationsControllerRunCropV1V1(
    cropV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cropV1Request** | **CropV1Request**|  | |


### Return type

**CropV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunCutV1V1**
> CutV1Response operationsControllerRunCutV1V1(cutV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    CutV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let cutV1Request: CutV1Request; //

const { status, data } = await apiInstance.operationsControllerRunCutV1V1(
    cutV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cutV1Request** | **CutV1Request**|  | |


### Return type

**CutV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunEchoV1V1**
> EchoV1Response operationsControllerRunEchoV1V1(echoV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    EchoV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let echoV1Request: EchoV1Request; //

const { status, data } = await apiInstance.operationsControllerRunEchoV1V1(
    echoV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **echoV1Request** | **EchoV1Request**|  | |


### Return type

**EchoV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunEditFluxKontextDevV1V1**
> EditFluxKontextDevV1Response operationsControllerRunEditFluxKontextDevV1V1(editFluxKontextDevV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    EditFluxKontextDevV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let editFluxKontextDevV1Request: EditFluxKontextDevV1Request; //

const { status, data } = await apiInstance.operationsControllerRunEditFluxKontextDevV1V1(
    editFluxKontextDevV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **editFluxKontextDevV1Request** | **EditFluxKontextDevV1Request**|  | |


### Return type

**EditFluxKontextDevV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunGptV1V1**
> GptV1Response operationsControllerRunGptV1V1(gptV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    GptV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let gptV1Request: GptV1Request; //

const { status, data } = await apiInstance.operationsControllerRunGptV1V1(
    gptV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gptV1Request** | **GptV1Request**|  | |


### Return type

**GptV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunGptV2V1**
> GptV2Response operationsControllerRunGptV2V1(gptV2Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    GptV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let gptV2Request: GptV2Request; //

const { status, data } = await apiInstance.operationsControllerRunGptV2V1(
    gptV2Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gptV2Request** | **GptV2Request**|  | |


### Return type

**GptV2Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunHauteLindaV1V1**
> HauteLindaV1Response operationsControllerRunHauteLindaV1V1(hauteLindaV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    HauteLindaV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let hauteLindaV1Request: HauteLindaV1Request; //

const { status, data } = await apiInstance.operationsControllerRunHauteLindaV1V1(
    hauteLindaV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hauteLindaV1Request** | **HauteLindaV1Request**|  | |


### Return type

**HauteLindaV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunHauteNaomiV1V1**
> HauteNaomiV1Response operationsControllerRunHauteNaomiV1V1(hauteNaomiV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    HauteNaomiV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let hauteNaomiV1Request: HauteNaomiV1Request; //

const { status, data } = await apiInstance.operationsControllerRunHauteNaomiV1V1(
    hauteNaomiV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hauteNaomiV1Request** | **HauteNaomiV1Request**|  | |


### Return type

**HauteNaomiV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunImagineKateV1V1**
> ImagineKateV1Response operationsControllerRunImagineKateV1V1(imagineKateV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    ImagineKateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let imagineKateV1Request: ImagineKateV1Request; //

const { status, data } = await apiInstance.operationsControllerRunImagineKateV1V1(
    imagineKateV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imagineKateV1Request** | **ImagineKateV1Request**|  | |


### Return type

**ImagineKateV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunInpaintKateV1V1**
> InpaintKateV1Response operationsControllerRunInpaintKateV1V1(inpaintKateV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    InpaintKateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let inpaintKateV1Request: InpaintKateV1Request; //

const { status, data } = await apiInstance.operationsControllerRunInpaintKateV1V1(
    inpaintKateV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inpaintKateV1Request** | **InpaintKateV1Request**|  | |


### Return type

**InpaintKateV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunMathV1V1**
> MathV1Response operationsControllerRunMathV1V1(mathV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    MathV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let mathV1Request: MathV1Request; //

const { status, data } = await apiInstance.operationsControllerRunMathV1V1(
    mathV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mathV1Request** | **MathV1Request**|  | |


### Return type

**MathV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunNegateImageV1V1**
> NegateImageV1Response operationsControllerRunNegateImageV1V1(negateImageV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    NegateImageV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let negateImageV1Request: NegateImageV1Request; //

const { status, data } = await apiInstance.operationsControllerRunNegateImageV1V1(
    negateImageV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **negateImageV1Request** | **NegateImageV1Request**|  | |


### Return type

**NegateImageV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunNoiseV1V1**
> NoiseV1Response operationsControllerRunNoiseV1V1(noiseV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    NoiseV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let noiseV1Request: NoiseV1Request; //

const { status, data } = await apiInstance.operationsControllerRunNoiseV1V1(
    noiseV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **noiseV1Request** | **NoiseV1Request**|  | |


### Return type

**NoiseV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunObjectDetectionV1V1**
> ObjectDetectionV1Response operationsControllerRunObjectDetectionV1V1(objectDetectionV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    ObjectDetectionV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let objectDetectionV1Request: ObjectDetectionV1Request; //

const { status, data } = await apiInstance.operationsControllerRunObjectDetectionV1V1(
    objectDetectionV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **objectDetectionV1Request** | **ObjectDetectionV1Request**|  | |


### Return type

**ObjectDetectionV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunOnecompilerV1V1**
> OnecompilerV1Response operationsControllerRunOnecompilerV1V1(onecompilerV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    OnecompilerV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let onecompilerV1Request: OnecompilerV1Request; //

const { status, data } = await apiInstance.operationsControllerRunOnecompilerV1V1(
    onecompilerV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **onecompilerV1Request** | **OnecompilerV1Request**|  | |


### Return type

**OnecompilerV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunPipelineMapV1V1**
> PipelineMapV1Response operationsControllerRunPipelineMapV1V1(pipelineMapV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    PipelineMapV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let pipelineMapV1Request: PipelineMapV1Request; //

const { status, data } = await apiInstance.operationsControllerRunPipelineMapV1V1(
    pipelineMapV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pipelineMapV1Request** | **PipelineMapV1Request**|  | |


### Return type

**PipelineMapV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunPoseEstimationV1V1**
> PoseEstimationV1Response operationsControllerRunPoseEstimationV1V1(poseEstimationV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    PoseEstimationV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let poseEstimationV1Request: PoseEstimationV1Request; //

const { status, data } = await apiInstance.operationsControllerRunPoseEstimationV1V1(
    poseEstimationV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **poseEstimationV1Request** | **PoseEstimationV1Request**|  | |


### Return type

**PoseEstimationV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunResizeV1V1**
> ResizeV1Response operationsControllerRunResizeV1V1(resizeV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    ResizeV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let resizeV1Request: ResizeV1Request; //

const { status, data } = await apiInstance.operationsControllerRunResizeV1V1(
    resizeV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resizeV1Request** | **ResizeV1Request**|  | |


### Return type

**ResizeV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunSegmentAnythingEmbeddingsV1V1**
> SegmentAnythingEmbeddingsV1Response operationsControllerRunSegmentAnythingEmbeddingsV1V1(segmentAnythingEmbeddingsV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    SegmentAnythingEmbeddingsV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let segmentAnythingEmbeddingsV1Request: SegmentAnythingEmbeddingsV1Request; //

const { status, data } = await apiInstance.operationsControllerRunSegmentAnythingEmbeddingsV1V1(
    segmentAnythingEmbeddingsV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentAnythingEmbeddingsV1Request** | **SegmentAnythingEmbeddingsV1Request**|  | |


### Return type

**SegmentAnythingEmbeddingsV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunSegmentAnythingMaskV1V1**
> SegmentAnythingMaskV1Response operationsControllerRunSegmentAnythingMaskV1V1(segmentAnythingMaskV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    SegmentAnythingMaskV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let segmentAnythingMaskV1Request: SegmentAnythingMaskV1Request; //

const { status, data } = await apiInstance.operationsControllerRunSegmentAnythingMaskV1V1(
    segmentAnythingMaskV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentAnythingMaskV1Request** | **SegmentAnythingMaskV1Request**|  | |


### Return type

**SegmentAnythingMaskV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunStringsTemplateV1V1**
> StringsTemplateV1Response operationsControllerRunStringsTemplateV1V1(stringsTemplateV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    StringsTemplateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let stringsTemplateV1Request: StringsTemplateV1Request; //

const { status, data } = await apiInstance.operationsControllerRunStringsTemplateV1V1(
    stringsTemplateV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stringsTemplateV1Request** | **StringsTemplateV1Request**|  | |


### Return type

**StringsTemplateV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunTranslateV1V1**
> TranslateV1Response operationsControllerRunTranslateV1V1(translateV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    TranslateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let translateV1Request: TranslateV1Request; //

const { status, data } = await apiInstance.operationsControllerRunTranslateV1V1(
    translateV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **translateV1Request** | **TranslateV1Request**|  | |


### Return type

**TranslateV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunUpscaleV1V1**
> UpscaleV1Response operationsControllerRunUpscaleV1V1(upscaleV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    UpscaleV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let upscaleV1Request: UpscaleV1Request; //

const { status, data } = await apiInstance.operationsControllerRunUpscaleV1V1(
    upscaleV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upscaleV1Request** | **UpscaleV1Request**|  | |


### Return type

**UpscaleV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerRunVtonGiseleV1V1**
> VtonGiseleV1Response operationsControllerRunVtonGiseleV1V1(vtonGiseleV1Request)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    VtonGiseleV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let vtonGiseleV1Request: VtonGiseleV1Request; //

const { status, data } = await apiInstance.operationsControllerRunVtonGiseleV1V1(
    vtonGiseleV1Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **vtonGiseleV1Request** | **VtonGiseleV1Request**|  | |


### Return type

**VtonGiseleV1Response**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operationsControllerUpdateMetadataV1**
> ResourceEntity operationsControllerUpdateMetadataV1(updateMetadataDto)


### Example

```typescript
import {
    OperationsApi,
    Configuration,
    UpdateMetadataDto
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationsApi(configuration);

let id: string; // (default to undefined)
let updateMetadataDto: UpdateMetadataDto; //

const { status, data } = await apiInstance.operationsControllerUpdateMetadataV1(
    id,
    updateMetadataDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMetadataDto** | **UpdateMetadataDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ResourceEntity**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

