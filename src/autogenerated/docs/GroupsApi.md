# GroupsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**groupsControllerAddAccountV1**](#groupscontrolleraddaccountv1) | **POST** /v1/groups/{id}/accounts/add | |
|[**groupsControllerCreateGroupV1**](#groupscontrollercreategroupv1) | **POST** /v1/groups | |
|[**groupsControllerDeleteGroupV1**](#groupscontrollerdeletegroupv1) | **DELETE** /v1/groups/{id} | |
|[**groupsControllerGetGroupV1**](#groupscontrollergetgroupv1) | **GET** /v1/groups/{id} | |
|[**groupsControllerRemoveAccountV1**](#groupscontrollerremoveaccountv1) | **POST** /v1/groups/{id}/accounts/remove | |

# **groupsControllerAddAccountV1**
> groupsControllerAddAccountV1(addAccountToGroupControllerParamsDto)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    AddAccountToGroupControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)
let addAccountToGroupControllerParamsDto: AddAccountToGroupControllerParamsDto; //

const { status, data } = await apiInstance.groupsControllerAddAccountV1(
    id,
    addAccountToGroupControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addAccountToGroupControllerParamsDto** | **AddAccountToGroupControllerParamsDto**|  | |
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groupsControllerCreateGroupV1**
> GroupEntity groupsControllerCreateGroupV1()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

const { status, data } = await apiInstance.groupsControllerCreateGroupV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GroupEntity**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groupsControllerDeleteGroupV1**
> groupsControllerDeleteGroupV1()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.groupsControllerDeleteGroupV1(
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
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groupsControllerGetGroupV1**
> GroupEntity groupsControllerGetGroupV1()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.groupsControllerGetGroupV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GroupEntity**

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

# **groupsControllerRemoveAccountV1**
> groupsControllerRemoveAccountV1(removeAccountFromGroupControllerParamsDto)


### Example

```typescript
import {
    GroupsApi,
    Configuration,
    RemoveAccountFromGroupControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let id: string; // (default to undefined)
let removeAccountFromGroupControllerParamsDto: RemoveAccountFromGroupControllerParamsDto; //

const { status, data } = await apiInstance.groupsControllerRemoveAccountV1(
    id,
    removeAccountFromGroupControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeAccountFromGroupControllerParamsDto** | **RemoveAccountFromGroupControllerParamsDto**|  | |
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
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

