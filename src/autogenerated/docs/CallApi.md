# CallApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**callControllerCallAccessAttachV1**](#callcontrollercallaccessattachv1) | **POST** /v1/call/access.attach | |
|[**callControllerCallAccessGrantV1**](#callcontrollercallaccessgrantv1) | **POST** /v1/call/access.grant | |
|[**callControllerCallAccountsBalanceAddV1**](#callcontrollercallaccountsbalanceaddv1) | **POST** /v1/call/accounts.balance.add | |
|[**callControllerCallAccountsBalanceGetV1**](#callcontrollercallaccountsbalancegetv1) | **POST** /v1/call/accounts.balance.get | |
|[**callControllerCallAccountsBalanceSelfV1**](#callcontrollercallaccountsbalanceselfv1) | **POST** /v1/call/accounts.balance.self | |
|[**callControllerCallAccountsCreateV1**](#callcontrollercallaccountscreatev1) | **POST** /v1/call/accounts.create | |
|[**callControllerCallAccountsGetV1**](#callcontrollercallaccountsgetv1) | **POST** /v1/call/accounts.get | |
|[**callControllerCallAccountsListV1**](#callcontrollercallaccountslistv1) | **POST** /v1/call/accounts.list | |
|[**callControllerCallAccountsSelfV1**](#callcontrollercallaccountsselfv1) | **POST** /v1/call/accounts.self | |
|[**callControllerCallCollectionsCreateV1**](#callcontrollercallcollectionscreatev1) | **POST** /v1/call/collections.create | |
|[**callControllerCallCollectionsGetV1**](#callcontrollercallcollectionsgetv1) | **POST** /v1/call/collections.get | |
|[**callControllerCallCollectionsItemsAddV1**](#callcontrollercallcollectionsitemsaddv1) | **POST** /v1/call/collections.items.add | |
|[**callControllerCallCollectionsItemsListV1**](#callcontrollercallcollectionsitemslistv1) | **POST** /v1/call/collections.items.list | |
|[**callControllerCallCollectionsItemsRemoveV1**](#callcontrollercallcollectionsitemsremovev1) | **POST** /v1/call/collections.items.remove | |
|[**callControllerCallCollectionsListV1**](#callcontrollercallcollectionslistv1) | **POST** /v1/call/collections.list | |
|[**callControllerCallCollectionsMetadataUpdateV1**](#callcontrollercallcollectionsmetadataupdatev1) | **POST** /v1/call/collections.metadata.update | |
|[**callControllerCallGroupsAccountsAddV1**](#callcontrollercallgroupsaccountsaddv1) | **POST** /v1/call/groups.accounts.add | |
|[**callControllerCallGroupsAccountsRemoveV1**](#callcontrollercallgroupsaccountsremovev1) | **POST** /v1/call/groups.accounts.remove | |
|[**callControllerCallGroupsCreateV1**](#callcontrollercallgroupscreatev1) | **POST** /v1/call/groups.create | |
|[**callControllerCallGroupsDeleteV1**](#callcontrollercallgroupsdeletev1) | **POST** /v1/call/groups.delete | |
|[**callControllerCallGroupsGetV1**](#callcontrollercallgroupsgetv1) | **POST** /v1/call/groups.get | |
|[**callControllerCallImagesGetManyV1**](#callcontrollercallimagesgetmanyv1) | **POST** /v1/call/images.getMany | |
|[**callControllerCallImagesGetV1**](#callcontrollercallimagesgetv1) | **POST** /v1/call/images.get | |
|[**callControllerCallImagesRepresentationsGetV1**](#callcontrollercallimagesrepresentationsgetv1) | **POST** /v1/call/images.representations.get | |
|[**callControllerCallOperationsGetManyV1**](#callcontrollercalloperationsgetmanyv1) | **POST** /v1/call/operations.getMany | |
|[**callControllerCallOperationsGetV1**](#callcontrollercalloperationsgetv1) | **POST** /v1/call/operations.get | |
|[**callControllerCallOperationsListV1**](#callcontrollercalloperationslistv1) | **POST** /v1/call/operations.list | |
|[**callControllerCallOperationsMetadataUpdateV1**](#callcontrollercalloperationsmetadataupdatev1) | **POST** /v1/call/operations.metadata.update | |
|[**callControllerCallOperationsRunAnimateCreatomateV1V1**](#callcontrollercalloperationsrunanimatecreatomatev1v1) | **POST** /v1/call/operations.run.animate.creatomate.v1 | |
|[**callControllerCallOperationsRunAnimateKling16ProV1V1**](#callcontrollercalloperationsrunanimatekling16prov1v1) | **POST** /v1/call/operations.run.animate.kling_1_6_pro.v1 | |
|[**callControllerCallOperationsRunAnimateKling21V1V1**](#callcontrollercalloperationsrunanimatekling21v1v1) | **POST** /v1/call/operations.run.animate.kling_2_1.v1 | |
|[**callControllerCallOperationsRunCompositeV1V1**](#callcontrollercalloperationsruncompositev1v1) | **POST** /v1/call/operations.run.composite.v1 | |
|[**callControllerCallOperationsRunContrastV1V1**](#callcontrollercalloperationsruncontrastv1v1) | **POST** /v1/call/operations.run.contrast.v1 | |
|[**callControllerCallOperationsRunCropV1V1**](#callcontrollercalloperationsruncropv1v1) | **POST** /v1/call/operations.run.crop.v1 | |
|[**callControllerCallOperationsRunCutV1V1**](#callcontrollercalloperationsruncutv1v1) | **POST** /v1/call/operations.run.cut.v1 | |
|[**callControllerCallOperationsRunEchoV1V1**](#callcontrollercalloperationsrunechov1v1) | **POST** /v1/call/operations.run.echo.v1 | |
|[**callControllerCallOperationsRunEditFluxKontextDevV1V1**](#callcontrollercalloperationsruneditfluxkontextdevv1v1) | **POST** /v1/call/operations.run.edit.flux_kontext_dev.v1 | |
|[**callControllerCallOperationsRunGptV1V1**](#callcontrollercalloperationsrungptv1v1) | **POST** /v1/call/operations.run.gpt.v1 | |
|[**callControllerCallOperationsRunGptV2V1**](#callcontrollercalloperationsrungptv2v1) | **POST** /v1/call/operations.run.gpt.v2 | |
|[**callControllerCallOperationsRunHauteLindaV1V1**](#callcontrollercalloperationsrunhautelindav1v1) | **POST** /v1/call/operations.run.haute.linda.v1 | |
|[**callControllerCallOperationsRunHauteNaomiV1V1**](#callcontrollercalloperationsrunhautenaomiv1v1) | **POST** /v1/call/operations.run.haute.naomi.v1 | |
|[**callControllerCallOperationsRunImagineKateV1V1**](#callcontrollercalloperationsrunimaginekatev1v1) | **POST** /v1/call/operations.run.imagine.kate.v1 | |
|[**callControllerCallOperationsRunInpaintKateV1V1**](#callcontrollercalloperationsruninpaintkatev1v1) | **POST** /v1/call/operations.run.inpaint.kate.v1 | |
|[**callControllerCallOperationsRunMathV1V1**](#callcontrollercalloperationsrunmathv1v1) | **POST** /v1/call/operations.run.math.v1 | |
|[**callControllerCallOperationsRunNegateImageV1V1**](#callcontrollercalloperationsrunnegateimagev1v1) | **POST** /v1/call/operations.run.negateImage.v1 | |
|[**callControllerCallOperationsRunNoiseV1V1**](#callcontrollercalloperationsrunnoisev1v1) | **POST** /v1/call/operations.run.noise.v1 | |
|[**callControllerCallOperationsRunObjectDetectionV1V1**](#callcontrollercalloperationsrunobjectdetectionv1v1) | **POST** /v1/call/operations.run.objectDetection.v1 | |
|[**callControllerCallOperationsRunOnecompilerV1V1**](#callcontrollercalloperationsrunonecompilerv1v1) | **POST** /v1/call/operations.run.onecompiler.v1 | |
|[**callControllerCallOperationsRunPipelineMapV1V1**](#callcontrollercalloperationsrunpipelinemapv1v1) | **POST** /v1/call/operations.run.pipelineMap.v1 | |
|[**callControllerCallOperationsRunPoseEstimationV1V1**](#callcontrollercalloperationsrunposeestimationv1v1) | **POST** /v1/call/operations.run.poseEstimation.v1 | |
|[**callControllerCallOperationsRunResizeV1V1**](#callcontrollercalloperationsrunresizev1v1) | **POST** /v1/call/operations.run.resize.v1 | |
|[**callControllerCallOperationsRunSegmentAnythingEmbeddingsV1V1**](#callcontrollercalloperationsrunsegmentanythingembeddingsv1v1) | **POST** /v1/call/operations.run.segmentAnything.embeddings.v1 | |
|[**callControllerCallOperationsRunSegmentAnythingMaskV1V1**](#callcontrollercalloperationsrunsegmentanythingmaskv1v1) | **POST** /v1/call/operations.run.segmentAnything.mask.v1 | |
|[**callControllerCallOperationsRunStringsTemplateV1V1**](#callcontrollercalloperationsrunstringstemplatev1v1) | **POST** /v1/call/operations.run.strings.template.v1 | |
|[**callControllerCallOperationsRunTranslateV1V1**](#callcontrollercalloperationsruntranslatev1v1) | **POST** /v1/call/operations.run.translate.v1 | |
|[**callControllerCallOperationsRunUpscaleV1V1**](#callcontrollercalloperationsrunupscalev1v1) | **POST** /v1/call/operations.run.upscale.v1 | |
|[**callControllerCallOperationsRunVtonGiseleV1V1**](#callcontrollercalloperationsrunvtongiselev1v1) | **POST** /v1/call/operations.run.vton.gisele.v1 | |
|[**callControllerCallOperationsWaitV1**](#callcontrollercalloperationswaitv1) | **POST** /v1/call/operations.wait | |
|[**callControllerCallPosesGetV1**](#callcontrollercallposesgetv1) | **POST** /v1/call/poses.get | |
|[**callControllerCallPosesListV1**](#callcontrollercallposeslistv1) | **POST** /v1/call/poses.list | |
|[**callControllerCallPosesMetadataUpdateV1**](#callcontrollercallposesmetadataupdatev1) | **POST** /v1/call/poses.metadata.update | |
|[**callControllerCallPosesPreviewSetV1**](#callcontrollercallposespreviewsetv1) | **POST** /v1/call/poses.preview.set | |
|[**callControllerCallStacksCreateV1**](#callcontrollercallstackscreatev1) | **POST** /v1/call/stacks.create | |
|[**callControllerCallStacksGetV1**](#callcontrollercallstacksgetv1) | **POST** /v1/call/stacks.get | |
|[**callControllerCallStacksItemsAddV1**](#callcontrollercallstacksitemsaddv1) | **POST** /v1/call/stacks.items.add | |
|[**callControllerCallStacksItemsRemoveV1**](#callcontrollercallstacksitemsremovev1) | **POST** /v1/call/stacks.items.remove | |
|[**callControllerCallStacksListV1**](#callcontrollercallstackslistv1) | **POST** /v1/call/stacks.list | |
|[**callControllerCallStacksMetadataUpdateV1**](#callcontrollercallstacksmetadataupdatev1) | **POST** /v1/call/stacks.metadata.update | |
|[**callControllerCallStorageCreateV1**](#callcontrollercallstoragecreatev1) | **POST** /v1/call/storage.create | |
|[**callControllerCallStorageDeleteV1**](#callcontrollercallstoragedeletev1) | **POST** /v1/call/storage.delete | |
|[**callControllerCallStorageGetManyV1**](#callcontrollercallstoragegetmanyv1) | **POST** /v1/call/storage.getMany | |
|[**callControllerCallStorageUpdateV1**](#callcontrollercallstorageupdatev1) | **POST** /v1/call/storage.update | |
|[**callControllerCallVideosGetManyV1**](#callcontrollercallvideosgetmanyv1) | **POST** /v1/call/videos.getMany | |
|[**callControllerCallVideosGetV1**](#callcontrollercallvideosgetv1) | **POST** /v1/call/videos.get | |

# **callControllerCallAccessAttachV1**
> callControllerCallAccessAttachV1(attachAccessParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    AttachAccessParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let attachAccessParamsDto: AttachAccessParamsDto; //

const { status, data } = await apiInstance.callControllerCallAccessAttachV1(
    attachAccessParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachAccessParamsDto** | **AttachAccessParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallAccessGrantV1**
> callControllerCallAccessGrantV1(modifyAccessParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ModifyAccessParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let modifyAccessParamsDto: ModifyAccessParamsDto; //

const { status, data } = await apiInstance.callControllerCallAccessGrantV1(
    modifyAccessParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modifyAccessParamsDto** | **ModifyAccessParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallAccountsBalanceAddV1**
> callControllerCallAccountsBalanceAddV1(addBalanceParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    AddBalanceParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let addBalanceParamsDto: AddBalanceParamsDto; //

const { status, data } = await apiInstance.callControllerCallAccountsBalanceAddV1(
    addBalanceParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addBalanceParamsDto** | **AddBalanceParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallAccountsBalanceGetV1**
> BalanceResultDto callControllerCallAccountsBalanceGetV1(getBalanceParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetBalanceParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getBalanceParamsDto: GetBalanceParamsDto; //

const { status, data } = await apiInstance.callControllerCallAccountsBalanceGetV1(
    getBalanceParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getBalanceParamsDto** | **GetBalanceParamsDto**|  | |


### Return type

**BalanceResultDto**

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

# **callControllerCallAccountsBalanceSelfV1**
> BalanceResultDto callControllerCallAccountsBalanceSelfV1(body)


### Example

```typescript
import {
    CallApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let body: string; //

const { status, data } = await apiInstance.callControllerCallAccountsBalanceSelfV1(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**BalanceResultDto**

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

# **callControllerCallAccountsCreateV1**
> AccountEntity callControllerCallAccountsCreateV1(createAccountParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    CreateAccountParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let createAccountParamsDto: CreateAccountParamsDto; //

const { status, data } = await apiInstance.callControllerCallAccountsCreateV1(
    createAccountParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAccountParamsDto** | **CreateAccountParamsDto**|  | |


### Return type

**AccountEntity**

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

# **callControllerCallAccountsGetV1**
> AccountEntity callControllerCallAccountsGetV1(getAccountParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetAccountParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getAccountParamsDto: GetAccountParamsDto; //

const { status, data } = await apiInstance.callControllerCallAccountsGetV1(
    getAccountParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getAccountParamsDto** | **GetAccountParamsDto**|  | |


### Return type

**AccountEntity**

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

# **callControllerCallAccountsListV1**
> ListAccountsDto callControllerCallAccountsListV1(listAccountsParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ListAccountsParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let listAccountsParamsDto: ListAccountsParamsDto; //

const { status, data } = await apiInstance.callControllerCallAccountsListV1(
    listAccountsParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listAccountsParamsDto** | **ListAccountsParamsDto**|  | |


### Return type

**ListAccountsDto**

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

# **callControllerCallAccountsSelfV1**
> SelfAccountDto callControllerCallAccountsSelfV1(body)


### Example

```typescript
import {
    CallApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let body: string; //

const { status, data } = await apiInstance.callControllerCallAccountsSelfV1(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**SelfAccountDto**

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

# **callControllerCallCollectionsCreateV1**
> CollectionEntity callControllerCallCollectionsCreateV1(createCollectionParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    CreateCollectionParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let createCollectionParamsDto: CreateCollectionParamsDto; //

const { status, data } = await apiInstance.callControllerCallCollectionsCreateV1(
    createCollectionParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCollectionParamsDto** | **CreateCollectionParamsDto**|  | |


### Return type

**CollectionEntity**

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

# **callControllerCallCollectionsGetV1**
> CollectionEntity callControllerCallCollectionsGetV1(getCollectionParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetCollectionParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getCollectionParamsDto: GetCollectionParamsDto; //

const { status, data } = await apiInstance.callControllerCallCollectionsGetV1(
    getCollectionParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getCollectionParamsDto** | **GetCollectionParamsDto**|  | |


### Return type

**CollectionEntity**

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

# **callControllerCallCollectionsItemsAddV1**
> callControllerCallCollectionsItemsAddV1(addItemsToCollectionParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    AddItemsToCollectionParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let addItemsToCollectionParamsDto: AddItemsToCollectionParamsDto; //

const { status, data } = await apiInstance.callControllerCallCollectionsItemsAddV1(
    addItemsToCollectionParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addItemsToCollectionParamsDto** | **AddItemsToCollectionParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallCollectionsItemsListV1**
> ListCollectionItemsDto callControllerCallCollectionsItemsListV1(listCollectionItemsParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ListCollectionItemsParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let listCollectionItemsParamsDto: ListCollectionItemsParamsDto; //

const { status, data } = await apiInstance.callControllerCallCollectionsItemsListV1(
    listCollectionItemsParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listCollectionItemsParamsDto** | **ListCollectionItemsParamsDto**|  | |


### Return type

**ListCollectionItemsDto**

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

# **callControllerCallCollectionsItemsRemoveV1**
> callControllerCallCollectionsItemsRemoveV1(removeItemsFromCollectionParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    RemoveItemsFromCollectionParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let removeItemsFromCollectionParamsDto: RemoveItemsFromCollectionParamsDto; //

const { status, data } = await apiInstance.callControllerCallCollectionsItemsRemoveV1(
    removeItemsFromCollectionParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeItemsFromCollectionParamsDto** | **RemoveItemsFromCollectionParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallCollectionsListV1**
> ListCollectionsDto callControllerCallCollectionsListV1(listCollectionsParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ListCollectionsParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let listCollectionsParamsDto: ListCollectionsParamsDto; //

const { status, data } = await apiInstance.callControllerCallCollectionsListV1(
    listCollectionsParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listCollectionsParamsDto** | **ListCollectionsParamsDto**|  | |


### Return type

**ListCollectionsDto**

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

# **callControllerCallCollectionsMetadataUpdateV1**
> CollectionEntity callControllerCallCollectionsMetadataUpdateV1(updateResourceMetadataDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    UpdateResourceMetadataDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let updateResourceMetadataDto: UpdateResourceMetadataDto; //

const { status, data } = await apiInstance.callControllerCallCollectionsMetadataUpdateV1(
    updateResourceMetadataDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateResourceMetadataDto** | **UpdateResourceMetadataDto**|  | |


### Return type

**CollectionEntity**

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

# **callControllerCallGroupsAccountsAddV1**
> callControllerCallGroupsAccountsAddV1(addAccountToGroupParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    AddAccountToGroupParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let addAccountToGroupParamsDto: AddAccountToGroupParamsDto; //

const { status, data } = await apiInstance.callControllerCallGroupsAccountsAddV1(
    addAccountToGroupParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addAccountToGroupParamsDto** | **AddAccountToGroupParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallGroupsAccountsRemoveV1**
> callControllerCallGroupsAccountsRemoveV1(removeAccountFromGroupParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    RemoveAccountFromGroupParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let removeAccountFromGroupParamsDto: RemoveAccountFromGroupParamsDto; //

const { status, data } = await apiInstance.callControllerCallGroupsAccountsRemoveV1(
    removeAccountFromGroupParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeAccountFromGroupParamsDto** | **RemoveAccountFromGroupParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallGroupsCreateV1**
> GroupEntity callControllerCallGroupsCreateV1(body)


### Example

```typescript
import {
    CallApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let body: string; //

const { status, data } = await apiInstance.callControllerCallGroupsCreateV1(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**GroupEntity**

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

# **callControllerCallGroupsDeleteV1**
> callControllerCallGroupsDeleteV1(deleteParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    DeleteParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let deleteParamsDto: DeleteParamsDto; //

const { status, data } = await apiInstance.callControllerCallGroupsDeleteV1(
    deleteParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteParamsDto** | **DeleteParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallGroupsGetV1**
> GroupEntity callControllerCallGroupsGetV1(getGroupParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetGroupParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getGroupParamsDto: GetGroupParamsDto; //

const { status, data } = await apiInstance.callControllerCallGroupsGetV1(
    getGroupParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getGroupParamsDto** | **GetGroupParamsDto**|  | |


### Return type

**GroupEntity**

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

# **callControllerCallImagesGetManyV1**
> Array<ImageUrlResponseDto> callControllerCallImagesGetManyV1(getUrlsForImagesParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetUrlsForImagesParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getUrlsForImagesParamsDto: GetUrlsForImagesParamsDto; //

const { status, data } = await apiInstance.callControllerCallImagesGetManyV1(
    getUrlsForImagesParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getUrlsForImagesParamsDto** | **GetUrlsForImagesParamsDto**|  | |


### Return type

**Array<ImageUrlResponseDto>**

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

# **callControllerCallImagesGetV1**
> ImageEntity callControllerCallImagesGetV1(getImageParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetImageParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getImageParamsDto: GetImageParamsDto; //

const { status, data } = await apiInstance.callControllerCallImagesGetV1(
    getImageParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getImageParamsDto** | **GetImageParamsDto**|  | |


### Return type

**ImageEntity**

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

# **callControllerCallImagesRepresentationsGetV1**
> ImageRepresentationResponseDto callControllerCallImagesRepresentationsGetV1(getImageRepresentationParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetImageRepresentationParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getImageRepresentationParamsDto: GetImageRepresentationParamsDto; //

const { status, data } = await apiInstance.callControllerCallImagesRepresentationsGetV1(
    getImageRepresentationParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getImageRepresentationParamsDto** | **GetImageRepresentationParamsDto**|  | |


### Return type

**ImageRepresentationResponseDto**

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

# **callControllerCallOperationsGetManyV1**
> Array<OperationEntity> callControllerCallOperationsGetManyV1(getOperationsParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetOperationsParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getOperationsParamsDto: GetOperationsParamsDto; //

const { status, data } = await apiInstance.callControllerCallOperationsGetManyV1(
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

# **callControllerCallOperationsGetV1**
> OperationEntity callControllerCallOperationsGetV1(getOperationParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetOperationParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getOperationParamsDto: GetOperationParamsDto; //

const { status, data } = await apiInstance.callControllerCallOperationsGetV1(
    getOperationParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getOperationParamsDto** | **GetOperationParamsDto**|  | |


### Return type

**OperationEntity**

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

# **callControllerCallOperationsListV1**
> ListOperationsDto callControllerCallOperationsListV1(listOperationsParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ListOperationsParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let listOperationsParamsDto: ListOperationsParamsDto; //

const { status, data } = await apiInstance.callControllerCallOperationsListV1(
    listOperationsParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listOperationsParamsDto** | **ListOperationsParamsDto**|  | |


### Return type

**ListOperationsDto**

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

# **callControllerCallOperationsMetadataUpdateV1**
> OperationEntity callControllerCallOperationsMetadataUpdateV1(updateResourceMetadataDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    UpdateResourceMetadataDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let updateResourceMetadataDto: UpdateResourceMetadataDto; //

const { status, data } = await apiInstance.callControllerCallOperationsMetadataUpdateV1(
    updateResourceMetadataDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateResourceMetadataDto** | **UpdateResourceMetadataDto**|  | |


### Return type

**OperationEntity**

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

# **callControllerCallOperationsRunAnimateCreatomateV1V1**
> AnimateCreatomateV1Response callControllerCallOperationsRunAnimateCreatomateV1V1(animateCreatomateV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    AnimateCreatomateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let animateCreatomateV1Request: AnimateCreatomateV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunAnimateCreatomateV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunAnimateKling16ProV1V1**
> AnimateKling16ProV1Response callControllerCallOperationsRunAnimateKling16ProV1V1(animateKling16ProV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    AnimateKling16ProV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let animateKling16ProV1Request: AnimateKling16ProV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunAnimateKling16ProV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunAnimateKling21V1V1**
> AnimateKling21V1Response callControllerCallOperationsRunAnimateKling21V1V1(animateKling21V1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    AnimateKling21V1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let animateKling21V1Request: AnimateKling21V1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunAnimateKling21V1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunCompositeV1V1**
> CompositeV1Response callControllerCallOperationsRunCompositeV1V1(compositeV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    CompositeV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let compositeV1Request: CompositeV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunCompositeV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunContrastV1V1**
> ContrastV1Response callControllerCallOperationsRunContrastV1V1(contrastV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ContrastV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let contrastV1Request: ContrastV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunContrastV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunCropV1V1**
> CropV1Response callControllerCallOperationsRunCropV1V1(cropV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    CropV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let cropV1Request: CropV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunCropV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunCutV1V1**
> CutV1Response callControllerCallOperationsRunCutV1V1(cutV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    CutV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let cutV1Request: CutV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunCutV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunEchoV1V1**
> EchoV1Response callControllerCallOperationsRunEchoV1V1(echoV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    EchoV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let echoV1Request: EchoV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunEchoV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunEditFluxKontextDevV1V1**
> EditFluxKontextDevV1Response callControllerCallOperationsRunEditFluxKontextDevV1V1(editFluxKontextDevV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    EditFluxKontextDevV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let editFluxKontextDevV1Request: EditFluxKontextDevV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunEditFluxKontextDevV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunGptV1V1**
> GptV1Response callControllerCallOperationsRunGptV1V1(gptV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GptV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let gptV1Request: GptV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunGptV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunGptV2V1**
> GptV2Response callControllerCallOperationsRunGptV2V1(gptV2Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GptV2Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let gptV2Request: GptV2Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunGptV2V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunHauteLindaV1V1**
> HauteLindaV1Response callControllerCallOperationsRunHauteLindaV1V1(hauteLindaV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    HauteLindaV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let hauteLindaV1Request: HauteLindaV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunHauteLindaV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunHauteNaomiV1V1**
> HauteNaomiV1Response callControllerCallOperationsRunHauteNaomiV1V1(hauteNaomiV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    HauteNaomiV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let hauteNaomiV1Request: HauteNaomiV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunHauteNaomiV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunImagineKateV1V1**
> ImagineKateV1Response callControllerCallOperationsRunImagineKateV1V1(imagineKateV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ImagineKateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let imagineKateV1Request: ImagineKateV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunImagineKateV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunInpaintKateV1V1**
> InpaintKateV1Response callControllerCallOperationsRunInpaintKateV1V1(inpaintKateV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    InpaintKateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let inpaintKateV1Request: InpaintKateV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunInpaintKateV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunMathV1V1**
> MathV1Response callControllerCallOperationsRunMathV1V1(mathV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    MathV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let mathV1Request: MathV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunMathV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunNegateImageV1V1**
> NegateImageV1Response callControllerCallOperationsRunNegateImageV1V1(negateImageV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    NegateImageV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let negateImageV1Request: NegateImageV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunNegateImageV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunNoiseV1V1**
> NoiseV1Response callControllerCallOperationsRunNoiseV1V1(noiseV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    NoiseV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let noiseV1Request: NoiseV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunNoiseV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunObjectDetectionV1V1**
> ObjectDetectionV1Response callControllerCallOperationsRunObjectDetectionV1V1(objectDetectionV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ObjectDetectionV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let objectDetectionV1Request: ObjectDetectionV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunObjectDetectionV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunOnecompilerV1V1**
> OnecompilerV1Response callControllerCallOperationsRunOnecompilerV1V1(onecompilerV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    OnecompilerV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let onecompilerV1Request: OnecompilerV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunOnecompilerV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunPipelineMapV1V1**
> PipelineMapV1Response callControllerCallOperationsRunPipelineMapV1V1(pipelineMapV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    PipelineMapV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let pipelineMapV1Request: PipelineMapV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunPipelineMapV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunPoseEstimationV1V1**
> PoseEstimationV1Response callControllerCallOperationsRunPoseEstimationV1V1(poseEstimationV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    PoseEstimationV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let poseEstimationV1Request: PoseEstimationV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunPoseEstimationV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunResizeV1V1**
> ResizeV1Response callControllerCallOperationsRunResizeV1V1(resizeV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ResizeV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let resizeV1Request: ResizeV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunResizeV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunSegmentAnythingEmbeddingsV1V1**
> SegmentAnythingEmbeddingsV1Response callControllerCallOperationsRunSegmentAnythingEmbeddingsV1V1(segmentAnythingEmbeddingsV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    SegmentAnythingEmbeddingsV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let segmentAnythingEmbeddingsV1Request: SegmentAnythingEmbeddingsV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunSegmentAnythingEmbeddingsV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunSegmentAnythingMaskV1V1**
> SegmentAnythingMaskV1Response callControllerCallOperationsRunSegmentAnythingMaskV1V1(segmentAnythingMaskV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    SegmentAnythingMaskV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let segmentAnythingMaskV1Request: SegmentAnythingMaskV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunSegmentAnythingMaskV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunStringsTemplateV1V1**
> StringsTemplateV1Response callControllerCallOperationsRunStringsTemplateV1V1(stringsTemplateV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    StringsTemplateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let stringsTemplateV1Request: StringsTemplateV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunStringsTemplateV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunTranslateV1V1**
> TranslateV1Response callControllerCallOperationsRunTranslateV1V1(translateV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    TranslateV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let translateV1Request: TranslateV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunTranslateV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunUpscaleV1V1**
> UpscaleV1Response callControllerCallOperationsRunUpscaleV1V1(upscaleV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    UpscaleV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let upscaleV1Request: UpscaleV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunUpscaleV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsRunVtonGiseleV1V1**
> VtonGiseleV1Response callControllerCallOperationsRunVtonGiseleV1V1(vtonGiseleV1Request)


### Example

```typescript
import {
    CallApi,
    Configuration,
    VtonGiseleV1Request
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let vtonGiseleV1Request: VtonGiseleV1Request; //

const { status, data } = await apiInstance.callControllerCallOperationsRunVtonGiseleV1V1(
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
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallOperationsWaitV1**
> OperationEntity callControllerCallOperationsWaitV1(waitOperationParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    WaitOperationParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let waitOperationParamsDto: WaitOperationParamsDto; //

const { status, data } = await apiInstance.callControllerCallOperationsWaitV1(
    waitOperationParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **waitOperationParamsDto** | **WaitOperationParamsDto**|  | |


### Return type

**OperationEntity**

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

# **callControllerCallPosesGetV1**
> PoseEntity callControllerCallPosesGetV1(getPoseParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetPoseParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getPoseParamsDto: GetPoseParamsDto; //

const { status, data } = await apiInstance.callControllerCallPosesGetV1(
    getPoseParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getPoseParamsDto** | **GetPoseParamsDto**|  | |


### Return type

**PoseEntity**

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

# **callControllerCallPosesListV1**
> ListPosesDto callControllerCallPosesListV1(listPosesParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ListPosesParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let listPosesParamsDto: ListPosesParamsDto; //

const { status, data } = await apiInstance.callControllerCallPosesListV1(
    listPosesParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listPosesParamsDto** | **ListPosesParamsDto**|  | |


### Return type

**ListPosesDto**

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

# **callControllerCallPosesMetadataUpdateV1**
> callControllerCallPosesMetadataUpdateV1(updateResourceMetadataDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    UpdateResourceMetadataDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let updateResourceMetadataDto: UpdateResourceMetadataDto; //

const { status, data } = await apiInstance.callControllerCallPosesMetadataUpdateV1(
    updateResourceMetadataDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateResourceMetadataDto** | **UpdateResourceMetadataDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallPosesPreviewSetV1**
> callControllerCallPosesPreviewSetV1(setPosePreviewDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    SetPosePreviewDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let setPosePreviewDto: SetPosePreviewDto; //

const { status, data } = await apiInstance.callControllerCallPosesPreviewSetV1(
    setPosePreviewDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setPosePreviewDto** | **SetPosePreviewDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallStacksCreateV1**
> StackEntity callControllerCallStacksCreateV1(createStackParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    CreateStackParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let createStackParamsDto: CreateStackParamsDto; //

const { status, data } = await apiInstance.callControllerCallStacksCreateV1(
    createStackParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStackParamsDto** | **CreateStackParamsDto**|  | |


### Return type

**StackEntity**

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

# **callControllerCallStacksGetV1**
> StackEntity callControllerCallStacksGetV1(getStackParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetStackParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getStackParamsDto: GetStackParamsDto; //

const { status, data } = await apiInstance.callControllerCallStacksGetV1(
    getStackParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getStackParamsDto** | **GetStackParamsDto**|  | |


### Return type

**StackEntity**

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

# **callControllerCallStacksItemsAddV1**
> StackEntity callControllerCallStacksItemsAddV1(addItemsToStackParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    AddItemsToStackParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let addItemsToStackParamsDto: AddItemsToStackParamsDto; //

const { status, data } = await apiInstance.callControllerCallStacksItemsAddV1(
    addItemsToStackParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addItemsToStackParamsDto** | **AddItemsToStackParamsDto**|  | |


### Return type

**StackEntity**

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

# **callControllerCallStacksItemsRemoveV1**
> StackEntity callControllerCallStacksItemsRemoveV1(removeItemsFromStackParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    RemoveItemsFromStackParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let removeItemsFromStackParamsDto: RemoveItemsFromStackParamsDto; //

const { status, data } = await apiInstance.callControllerCallStacksItemsRemoveV1(
    removeItemsFromStackParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeItemsFromStackParamsDto** | **RemoveItemsFromStackParamsDto**|  | |


### Return type

**StackEntity**

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

# **callControllerCallStacksListV1**
> ListStacksDto callControllerCallStacksListV1(listStacksParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    ListStacksParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let listStacksParamsDto: ListStacksParamsDto; //

const { status, data } = await apiInstance.callControllerCallStacksListV1(
    listStacksParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listStacksParamsDto** | **ListStacksParamsDto**|  | |


### Return type

**ListStacksDto**

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

# **callControllerCallStacksMetadataUpdateV1**
> StackEntity callControllerCallStacksMetadataUpdateV1(updateResourceMetadataDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    UpdateResourceMetadataDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let updateResourceMetadataDto: UpdateResourceMetadataDto; //

const { status, data } = await apiInstance.callControllerCallStacksMetadataUpdateV1(
    updateResourceMetadataDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateResourceMetadataDto** | **UpdateResourceMetadataDto**|  | |


### Return type

**StackEntity**

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

# **callControllerCallStorageCreateV1**
> StorageEntity callControllerCallStorageCreateV1(createStorageRecordParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    CreateStorageRecordParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let createStorageRecordParamsDto: CreateStorageRecordParamsDto; //

const { status, data } = await apiInstance.callControllerCallStorageCreateV1(
    createStorageRecordParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStorageRecordParamsDto** | **CreateStorageRecordParamsDto**|  | |


### Return type

**StorageEntity**

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

# **callControllerCallStorageDeleteV1**
> callControllerCallStorageDeleteV1(deleteStorageParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    DeleteStorageParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let deleteStorageParamsDto: DeleteStorageParamsDto; //

const { status, data } = await apiInstance.callControllerCallStorageDeleteV1(
    deleteStorageParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteStorageParamsDto** | **DeleteStorageParamsDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **callControllerCallStorageGetManyV1**
> Array<StorageRecordsResultDto> callControllerCallStorageGetManyV1(getStorageRecordParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetStorageRecordParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getStorageRecordParamsDto: GetStorageRecordParamsDto; //

const { status, data } = await apiInstance.callControllerCallStorageGetManyV1(
    getStorageRecordParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getStorageRecordParamsDto** | **GetStorageRecordParamsDto**|  | |


### Return type

**Array<StorageRecordsResultDto>**

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

# **callControllerCallStorageUpdateV1**
> StorageEntity callControllerCallStorageUpdateV1(updateStorageRecordParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    UpdateStorageRecordParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let updateStorageRecordParamsDto: UpdateStorageRecordParamsDto; //

const { status, data } = await apiInstance.callControllerCallStorageUpdateV1(
    updateStorageRecordParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateStorageRecordParamsDto** | **UpdateStorageRecordParamsDto**|  | |


### Return type

**StorageEntity**

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

# **callControllerCallVideosGetManyV1**
> Array<VideoUrlResponseDto> callControllerCallVideosGetManyV1(getVideosParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetVideosParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getVideosParamsDto: GetVideosParamsDto; //

const { status, data } = await apiInstance.callControllerCallVideosGetManyV1(
    getVideosParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getVideosParamsDto** | **GetVideosParamsDto**|  | |


### Return type

**Array<VideoUrlResponseDto>**

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

# **callControllerCallVideosGetV1**
> VideoEntity callControllerCallVideosGetV1(getVideoParamsDto)


### Example

```typescript
import {
    CallApi,
    Configuration,
    GetVideoParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CallApi(configuration);

let getVideoParamsDto: GetVideoParamsDto; //

const { status, data } = await apiInstance.callControllerCallVideosGetV1(
    getVideoParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getVideoParamsDto** | **GetVideoParamsDto**|  | |


### Return type

**VideoEntity**

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

