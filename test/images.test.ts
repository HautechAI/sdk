import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import { sdk } from './utils';

describe('Images', () => {
    it('should create image from file', async () => {
        const file = new Blob([fs.readFileSync('./test/image.jpeg')], { type: 'image/jpeg' });

        const image = await sdk.images.createFromFile({ file });
        expect(image).toBeDefined();
    });
});
