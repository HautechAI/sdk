import { createTokenSigner } from '../src';

describe('Token signer', () => {
    it('should sign account token', async () => {
        const signer = createTokenSigner({
            appId: process.env.APP_ID!,
            appKeyId: process.env.APP_KEY_ID!,
            appKeySecret: process.env.APP_KEY_SECRET!,
        });

        const token = await signer.createAccountToken({ accountId: '123', expiresInSeconds: 3600 });
        expect(token).toBeDefined();
    });

    it('should sign root token', async () => {
        const signer = createTokenSigner({
            appId: process.env.APP_ID!,
            appKeyId: process.env.APP_KEY_ID!,
            appKeySecret: process.env.APP_KEY_SECRET!,
        });

        const token = await signer.createRootToken({ expiresInSeconds: 3600 });
        expect(token).toBeDefined();
    });
});
