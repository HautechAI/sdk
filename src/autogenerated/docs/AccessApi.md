# AccessApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accessControllerAccessV1**](#accesscontrolleraccessv1) | **GET** /v1/resources/{id}/access | UNSTABLE|
|[**accessControllerAttachAccessV1**](#accesscontrollerattachaccessv1) | **POST** /v1/resources/{id}/access/attach | |
|[**accessControllerDetachAccessV1**](#accesscontrollerdetachaccessv1) | **POST** /v1/resources/{id}/access/detach | |
|[**accessControllerGrantAccessV1**](#accesscontrollergrantaccessv1) | **POST** /v1/resources/{id}/access/grant | |
|[**accessControllerRevokeAccessV1**](#accesscontrollerrevokeaccessv1) | **POST** /v1/resources/{id}/access/revoke | |

# **accessControllerAccessV1**
> ListAccessControllerDto accessControllerAccessV1()


### Example

```typescript
import {
    AccessApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccessApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accessControllerAccessV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ListAccessControllerDto**

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

# **accessControllerAttachAccessV1**
> accessControllerAttachAccessV1(attachAccessControllerParamsDto)


### Example

```typescript
import {
    AccessApi,
    Configuration,
    AttachAccessControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AccessApi(configuration);

let id: string; // (default to undefined)
let attachAccessControllerParamsDto: AttachAccessControllerParamsDto; //

const { status, data } = await apiInstance.accessControllerAttachAccessV1(
    id,
    attachAccessControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachAccessControllerParamsDto** | **AttachAccessControllerParamsDto**|  | |
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

# **accessControllerDetachAccessV1**
> accessControllerDetachAccessV1(detachAccessControllerParamsDto)


### Example

```typescript
import {
    AccessApi,
    Configuration,
    DetachAccessControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AccessApi(configuration);

let id: string; // (default to undefined)
let detachAccessControllerParamsDto: DetachAccessControllerParamsDto; //

const { status, data } = await apiInstance.accessControllerDetachAccessV1(
    id,
    detachAccessControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **detachAccessControllerParamsDto** | **DetachAccessControllerParamsDto**|  | |
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

# **accessControllerGrantAccessV1**
> accessControllerGrantAccessV1(grantAccessControllerParams)


### Example

```typescript
import {
    AccessApi,
    Configuration,
    GrantAccessControllerParams
} from './api';

const configuration = new Configuration();
const apiInstance = new AccessApi(configuration);

let id: string; // (default to undefined)
let grantAccessControllerParams: GrantAccessControllerParams; //

const { status, data } = await apiInstance.accessControllerGrantAccessV1(
    id,
    grantAccessControllerParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **grantAccessControllerParams** | **GrantAccessControllerParams**|  | |
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

# **accessControllerRevokeAccessV1**
> accessControllerRevokeAccessV1(revokeAccessControllerParamsDto)


### Example

```typescript
import {
    AccessApi,
    Configuration,
    RevokeAccessControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AccessApi(configuration);

let id: string; // (default to undefined)
let revokeAccessControllerParamsDto: RevokeAccessControllerParamsDto; //

const { status, data } = await apiInstance.accessControllerRevokeAccessV1(
    id,
    revokeAccessControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **revokeAccessControllerParamsDto** | **RevokeAccessControllerParamsDto**|  | |
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

