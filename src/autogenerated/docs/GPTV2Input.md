# GPTV2Input


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **string** | ID of the model to use. See OpenAI docs for model endpoint compatibility. | [optional] [default to ModelEnum_Gpt4o]
**messages** | [**Array&lt;GPTV2InputMessagesInner&gt;**](GPTV2InputMessagesInner.md) | A list of messages comprising the conversation so far. Each message must be one of: system, user, assistant, tool, or developer message DTO. | [default to undefined]
**response_format** | [**GPTV2InputResponseFormat**](GPTV2InputResponseFormat.md) |  | [optional] [default to undefined]
**seed** | **number** | This feature is in Beta. If specified, OpenAI will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. | [optional] [default to undefined]
**tools** | [**Array&lt;GPTV2ToolDto&gt;**](GPTV2ToolDto.md) | A list of tools the model may call. Currently, only functions are supported as a tool. | [optional] [default to undefined]
**tool_choice** | [**GPTV2ToolChoiceDto**](GPTV2ToolChoiceDto.md) | Controls which (if any) tool is called by the model. \&#39;none\&#39;, \&#39;auto\&#39;, \&#39;required\&#39;, or a specific function tool. | [optional] [default to undefined]
**response_format_text_or_object** | [**GPTV2ResponseFormatTextOrObjectDto**](GPTV2ResponseFormatTextOrObjectDto.md) |  | [optional] [default to undefined]
**max_completion_tokens** | **number** |  | [optional] [default to 1000]

## Example

```typescript
import { GPTV2Input } from './api';

const instance: GPTV2Input = {
    model,
    messages,
    response_format,
    seed,
    tools,
    tool_choice,
    response_format_text_or_object,
    max_completion_tokens,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
