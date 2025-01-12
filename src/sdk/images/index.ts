import axios from 'axios';
import { ClientSDKOptions } from '../../types';
import { ImagesApi } from '../../internal';
import { useInternalAPI } from '../api';

const images = (options: ClientSDKOptions) => {
    const api = useInternalAPI({ API: ImagesApi, options });
    const createFromFile = async (props: { file: any }) => {
        const uploadUrl = await api.call({
            run: (methods) => methods.imagesControllerStartUploadV1(props.file),
            transform: (data) => data.uploadUrl,
        });

        const formData = new FormData();
        formData.append('file', props.file);

        const response = await axios.put(uploadUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        const fileToken = response.data.fileToken;

        const image = await api.call({ run: (methods) => methods.imagesControllerFinalizeUploadV1({ fileToken }) });
        return image;
    };

    return {
        createFromFile,
        createFromUrl: async (props: { url: string }) => {
            const file = await axios.get(props.url, { responseType: 'arraybuffer' });
            return createFromFile({ file });
        },
        get: async (props: { id: string }) =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.imagesControllerGetImageV1(props.id),
            }),
        getUrls: async (props: { ids: string[] }): Promise<Record<string, string>> =>
            api.call({
                run: (methods) => methods.imagesControllerGetUrlsV1({ ids: props.ids }),
                transform: (data) => data.reduce((acc, { id, url }) => ({ ...acc, [id]: url }), {}),
            }),
    };
};

export default images;
