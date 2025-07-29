# GPTV2InputResponseFormat

The response format for the model output. See OpenAI docs for details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **object** | The type of response format being defined: \&#39;text\&#39; or \&#39;json_object\&#39;. | [default to undefined]
**json_schema** | [**GPTV2ResponseFormatJsonSchemaDetailsDto**](GPTV2ResponseFormatJsonSchemaDetailsDto.md) | The JSON schema definition for the response format. Required for type json_schema. | [default to undefined]

## Example

```typescript
import { GPTV2InputResponseFormat } from './api';

const instance: GPTV2InputResponseFormat = {
    type,
    json_schema,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
