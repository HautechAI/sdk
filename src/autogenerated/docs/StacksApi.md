# StacksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**stacksControllerAddItemsV1**](#stackscontrolleradditemsv1) | **POST** /v1/stacks/{id}/items/add | |
|[**stacksControllerCreateStackV1**](#stackscontrollercreatestackv1) | **POST** /v1/stacks | |
|[**stacksControllerGetStackV1**](#stackscontrollergetstackv1) | **GET** /v1/stacks/{id} | |
|[**stacksControllerListStacksV1**](#stackscontrollerliststacksv1) | **GET** /v1/stacks | |
|[**stacksControllerRemoveItemsV1**](#stackscontrollerremoveitemsv1) | **POST** /v1/stacks/{id}/items/remove | |
|[**stacksControllerUpdateMetadataV1**](#stackscontrollerupdatemetadatav1) | **PUT** /v1/stacks/{id}/metadata | |

# **stacksControllerAddItemsV1**
> StackEntity stacksControllerAddItemsV1(addItemsToStackControllerParamsDto)


### Example

```typescript
import {
    StacksApi,
    Configuration,
    AddItemsToStackControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new StacksApi(configuration);

let id: string; // (default to undefined)
let addItemsToStackControllerParamsDto: AddItemsToStackControllerParamsDto; //

const { status, data } = await apiInstance.stacksControllerAddItemsV1(
    id,
    addItemsToStackControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addItemsToStackControllerParamsDto** | **AddItemsToStackControllerParamsDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


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

# **stacksControllerCreateStackV1**
> StackEntity stacksControllerCreateStackV1(createStackParamsDto)


### Example

```typescript
import {
    StacksApi,
    Configuration,
    CreateStackParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new StacksApi(configuration);

let createStackParamsDto: CreateStackParamsDto; //

const { status, data } = await apiInstance.stacksControllerCreateStackV1(
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stacksControllerGetStackV1**
> StackEntity stacksControllerGetStackV1()


### Example

```typescript
import {
    StacksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StacksApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.stacksControllerGetStackV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**StackEntity**

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

# **stacksControllerListStacksV1**
> ListStacksDto stacksControllerListStacksV1()


### Example

```typescript
import {
    StacksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new StacksApi(configuration);

let orderBy: 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC'; // (optional) (default to 'createdAt_DESC')
let limit: number; // (optional) (default to 50)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.stacksControllerListStacksV1(
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

**ListStacksDto**

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

# **stacksControllerRemoveItemsV1**
> StackEntity stacksControllerRemoveItemsV1(removeItemsFromCollectionControllerParamsDto)


### Example

```typescript
import {
    StacksApi,
    Configuration,
    RemoveItemsFromCollectionControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new StacksApi(configuration);

let id: string; // (default to undefined)
let removeItemsFromCollectionControllerParamsDto: RemoveItemsFromCollectionControllerParamsDto; //

const { status, data } = await apiInstance.stacksControllerRemoveItemsV1(
    id,
    removeItemsFromCollectionControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeItemsFromCollectionControllerParamsDto** | **RemoveItemsFromCollectionControllerParamsDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


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

# **stacksControllerUpdateMetadataV1**
> ResourceEntity stacksControllerUpdateMetadataV1(updateMetadataDto)


### Example

```typescript
import {
    StacksApi,
    Configuration,
    UpdateMetadataDto
} from './api';

const configuration = new Configuration();
const apiInstance = new StacksApi(configuration);

let id: string; // (default to undefined)
let updateMetadataDto: UpdateMetadataDto; //

const { status, data } = await apiInstance.stacksControllerUpdateMetadataV1(
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

