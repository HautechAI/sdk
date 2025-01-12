import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import { sdk } from './utils';

describe('Images', () => {
    it('should create image from file', async () => {
        const file = new Blob([fs.readFileSync('./test/image.jpeg')], { type: 'image/jpeg' });

        const image = await sdk.images.createFromFile({ file });
        expect(image).toBeDefined();

        const sameImage = await sdk.images.get({ id: image.id });
        expect(sameImage).toEqual(image);

        const urls = await sdk.images.getUrls({ ids: [image.id] });
        expect(urls[image.id]).toBeDefined();
    });

    it('should create image from url', async () => {
        const image = await sdk.images.createFromUrl({ url: 'https://placehold.co/600x400.png' });
        expect(image).toBeDefined();

        const sameImage = await sdk.images.get({ id: image.id });
        expect(sameImage).toEqual(image);

        const urls = await sdk.images.getUrls({ ids: [image.id] });
        expect(urls[image.id]).toBeDefined();
    });
});
