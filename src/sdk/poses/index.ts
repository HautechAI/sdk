import { ClientSDKOptions } from '../../types';
import { PosesApi } from '../../internal';
import { useInternalAPI } from '../../api';

const poses = (options: ClientSDKOptions) => {
    const api = useInternalAPI({ API: PosesApi, options });
    return {
        create: async (props: { imageId: string; metadata?: any }) =>
            api.call({
                run: (methods) =>
                    methods.posesControllerCreatePoseV1({ imageId: props.imageId, metadata: props.metadata }),
            }),
        get: async (props: { id: string }) =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.posesControllerGetPoseV1(props.id),
            }),
    };
};

export default poses;
