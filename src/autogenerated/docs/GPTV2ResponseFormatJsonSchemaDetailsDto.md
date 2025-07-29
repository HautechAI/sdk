# GPTV2ResponseFormatJsonSchemaDetailsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. | [default to undefined]
**description** | **string** | A description of what the response format is for, used by the model to determine how to respond in the format. | [optional] [default to undefined]
**schema** | **object** | The schema for the response format, described as a JSON Schema object. | [optional] [default to undefined]
**strict** | **boolean** | Whether to enable strict schema adherence when generating the output. If set to true, the model will always follow the exact schema defined in the &#x60;schema&#x60; field. Only a subset of JSON Schema is supported when &#x60;strict&#x60; is &#x60;true&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { GPTV2ResponseFormatJsonSchemaDetailsDto } from './api';

const instance: GPTV2ResponseFormatJsonSchemaDetailsDto = {
    name,
    description,
    schema,
    strict,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
