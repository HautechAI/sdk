import { wrapApiCallNullable } from '../../api-utils';
import { CoreApi } from '../../api-utils';
import { SDK } from '../../types';
import fs from 'fs';
import axios from 'axios';
import FormDataNode from 'form-data';

export const useImagesApi = (hautechApi: CoreApi) => ({
    startUpload: hautechApi.imagesControllerStartUploadV1,
    finalizeUpload: hautechApi.imagesControllerFinalizeUploadV1,
    get: wrapApiCallNullable(hautechApi.imagesControllerGetImageV1),
    getUrls: hautechApi.imagesControllerGetUrlsV1,
    getRepresentation: hautechApi.imagesControllerGetRepresentationV1,
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
        const uploadResult = await sdk.images.startUpload();

        const isBrowser = typeof window !== 'undefined';

        let formData: any;

        if (isBrowser) {
            formData = new FormData();
        } else {
            const FormDataNode = require('form-data');
            formData = new FormDataNode();
        }

        if (typeof file === 'string') {
            if (isBrowser) throw new Error('Cannot use file path in browser');
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
        const finalizeResult = await sdk.images.finalizeUpload({
            fileToken: fileToken,
        });

        if (!finalizeResult?.id) {
            throw new Error('Failed to finalize image upload');
        }

        return finalizeResult.id;
    },
    createFromUrl: async function (this: any, fileUrl: string): Promise<string> {
        const sdk: SDK = this;

        const isBrowser = typeof window !== 'undefined' && typeof Blob !== 'undefined';

        if (isBrowser) {
            const response = await axios.get(fileUrl, { responseType: 'blob', timeout: 30000 });
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            return sdk.images.createFromFile(blob);
        } else {
            const response = await axios.get(fileUrl, { responseType: 'stream', timeout: 30000 });
            return sdk.images.createFromFile({
                stream: response.data,
                filename: fileUrl.split('/').pop()!,
                contentType: response.headers['content-type'] || 'application/octet-stream',
            });
        }
    },
});
