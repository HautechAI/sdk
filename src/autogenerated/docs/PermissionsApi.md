# PermissionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**permissionsControllerListAvailablePermissionsV1**](#permissionscontrollerlistavailablepermissionsv1) | **GET** /v1/permissions/available | |

# **permissionsControllerListAvailablePermissionsV1**
> Array<string> permissionsControllerListAvailablePermissionsV1()


### Example

```typescript
import {
    PermissionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PermissionsApi(configuration);

const { status, data } = await apiInstance.permissionsControllerListAvailablePermissionsV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<string>**

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

