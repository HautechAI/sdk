import { createClientSDK } from '../src';

export const sdk = createClientSDK({
    authToken: () => process.env.SDK_TOKEN!,
    endpoint: process.env.API_CORE_URL!,
});
