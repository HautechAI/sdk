# GPTV2InputMessagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **string** | The content of the developer message. | [default to undefined]
**role** | **string** | The role of the message sender. | [default to undefined]
**name** | **string** | The name of the sender, if applicable. | [optional] [default to undefined]
**refusal** | **string** | The refusal message, if applicable. | [optional] [default to undefined]
**tool_calls** | [**Array&lt;GPTV2MessageToolCallDto&gt;**](GPTV2MessageToolCallDto.md) | The tool calls made by the assistant, if any. | [optional] [default to undefined]
**tool_call_id** | **string** | The ID of the tool call. | [default to undefined]

## Example

```typescript
import { GPTV2InputMessagesInner } from './api';

const instance: GPTV2InputMessagesInner = {
    content,
    role,
    name,
    refusal,
    tool_calls,
    tool_call_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
