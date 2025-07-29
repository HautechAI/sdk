# WorkflowsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**workflowsControllerCreateWorkflowV1**](#workflowscontrollercreateworkflowv1) | **POST** /v1/workflows | |
|[**workflowsControllerDeleteWorkflowV1**](#workflowscontrollerdeleteworkflowv1) | **DELETE** /v1/workflows/{id} | |
|[**workflowsControllerGetWorkflowV1**](#workflowscontrollergetworkflowv1) | **GET** /v1/workflows/{id} | |
|[**workflowsControllerListWorkflowsV1**](#workflowscontrollerlistworkflowsv1) | **GET** /v1/workflows | |
|[**workflowsControllerRunWorkflowV1**](#workflowscontrollerrunworkflowv1) | **POST** /v1/workflows/run/{workflowId} | |
|[**workflowsControllerUpdateWorkflowV1**](#workflowscontrollerupdateworkflowv1) | **PUT** /v1/workflows/{id} | |

# **workflowsControllerCreateWorkflowV1**
> WorkflowDto workflowsControllerCreateWorkflowV1(createWorkflowParamsDto)


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    CreateWorkflowParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let createWorkflowParamsDto: CreateWorkflowParamsDto; //

const { status, data } = await apiInstance.workflowsControllerCreateWorkflowV1(
    createWorkflowParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWorkflowParamsDto** | **CreateWorkflowParamsDto**|  | |


### Return type

**WorkflowDto**

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

# **workflowsControllerDeleteWorkflowV1**
> workflowsControllerDeleteWorkflowV1()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.workflowsControllerDeleteWorkflowV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflowsControllerGetWorkflowV1**
> WorkflowDto workflowsControllerGetWorkflowV1()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.workflowsControllerGetWorkflowV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowDto**

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

# **workflowsControllerListWorkflowsV1**
> ListWorkflowsDto workflowsControllerListWorkflowsV1()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let orderBy: 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC'; // (optional) (default to 'createdAt_DESC')
let limit: number; // (optional) (default to 50)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.workflowsControllerListWorkflowsV1(
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

**ListWorkflowsDto**

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

# **workflowsControllerRunWorkflowV1**
> RunWorkflowResponseDto workflowsControllerRunWorkflowV1(runWorkflowParamsDto)


### Example

```typescript
import {
    WorkflowsApi,
    Configuration,
    RunWorkflowParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let workflowId: string; // (default to undefined)
let runWorkflowParamsDto: RunWorkflowParamsDto; //

const { status, data } = await apiInstance.workflowsControllerRunWorkflowV1(
    workflowId,
    runWorkflowParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **runWorkflowParamsDto** | **RunWorkflowParamsDto**|  | |
| **workflowId** | [**string**] |  | defaults to undefined|


### Return type

**RunWorkflowResponseDto**

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

# **workflowsControllerUpdateWorkflowV1**
> WorkflowDto workflowsControllerUpdateWorkflowV1()


### Example

```typescript
import {
    WorkflowsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkflowsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.workflowsControllerUpdateWorkflowV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**WorkflowDto**

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

