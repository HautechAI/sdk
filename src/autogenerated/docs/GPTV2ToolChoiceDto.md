# GPTV2ToolChoiceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **object** | Controls which (if any) tool is called by the model. \&#39;none\&#39;, \&#39;auto\&#39;, \&#39;required\&#39;, or a specific function tool. | [default to undefined]
**_function** | [**GPTV2ToolChoiceFunctionDto**](GPTV2ToolChoiceFunctionDto.md) | The function to call, if type is &#x60;function&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { GPTV2ToolChoiceDto } from './api';

const instance: GPTV2ToolChoiceDto = {
    type,
    _function,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
