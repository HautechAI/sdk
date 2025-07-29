# PosesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**posesControllerGetPoseV1**](#posescontrollergetposev1) | **GET** /v1/poses/{id} | |
|[**posesControllerListPosesV1**](#posescontrollerlistposesv1) | **GET** /v1/poses | |
|[**posesControllerSetPosePreviewV1**](#posescontrollersetposepreviewv1) | **PUT** /v1/poses/{id}/preview | |
|[**posesControllerUpdateMetadataV1**](#posescontrollerupdatemetadatav1) | **PUT** /v1/poses/{id}/metadata | |

# **posesControllerGetPoseV1**
> PoseEntity posesControllerGetPoseV1()


### Example

```typescript
import {
    PosesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PosesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.posesControllerGetPoseV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PoseEntity**

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

# **posesControllerListPosesV1**
> ListPosesDto posesControllerListPosesV1()


### Example

```typescript
import {
    PosesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PosesApi(configuration);

let orderBy: 'createdAt_ASC' | 'createdAt_DESC'; // (optional) (default to 'createdAt_DESC')
let limit: number; // (optional) (default to 50)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.posesControllerListPosesV1(
    orderBy,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | [**&#39;createdAt_ASC&#39; | &#39;createdAt_DESC&#39;**]**Array<&#39;createdAt_ASC&#39; &#124; &#39;createdAt_DESC&#39;>** |  | (optional) defaults to 'createdAt_DESC'|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **cursor** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListPosesDto**

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

# **posesControllerSetPosePreviewV1**
> posesControllerSetPosePreviewV1(setPosePreviewControllerParamsDto)


### Example

```typescript
import {
    PosesApi,
    Configuration,
    SetPosePreviewControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new PosesApi(configuration);

let id: string; // (default to undefined)
let setPosePreviewControllerParamsDto: SetPosePreviewControllerParamsDto; //

const { status, data } = await apiInstance.posesControllerSetPosePreviewV1(
    id,
    setPosePreviewControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setPosePreviewControllerParamsDto** | **SetPosePreviewControllerParamsDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


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

# **posesControllerUpdateMetadataV1**
> ResourceEntity posesControllerUpdateMetadataV1(updateMetadataDto)


### Example

```typescript
import {
    PosesApi,
    Configuration,
    UpdateMetadataDto
} from './api';

const configuration = new Configuration();
const apiInstance = new PosesApi(configuration);

let id: string; // (default to undefined)
let updateMetadataDto: UpdateMetadataDto; //

const { status, data } = await apiInstance.posesControllerUpdateMetadataV1(
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

