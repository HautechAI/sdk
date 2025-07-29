# PipelinesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**pipelinesControllerCreatePipelineV1**](#pipelinescontrollercreatepipelinev1) | **POST** /v1/pipelines | |
|[**pipelinesControllerGetPipelineV1**](#pipelinescontrollergetpipelinev1) | **GET** /v1/pipelines/{id} | |
|[**pipelinesControllerListPipelinesV1**](#pipelinescontrollerlistpipelinesv1) | **GET** /v1/pipelines | |

# **pipelinesControllerCreatePipelineV1**
> PipelineDto pipelinesControllerCreatePipelineV1(createPipelineParamsDto)


### Example

```typescript
import {
    PipelinesApi,
    Configuration,
    CreatePipelineParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let createPipelineParamsDto: CreatePipelineParamsDto; //

const { status, data } = await apiInstance.pipelinesControllerCreatePipelineV1(
    createPipelineParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPipelineParamsDto** | **CreatePipelineParamsDto**|  | |


### Return type

**PipelineDto**

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

# **pipelinesControllerGetPipelineV1**
> PipelineDto pipelinesControllerGetPipelineV1()


### Example

```typescript
import {
    PipelinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.pipelinesControllerGetPipelineV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PipelineDto**

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

# **pipelinesControllerListPipelinesV1**
> ListPipelinesDto pipelinesControllerListPipelinesV1()


### Example

```typescript
import {
    PipelinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let orderBy: 'createdAt_ASC' | 'createdAt_DESC'; // (optional) (default to 'createdAt_DESC')
let limit: number; // (optional) (default to 50)
let parentOperationId: string; // (optional) (default to undefined)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.pipelinesControllerListPipelinesV1(
    orderBy,
    limit,
    parentOperationId,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderBy** | [**&#39;createdAt_ASC&#39; | &#39;createdAt_DESC&#39;**]**Array<&#39;createdAt_ASC&#39; &#124; &#39;createdAt_DESC&#39;>** |  | (optional) defaults to 'createdAt_DESC'|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **parentOperationId** | [**string**] |  | (optional) defaults to undefined|
| **cursor** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListPipelinesDto**

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

