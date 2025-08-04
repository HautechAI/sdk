import { SDK } from '../../types';
import FormData from 'form-data';
import fs from 'fs';
import axios from 'axios';
import { CoreApi } from '../../api-utils';

export const useVideosApi = (hautechApi: CoreApi) => ({
    get: hautechApi.videosControllerGetVideoByIdV1,
    list: hautechApi.videosControllerGetVideosV1,
    startUpload: hautechApi.videosControllerStartUploadV1,
    finalizeUpload: hautechApi.videosControllerFinalizeUploadV1,
    createFromFile: async function (
        this: any,
        file:
            | string
            | Blob
            | {
                  stream: NodeJS.ReadableStream;
                  filename: string;
                  contentType: string;
              },
    ): Promise<string> {
        const sdk: SDK = this;
        const uploadResult = await sdk.videos.startUpload();

        const formData = new FormData();

        if (typeof file === 'string') {
            formData.append('file', fs.createReadStream(file));
        } else if ((global as any).Blob && file instanceof Blob) {
            formData.append('file', file);
        } else if (typeof file === 'object' && 'filename' in file) {
            formData.append('file', file.stream, {
                filename: file.filename,
                contentType: file.contentType,
            });
        } else {
            throw new Error('Unsupported file type');
        }

        const uploadResponse = await axios.put(uploadResult.uploadUrl, formData, {
            headers: {
                ...formData.getHeaders(),
            },
            maxBodyLength: Infinity,
        });

        const fileToken = uploadResponse.data.fileToken;
        const finalizeResult = await sdk.videos.finalizeUpload({
            fileToken: fileToken,
        });

        if (!finalizeResult?.id) {
            throw new Error('Failed to finalize video upload');
        }

        return finalizeResult.id;
    },
    createFromUrl: async function (this: any, fileUrl: string): Promise<string> {
        const sdk: SDK = this;

        const isBrowser = typeof window !== 'undefined' && typeof Blob !== 'undefined';

        if (isBrowser) {
            const response = await axios.get(fileUrl, { responseType: 'blob', timeout: 30000 });
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            return sdk.videos.createFromFile(blob);
        } else {
            const response = await axios.get(fileUrl, { responseType: 'stream', timeout: 30000 });
            return sdk.videos.createFromFile({
                stream: response.data,
                filename: fileUrl.split('/').pop()!,
                contentType: response.headers['content-type'] || 'application/octet-stream',
            });
        }
    },
});
