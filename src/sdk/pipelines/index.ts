import { ClientSDKOptions } from '../../types';
import { PipelinesApi } from '../../internal';
import { useInternalAPI } from '../../api';

const pipelines = (options: ClientSDKOptions) => {
    const api = useInternalAPI({ API: PipelinesApi, options });

    return {
        get: async (props: { id: string }) =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.pipelinesControllerGetPipelineV1(props.id),
            }),
    };
};

export default pipelines;
