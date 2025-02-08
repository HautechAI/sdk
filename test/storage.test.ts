import { describe, it, expect } from '@jest/globals';
import { randomString, recreateSdk } from './utils';
import { SDK } from '../src';

describe('Storage', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(() => {
        sdk.close();
    });

    it('should create record', async () => {
        const key = randomString();
        const value = 'test';

        const record = await sdk.storage.create({ key, value });
        expect(record).toBeDefined();
    });

    it('should get record', async () => {
        const key = randomString();
        const value = 'test';

        const record = await sdk.storage.create({ key, value });
        expect(record).toBeDefined();

        const records = await sdk.storage.getMany({ keys: [key] });
        expect(records).toEqual({ [key]: value });
    });

    it('should update record', async () => {
        const key = randomString();
        const value = 'test';
        const updatingValue = 'test2';

        const record = await sdk.storage.create({ key, value });
        expect(record).toBeDefined();

        const records = await sdk.storage.getMany({ keys: [key] });
        expect(records).toEqual({ [key]: value });

        const record2 = await sdk.storage.update({ key, value: updatingValue });
        expect(record2).toBeDefined();

        const records2 = await sdk.storage.getMany({ keys: [key] });
        expect(records2).toEqual({ [key]: updatingValue });
    });

    it('should delete record', async () => {
        const key = randomString();
        const value = 'test';

        await sdk.storage.create({ key, value });
        await sdk.storage.delete({ key });

        const records = await sdk.storage.getMany({ keys: [key] });
        expect(records).toEqual({});
    });
});
