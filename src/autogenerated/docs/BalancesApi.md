# BalancesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**balancesControllerAddBalanceV1**](#balancescontrolleraddbalancev1) | **PUT** /v1/accounts/{id}/balance | |
|[**balancesControllerGetBalanceForSelfV1**](#balancescontrollergetbalanceforselfv1) | **GET** /v1/accounts/self/balance | |
|[**balancesControllerGetBalanceV1**](#balancescontrollergetbalancev1) | **GET** /v1/accounts/{id}/balance | |

# **balancesControllerAddBalanceV1**
> balancesControllerAddBalanceV1(addBalanceControllerParamsDto)


### Example

```typescript
import {
    BalancesApi,
    Configuration,
    AddBalanceControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new BalancesApi(configuration);

let id: string; // (default to undefined)
let addBalanceControllerParamsDto: AddBalanceControllerParamsDto; //

const { status, data } = await apiInstance.balancesControllerAddBalanceV1(
    id,
    addBalanceControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addBalanceControllerParamsDto** | **AddBalanceControllerParamsDto**|  | |
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

# **balancesControllerGetBalanceForSelfV1**
> BalanceResultDto balancesControllerGetBalanceForSelfV1()


### Example

```typescript
import {
    BalancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BalancesApi(configuration);

const { status, data } = await apiInstance.balancesControllerGetBalanceForSelfV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**BalanceResultDto**

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

# **balancesControllerGetBalanceV1**
> BalanceResultDto balancesControllerGetBalanceV1()


### Example

```typescript
import {
    BalancesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BalancesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.balancesControllerGetBalanceV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**BalanceResultDto**

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

