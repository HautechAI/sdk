import { createSDK, createTokenSigner } from '../src';

export const randomString = () =>
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const tokenSigner = createTokenSigner({
    appId: process.env.APP_ID!,
    appKeyId: process.env.APP_KEY_ID!,
    appKeySecret: process.env.APP_KEY_SECRET!,
});

export const recreateSdk = (options?: { useWebsocket?: boolean; allowPollingFallback?: boolean }) => {
    return createSDK({
        authToken: () => tokenSigner.createRootToken({ expiresInSeconds: 60 * 60 * 24 * 30 }),
        endpoint: process.env.API_CORE_URL!,
        ...options,
    });
};
