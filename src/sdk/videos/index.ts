import { VideoEntity, VideosApi } from '../../autogenerated';
import { SDKOptions } from '../../types';
import { useAutogeneratedAPI } from '../api';

const videos = (options: SDKOptions) => {
    const api = useAutogeneratedAPI({ API: VideosApi, options });

    return {
        get: async (props: { id: string }): Promise<VideoEntity | undefined> =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.videosControllerGetVideoByIdV1(props.id),
            }),
        getUrls: async (props: { ids: string[] }): Promise<Record<string, string>> =>
            api.call({
                run: (methods) => methods.videosControllerGetVideosV1(props.ids),
                transform: (data) => data.reduce((acc, { id, url }) => ({ ...acc, [id]: url }), {}),
            }),
    };
};

export default videos;
