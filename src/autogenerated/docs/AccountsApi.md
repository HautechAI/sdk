# AccountsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountsControllerCreateAccountV1**](#accountscontrollercreateaccountv1) | **POST** /v1/accounts | |
|[**accountsControllerGetAccountByAliasV1**](#accountscontrollergetaccountbyaliasv1) | **GET** /v1/accounts/alias/{id} | |
|[**accountsControllerGetAccountV1**](#accountscontrollergetaccountv1) | **GET** /v1/accounts/{id} | |
|[**accountsControllerGetSelfV1**](#accountscontrollergetselfv1) | **GET** /v1/accounts/self | |
|[**accountsControllerListAccountsV1**](#accountscontrollerlistaccountsv1) | **GET** /v1/accounts | |
|[**accountsControllerUpdateAccountV1**](#accountscontrollerupdateaccountv1) | **PUT** /v1/accounts/{id} | |

# **accountsControllerCreateAccountV1**
> AccountEntity accountsControllerCreateAccountV1(createAccountParamsDto)


### Example

```typescript
import {
    AccountsApi,
    Configuration,
    CreateAccountParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let createAccountParamsDto: CreateAccountParamsDto; //

const { status, data } = await apiInstance.accountsControllerCreateAccountV1(
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountsControllerGetAccountByAliasV1**
> AccountEntity accountsControllerGetAccountByAliasV1()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accountsControllerGetAccountByAliasV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AccountEntity**

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

# **accountsControllerGetAccountV1**
> AccountEntity accountsControllerGetAccountV1()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accountsControllerGetAccountV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AccountEntity**

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

# **accountsControllerGetSelfV1**
> SelfAccountDto accountsControllerGetSelfV1()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

const { status, data } = await apiInstance.accountsControllerGetSelfV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SelfAccountDto**

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

# **accountsControllerListAccountsV1**
> ListAccountsDto accountsControllerListAccountsV1()


### Example

```typescript
import {
    AccountsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let orderBy: 'createdAt_ASC' | 'createdAt_DESC'; // (optional) (default to 'createdAt_DESC')
let limit: number; // (optional) (default to 50)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.accountsControllerListAccountsV1(
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

**ListAccountsDto**

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

# **accountsControllerUpdateAccountV1**
> AccountEntity accountsControllerUpdateAccountV1(updateAccountParamsDto)


### Example

```typescript
import {
    AccountsApi,
    Configuration,
    UpdateAccountParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountsApi(configuration);

let id: string; // (default to undefined)
let updateAccountParamsDto: UpdateAccountParamsDto; //

const { status, data } = await apiInstance.accountsControllerUpdateAccountV1(
    id,
    updateAccountParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountParamsDto** | **UpdateAccountParamsDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


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

