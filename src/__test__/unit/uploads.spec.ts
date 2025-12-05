import axios from 'axios';
import { useImagesApi } from '../../sdk/api-definitions/images';
import { useVideosApi } from '../../sdk/api-definitions/videos';

// Track append calls
const appendCalls: Array<{ name: string; value: any; options?: any }> = [];

// fs will be spied per test to avoid touching real filesystem

// Ensure browser-specific globals are not present
declare const window: undefined;

describe('Node path uploads include filename in FormData', () => {
    beforeEach(() => {
        appendCalls.length = 0;
        vi.spyOn(axios, 'put').mockResolvedValue({ data: { fileToken: 'tok' } } as any);
        // Stub fs.createReadStream so no actual file access happens
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const fs = require('fs');
        vi.spyOn(fs, 'createReadStream').mockImplementation(((p: string) => ({ __mockStream: true, path: p })) as any);
        // Spy on form-data append to capture options
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const FormDataCtor = require('form-data');
        (vi.spyOn(FormDataCtor.prototype, 'append') as any).mockImplementation(function (
            this: any,
            name: string,
            value: any,
            options?: any,
        ) {
            appendCalls.push({ name, value, options });
            return this;
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('images.createFromFile(path) appends file with explicit filename', async () => {
        const imagesApi = useImagesApi();

        const fakeSdk: any = {
            images: {
                startUpload: async () => ({ uploadUrl: 'http://example.com/upload' }),
                finalizeUpload: async () => ({ id: 'img-id' }),
            },
        };

        const testPath = '/var/tmp/example-image.png';
        const res = await imagesApi.createFromFile.call(fakeSdk, testPath);
        expect(res.id).toBe('img-id');

        const fileAppend = appendCalls.find((c) => c.name === 'file');
        expect(fileAppend).toBeTruthy();
        expect(fileAppend!.options?.filename).toBe('example-image.png');
    });

    it('videos.createFromFile(path) appends file with explicit filename', async () => {
        const videosApi = useVideosApi();

        const fakeSdk: any = {
            videos: {
                startUpload: async () => ({ uploadUrl: 'http://example.com/upload' }),
                finalizeUpload: async () => ({ id: 'vid-id' }),
            },
        };

        const testPath = '/home/user/movie.mp4';
        const res = await videosApi.createFromFile.call(fakeSdk, testPath);
        expect(res.id).toBe('vid-id');

        const fileAppend = appendCalls.find((c) => c.name === 'file');
        expect(fileAppend).toBeTruthy();
        expect(fileAppend!.options?.filename).toBe('movie.mp4');
    });
});
