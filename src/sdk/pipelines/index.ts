import { AxiosPromise } from 'axios';
import { CallApi, PipelineEntity, PipelinesApi } from '../../autogenerated';
import { Pipeline } from '@hautechai/pipelines';
import { SDKOptions } from '../../types';
import { useAutogeneratedAPI } from '../api';

const pipelines = (options: SDKOptions) => {
    const api = useAutogeneratedAPI({ API: PipelinesApi, options });
    const callAPI = useAutogeneratedAPI({ API: CallApi, options });

    const callMethod =
        <Param, Result>(method: (methods: CallApi) => (params: Param) => AxiosPromise<Result>) =>
        (params: Param): Promise<Result> =>
            callAPI.call({
                run: (methods) => method(methods)(params),
            });

    const createPipeline = () =>
        new Pipeline({
            accounts: {
                create: callMethod((methods) => methods.callControllerCallAccountsCreateV1),
                get: callMethod((methods) => methods.callControllerCallAccountsGetV1),
                list: callMethod((methods) => methods.callControllerCallAccountsListV1),
            },
            balances: {
                add: callMethod((methods) => methods.callControllerCallAccountsBalanceAddV1),
                get: callMethod((methods) => methods.callControllerCallAccountsBalanceGetV1),
                getSelf: callMethod((methods) => methods.callControllerCallAccountsBalanceSelfV1),
            },
            collections: {
                create: callMethod((methods) => methods.callControllerCallCollectionsCreateV1),
                items: {
                    add: callMethod((methods) => methods.callControllerCallCollectionsItemsAddV1),
                    list: callMethod((methods) => methods.callControllerCallCollectionsItemsListV1),
                    remove: callMethod((methods) => methods.callControllerCallCollectionsItemsRemoveV1),
                },
                get: callMethod((methods) => methods.callControllerCallCollectionsGetV1),
                list: callMethod((methods) => methods.callControllerCallCollectionsListV1),
                updateMetadata: callMethod((methods) => methods.callControllerCallCollectionsMetadataUpdateV1),
            },
            groups: {
                accounts: {
                    add: callMethod((methods) => methods.callControllerCallGroupsAccountsAddV1),
                    remove: callMethod((methods) => methods.callControllerCallGroupsAccountsRemoveV1),
                },
                create: callMethod((methods) => methods.callControllerCallGroupsCreateV1),
                delete: callMethod((methods) => methods.callControllerCallGroupsDeleteV1),
                get: callMethod((methods) => methods.callControllerCallGroupsGetV1),
            },
            images: {
                get: callMethod((methods) => methods.callControllerCallImagesGetV1),
                getUrls: callMethod((methods) => methods.callControllerCallImagesGetManyV1),
            },
            operations: {
                get: callMethod((methods) => methods.callControllerCallOperationsGetV1),
                list: callMethod((methods) => methods.callControllerCallOperationsListV1),
                updateMetadata: callMethod((methods) => methods.callControllerCallOperationsMetadataUpdateV1),
            },
            poses: {
                get: callMethod((methods) => methods.callControllerCallPosesGetV1),
                list: callMethod((methods) => methods.callControllerCallPosesListV1),
            },
            stacks: {
                create: callMethod((methods) => methods.callControllerCallStacksCreateV1),
                get: callMethod((methods) => methods.callControllerCallStacksGetV1),
                list: callMethod((methods) => methods.callControllerCallStacksListV1),
                updateMetadata: callMethod((methods) => methods.callControllerCallStacksMetadataUpdateV1),
            },
            storage: {
                create: callMethod((methods) => methods.callControllerCallStorageCreateV1),
                delete: callMethod((methods) => methods.callControllerCallStorageDeleteV1),
                getMany: callMethod((methods) => methods.callControllerCallStorageGetManyV1),
                update: callMethod((methods) => methods.callControllerCallStorageUpdateV1),
            },
        });

    type PipelineType = ReturnType<typeof createPipeline>;
    return {
        constructTemplate: (consructPipeline: (pipeline: PipelineType) => PipelineType): PipelineType =>
            consructPipeline(createPipeline()),
        create: async (props: { metadata?: any; template: PipelineType }): Promise<PipelineEntity> =>
            api.call({
                run: (methods) =>
                    methods.pipelinesControllerCreatePipelineV1({
                        metadata: props.metadata,
                        tasks: props.template.tasks,
                    }),
            }),
        get: async (props: { id: string }): Promise<PipelineEntity | undefined> =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.pipelinesControllerGetPipelineV1(props.id),
            }),
        wait: async (props: { id: string; timeoutInSeconds?: number }): Promise<PipelineEntity> =>
            new Promise((resolve, reject) => {
                const initialDelay = 5000;
                const delay = 2000;

                let timeoutId: NodeJS.Timeout;
                const poll = async () => {
                    const pipeline = (await api.call({
                        run: (methods) => methods.pipelinesControllerGetPipelineV1(props.id),
                    })) as PipelineEntity;
                    if (pipeline.status === 'completed') return resolve(pipeline);
                    if (pipeline.status === 'failed') return reject(pipeline);
                    timeoutId = setTimeout(poll, delay);
                };
                timeoutId = setTimeout(poll, initialDelay);
            }),
    };
};

export default pipelines;
