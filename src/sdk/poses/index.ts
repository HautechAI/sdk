import axios from 'axios';
import { ListResponse, SDKOptions } from '../../types';
import { ImageEntity, ImagesApi, ListPosesParamsDto, PoseEntity, PosesApi } from '../../autogenerated';
import { useAutogeneratedAPI } from '../api';
import { transformToListResponse } from '../transformers';

const poses = (options: SDKOptions) => {
    const api = useAutogeneratedAPI({ API: PosesApi, options });

    return {
        putPreview: async (props: { id: string; previewImageId: string }): Promise<void> =>
            api.call({
                run: (methods) =>
                    methods.posesControllerSetPosePreviewV1(props.id, {
                        previewImageId: props.previewImageId,
                    }),
            }),
        get: async (props: { id: string }): Promise<PoseEntity | undefined> =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.posesControllerGetPoseV1(props.id),
            }),
        list: async (props: ListPosesParamsDto): Promise<ListResponse<PoseEntity>> =>
            api.call({
                run: (methods) => methods.posesControllerListPosesV1(props.orderBy, props.limit, props.cursor),
                transform: transformToListResponse,
            }),
    };
};

export default poses;
