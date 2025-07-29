# ImagesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**imagesControllerFinalizeUploadV1**](#imagescontrollerfinalizeuploadv1) | **POST** /v1/images/upload/finalize | |
|[**imagesControllerGetImageV1**](#imagescontrollergetimagev1) | **GET** /v1/images/{id} | |
|[**imagesControllerGetRepresentationV1**](#imagescontrollergetrepresentationv1) | **GET** /v1/images/{id}/representation/{type} | |
|[**imagesControllerGetUrlsV1**](#imagescontrollergeturlsv1) | **POST** /v1/images/many | |
|[**imagesControllerStartUploadV1**](#imagescontrollerstartuploadv1) | **POST** /v1/images/upload/initialize | |

# **imagesControllerFinalizeUploadV1**
> ImageEntity imagesControllerFinalizeUploadV1(createImageParamsDto)


### Example

```typescript
import {
    ImagesApi,
    Configuration,
    CreateImageParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let createImageParamsDto: CreateImageParamsDto; //

const { status, data } = await apiInstance.imagesControllerFinalizeUploadV1(
    createImageParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createImageParamsDto** | **CreateImageParamsDto**|  | |


### Return type

**ImageEntity**

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

# **imagesControllerGetImageV1**
> ImageEntity imagesControllerGetImageV1()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.imagesControllerGetImageV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ImageEntity**

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

# **imagesControllerGetRepresentationV1**
> ImageRepresentationResponseDto imagesControllerGetRepresentationV1()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let id: string; // (default to undefined)
let type: string; // (default to undefined)

const { status, data } = await apiInstance.imagesControllerGetRepresentationV1(
    id,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **type** | [**string**] |  | defaults to undefined|


### Return type

**ImageRepresentationResponseDto**

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

# **imagesControllerGetUrlsV1**
> Array<ImageEntity> imagesControllerGetUrlsV1(getUrlsForImagesParamsDto)


### Example

```typescript
import {
    ImagesApi,
    Configuration,
    GetUrlsForImagesParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let getUrlsForImagesParamsDto: GetUrlsForImagesParamsDto; //

const { status, data } = await apiInstance.imagesControllerGetUrlsV1(
    getUrlsForImagesParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getUrlsForImagesParamsDto** | **GetUrlsForImagesParamsDto**|  | |


### Return type

**Array<ImageEntity>**

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

# **imagesControllerStartUploadV1**
> InitializeImageUploadResultDto imagesControllerStartUploadV1()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

const { status, data } = await apiInstance.imagesControllerStartUploadV1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**InitializeImageUploadResultDto**

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

