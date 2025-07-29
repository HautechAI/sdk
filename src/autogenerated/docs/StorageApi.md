# StorageApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**storageControllerCreateRecordV1**](#storagecontrollercreaterecordv1) | **POST** /v1/storage | |
|[**storageControllerDeleteRecordV1**](#storagecontrollerdeleterecordv1) | **POST** /v1/storage/delete | |
|[**storageControllerGetRecordsV1**](#storagecontrollergetrecordsv1) | **POST** /v1/storage/many | |
|[**storageControllerUpdateRecordV1**](#storagecontrollerupdaterecordv1) | **POST** /v1/storage/write | |

# **storageControllerCreateRecordV1**
> StorageEntity storageControllerCreateRecordV1(createStorageRecordParamsDto)


### Example

```typescript
import {
    StorageApi,
    Configuration,
    CreateStorageRecordParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let createStorageRecordParamsDto: CreateStorageRecordParamsDto; //

const { status, data } = await apiInstance.storageControllerCreateRecordV1(
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storageControllerDeleteRecordV1**
> storageControllerDeleteRecordV1(deleteStorageParamsDto)


### Example

```typescript
import {
    StorageApi,
    Configuration,
    DeleteStorageParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let deleteStorageParamsDto: DeleteStorageParamsDto; //

const { status, data } = await apiInstance.storageControllerDeleteRecordV1(
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
|**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storageControllerGetRecordsV1**
> Array<StorageRecordsResultDto> storageControllerGetRecordsV1(getStorageRecordParamsDto)


### Example

```typescript
import {
    StorageApi,
    Configuration,
    GetStorageRecordParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let getStorageRecordParamsDto: GetStorageRecordParamsDto; //

const { status, data } = await apiInstance.storageControllerGetRecordsV1(
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

# **storageControllerUpdateRecordV1**
> StorageEntity storageControllerUpdateRecordV1(updateStorageRecordParamsDto)


### Example

```typescript
import {
    StorageApi,
    Configuration,
    UpdateStorageRecordParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new StorageApi(configuration);

let updateStorageRecordParamsDto: UpdateStorageRecordParamsDto; //

const { status, data } = await apiInstance.storageControllerUpdateRecordV1(
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

