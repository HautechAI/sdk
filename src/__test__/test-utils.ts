import { createTokenSigner } from '../token';
import { createSDK } from '../sdk';

export const createTestSdk = () => {
    const tokenSigner = createTokenSigner({
        appId: process.env.APP_ID!,
        appKeyId: process.env.APP_KEY_ID!,
        appKeySecret: process.env.APP_KEY_SECRET!,
    });

    let sdk = createSDK({
        baseUrl: process.env.API_CORE_URL,
        authToken: () => tokenSigner.createRootToken({ expiresInSeconds: 60 * 60 * 24 * 30 }),
    });

    return sdk;
};
