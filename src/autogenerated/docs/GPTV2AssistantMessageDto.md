# GPTV2AssistantMessageDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **string** | The content of the assistant message. | [optional] [default to undefined]
**role** | **string** | The role of the message sender. | [default to undefined]
**name** | **string** | The name of the sender, if applicable. | [optional] [default to undefined]
**refusal** | **string** | The refusal message, if applicable. | [optional] [default to undefined]
**tool_calls** | [**Array&lt;GPTV2MessageToolCallDto&gt;**](GPTV2MessageToolCallDto.md) | The tool calls made by the assistant, if any. | [optional] [default to undefined]

## Example

```typescript
import { GPTV2AssistantMessageDto } from './api';

const instance: GPTV2AssistantMessageDto = {
    content,
    role,
    name,
    refusal,
    tool_calls,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
