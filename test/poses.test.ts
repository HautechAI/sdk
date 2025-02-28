import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import { SDK } from '../src';
import { recreateSdk } from './utils';

describe('Images', () => {
    let sdk: SDK;

    beforeAll(() => {
        sdk = recreateSdk();
    });

    afterAll(() => {
        sdk.close();
    });

    it('should list the poses', async () => {
        const poses = await sdk.poses.list({});
        expect(poses).toBeDefined();
    });
});
