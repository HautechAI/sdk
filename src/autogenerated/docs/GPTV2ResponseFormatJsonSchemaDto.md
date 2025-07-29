# GPTV2ResponseFormatJsonSchemaDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of response format being defined: json_schema. | [default to undefined]
**json_schema** | [**GPTV2ResponseFormatJsonSchemaDetailsDto**](GPTV2ResponseFormatJsonSchemaDetailsDto.md) | The JSON schema definition for the response format. Required for type json_schema. | [default to undefined]

## Example

```typescript
import { GPTV2ResponseFormatJsonSchemaDto } from './api';

const instance: GPTV2ResponseFormatJsonSchemaDto = {
    type,
    json_schema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
