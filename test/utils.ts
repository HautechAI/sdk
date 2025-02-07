import { createSDK, createTokenSigner } from '../src';

export const randomString = () =>
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

if (!process.env.APP_ID) {
    throw new Error('APP_ID is not set');
}
if (!process.env.APP_KEY_ID) {
    throw new Error('APP_KEY_ID is not set');
}
if (!process.env.APP_KEY_SECRET) {
    throw new Error('APP_KEY_SECRET is not set');
}

const tokenSigner = createTokenSigner({
    appId: process.env.APP_ID!,
    appKeyId: process.env.APP_KEY_ID!,
    appKeySecret: process.env.APP_KEY_SECRET!,
});

export const sdk = createSDK({
    authToken: () => tokenSigner.createRootToken({ expiresInSeconds: 60 * 60 * 24 * 30 }),
    endpoint: process.env.API_CORE_URL!,
});
