# CollectionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**collectionsControllerAddItemsV1**](#collectionscontrolleradditemsv1) | **POST** /v1/collections/{id}/items/add | |
|[**collectionsControllerCreateCollectionV1**](#collectionscontrollercreatecollectionv1) | **POST** /v1/collections | |
|[**collectionsControllerGetCollectionV1**](#collectionscontrollergetcollectionv1) | **GET** /v1/collections/{id} | |
|[**collectionsControllerListCollectionsV1**](#collectionscontrollerlistcollectionsv1) | **GET** /v1/collections | |
|[**collectionsControllerListItemsV1**](#collectionscontrollerlistitemsv1) | **GET** /v1/collections/{id}/items | |
|[**collectionsControllerRemoveItemsV1**](#collectionscontrollerremoveitemsv1) | **POST** /v1/collections/{id}/items/remove | |
|[**collectionsControllerUpdateMetadataV1**](#collectionscontrollerupdatemetadatav1) | **PUT** /v1/collections/{id}/metadata | |

# **collectionsControllerAddItemsV1**
> collectionsControllerAddItemsV1(addItemsToCollectionControllerParamsDto)


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    AddItemsToCollectionControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let id: string; // (default to undefined)
let addItemsToCollectionControllerParamsDto: AddItemsToCollectionControllerParamsDto; //

const { status, data } = await apiInstance.collectionsControllerAddItemsV1(
    id,
    addItemsToCollectionControllerParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addItemsToCollectionControllerParamsDto** | **AddItemsToCollectionControllerParamsDto**|  | |
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

# **collectionsControllerCreateCollectionV1**
> CollectionEntity collectionsControllerCreateCollectionV1(createCollectionParamsDto)


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    CreateCollectionParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let createCollectionParamsDto: CreateCollectionParamsDto; //

const { status, data } = await apiInstance.collectionsControllerCreateCollectionV1(
    createCollectionParamsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCollectionParamsDto** | **CreateCollectionParamsDto**|  | |


### Return type

**CollectionEntity**

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

# **collectionsControllerGetCollectionV1**
> CollectionEntity collectionsControllerGetCollectionV1()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.collectionsControllerGetCollectionV1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CollectionEntity**

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

# **collectionsControllerListCollectionsV1**
> ListCollectionsDto collectionsControllerListCollectionsV1()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let orderBy: 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC'; // (optional) (default to 'createdAt_DESC')
let limit: number; // (optional) (default to 50)
let cursor: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.collectionsControllerListCollectionsV1(
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

**ListCollectionsDto**

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

# **collectionsControllerListItemsV1**
> ListCollectionItemsDto collectionsControllerListItemsV1()


### Example

```typescript
import {
    CollectionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let id: string; // (default to undefined)
let cursor: string; // (optional) (default to undefined)
let orderBy: 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC'; // (optional) (default to 'createdAt_DESC')
let limit: number; // (optional) (default to 50)
let kind: 'collection' | 'operation' | 'stack' | 'image' | 'video' | 'pose' | 'storage' | 'pipeline' | 'workflow'; // (optional) (default to undefined)

const { status, data } = await apiInstance.collectionsControllerListItemsV1(
    id,
    cursor,
    orderBy,
    limit,
    kind
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **cursor** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**&#39;createdAt_ASC&#39; | &#39;createdAt_DESC&#39; | &#39;updatedAt_ASC&#39; | &#39;updatedAt_DESC&#39;**]**Array<&#39;createdAt_ASC&#39; &#124; &#39;createdAt_DESC&#39; &#124; &#39;updatedAt_ASC&#39; &#124; &#39;updatedAt_DESC&#39;>** |  | (optional) defaults to 'createdAt_DESC'|
| **limit** | [**number**] |  | (optional) defaults to 50|
| **kind** | [**&#39;collection&#39; | &#39;operation&#39; | &#39;stack&#39; | &#39;image&#39; | &#39;video&#39; | &#39;pose&#39; | &#39;storage&#39; | &#39;pipeline&#39; | &#39;workflow&#39;**]**Array<&#39;collection&#39; &#124; &#39;operation&#39; &#124; &#39;stack&#39; &#124; &#39;image&#39; &#124; &#39;video&#39; &#124; &#39;pose&#39; &#124; &#39;storage&#39; &#124; &#39;pipeline&#39; &#124; &#39;workflow&#39;>** |  | (optional) defaults to undefined|


### Return type

**ListCollectionItemsDto**

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

# **collectionsControllerRemoveItemsV1**
> collectionsControllerRemoveItemsV1(removeItemsFromCollectionControllerParamsDto)


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    RemoveItemsFromCollectionControllerParamsDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let id: string; // (default to undefined)
let removeItemsFromCollectionControllerParamsDto: RemoveItemsFromCollectionControllerParamsDto; //

const { status, data } = await apiInstance.collectionsControllerRemoveItemsV1(
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

# **collectionsControllerUpdateMetadataV1**
> ResourceEntity collectionsControllerUpdateMetadataV1(updateMetadataDto)


### Example

```typescript
import {
    CollectionsApi,
    Configuration,
    UpdateMetadataDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionsApi(configuration);

let id: string; // (default to undefined)
let updateMetadataDto: UpdateMetadataDto; //

const { status, data } = await apiInstance.collectionsControllerUpdateMetadataV1(
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

