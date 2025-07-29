# VideosApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**videosControllerFinalizeUploadV1**](#videoscontrollerfinalizeuploadv1) | **POST** /v1/videos/upload/finalize | |
|[**videosControllerGetVideoByIdV1**](#videoscontrollergetvideobyidv1) | **GET** /v1/videos/{id} | |
|[**videosControllerGetVideosV1**](#videoscontrollergetvideosv1) | **GET** /v1/videos/many | |
|[**videosControllerStartUploadV1**](#videoscontrollerstartuploadv1) | **POST** /v1/videos/upload/initialize | |

# **videosControllerFinalizeUploadV1**
> VideoEntity videosControllerFinalizeUploadV1(createVideoParamsDto)


### Example

```typescript
import {
    VideosApi,
    Configuration,
    CreateVideoParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new VideosApi(configuration);

let createVideoParamsDto: CreateVideoParamsDto; //

const { status, data } = await apiInstance.videosControllerFinalizeUploadV1(
    createVideoParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createVideoParamsDto** | **CreateVideoParamsDto**|  | |


### Return type

**VideoEntity**

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

# **videosControllerGetVideoByIdV1**
> VideoEntity videosControllerGetVideoByIdV1()


### Example

```typescript
import {
    VideosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VideosApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.videosControllerGetVideoByIdV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**VideoEntity**

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

# **videosControllerGetVideosV1**
> Array<VideoEntity> videosControllerGetVideosV1()


### Example

```typescript
import {
    VideosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VideosApi(configuration);

let ids: Array<string>; // (default to undefined)

const { status, data } = await apiInstance.videosControllerGetVideosV1(
    ids
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ids** | **Array&lt;string&gt;** |  | defaults to undefined|


### Return type

**Array<VideoEntity>**

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

# **videosControllerStartUploadV1**
> InitializeImageUploadResultDto videosControllerStartUploadV1()


### Example

```typescript
import {
    VideosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new VideosApi(configuration);

const { status, data } = await apiInstance.videosControllerStartUploadV1();
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

