# WebsocketApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**websocketControllerGetSettingsV1**](#websocketcontrollergetsettingsv1) | **GET** /v1/websocket/settings | |
|[**websocketControllerRegisterWebsocketV1**](#websocketcontrollerregisterwebsocketv1) | **POST** /v1/websocket/auth | |

# **websocketControllerGetSettingsV1**
> websocketControllerGetSettingsV1()


### Example

```typescript
import {
    WebsocketApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebsocketApi(configuration);

const { status, data } = await apiInstance.websocketControllerGetSettingsV1();
```

### Parameters
This endpoint does not have any parameters.


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

# **websocketControllerRegisterWebsocketV1**
> websocketControllerRegisterWebsocketV1()


### Example

```typescript
import {
    WebsocketApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WebsocketApi(configuration);

const { status, data } = await apiInstance.websocketControllerRegisterWebsocketV1();
```

### Parameters
This endpoint does not have any parameters.


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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

