import { createClientSDK } from '../src';

export const randomString = () =>
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const sdk = createClientSDK({
    authToken: () => process.env.SDK_TOKEN!,
    endpoint: process.env.API_CORE_URL!,
});
