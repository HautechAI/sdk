import { AxiosPromise } from 'axios';
import {
    CallApi,
    PipelineEntity,
    PipelinesApi,
    PipelinesControllerListPipelinesV1OrderByEnum,
} from '../../autogenerated';
import { Pipeline } from '@hautechai/pipelines';
import { ListProps, ListResponse, SDKOptions } from '../../types';
import { useAutogeneratedAPI } from '../api';
import { PipelineMetadata } from '../index';
import { AddMetadata } from '../utils';
import { transformToListResponse } from '../transformers';

type PipelineEntityWithMetadata = AddMetadata<PipelineEntity, PipelineMetadata>;

const pipelines = (options: SDKOptions) => {
    const api = useAutogeneratedAPI({ API: PipelinesApi, options });
    const callAPI = useAutogeneratedAPI({ API: CallApi, options });

    const callMethod =
        <Param, Result>(method: (methods: CallApi) => (params: Param) => AxiosPromise<Result>) =>
        // Type intersection is used as a type check assistance to prevent accidental passing of raw TaskOutput.
        (params: Param & { __taskOutput__?: never }): Promise<Result> =>
            callAPI.call({
                run: (methods) => method(methods)(params),
            });

    const createPipeline = () =>
        new Pipeline({
            access: {
                attach: callMethod((methods) => methods.callControllerCallAccessAttachV1),
                grant: callMethod((methods) => methods.callControllerCallAccessGrantV1),
            },
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
                run: {
                    haute: {
                        linda: {
                            v1: callMethod((methods) => methods.callControllerCallOperationsRunHauteLindaV1V1),
                        },
                        naomi: {
                            v1: callMethod((methods) => methods.callControllerCallOperationsRunHauteNaomiV1V1),
                        },
                    },
                    inpaint: {
                        kate: {
                            v1: callMethod((methods) => methods.callControllerCallOperationsRunInpaintKateV1V1),
                        },
                    },
                    gpt: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunGptV1V1),
                    },
                    imagine: {
                        kate: {
                            v1: callMethod((methods) => methods.callControllerCallOperationsRunImagineKateV1V1),
                        },
                    },
                    upscale: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunUpscaleV1V1),
                    },
                    objectDetection: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunObjectDetectionV1V1),
                    },
                    segmentAnything: {
                        embeddings: {
                            v1: callMethod(
                                (methods) => methods.callControllerCallOperationsRunSegmentAnythingEmbeddingsV1V1,
                            ),
                        },
                        mask: {
                            v1: callMethod((methods) => methods.callControllerCallOperationsRunSegmentAnythingMaskV1V1),
                        },
                    },
                    poseEstimation: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunPoseEstimationV1V1),
                    },
                    cut: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunCutV1V1),
                    },
                    crop: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunCropV1V1),
                    },
                    noise: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunNoiseV1V1),
                    },
                    composite: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunCompositeV1V1),
                    },
                    vton: {
                        gisele: {
                            v1: callMethod((methods) => methods.callControllerCallOperationsRunVtonGiseleV1V1),
                        },
                    },
                    negateImage: {
                        v1: callMethod((methods) => methods.callControllerCallOperationsRunNegateImageV1V1),
                    },
                },
                wait: callMethod((methods) => methods.callControllerCallOperationsWaitV1),
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
                items: {
                    add: callMethod((methods) => methods.callControllerCallStacksItemsAddV1),
                    remove: callMethod((methods) => methods.callControllerCallStacksItemsRemoveV1),
                },
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
        create: async (props: {
            metadata?: PipelineMetadata;
            template: PipelineType;
        }): Promise<PipelineEntityWithMetadata> =>
            api.call({
                run: (methods) =>
                    methods.pipelinesControllerCreatePipelineV1({
                        metadata: props.metadata,
                        tasks: props.template.tasks,
                    }),
            }),
        get: async (props: { id: string }): Promise<PipelineEntityWithMetadata | undefined> =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.pipelinesControllerGetPipelineV1(props.id),
            }),
        list: (
            props: { orderBy?: PipelinesControllerListPipelinesV1OrderByEnum; limit?: number; cursor?: string } = {},
        ): Promise<ListResponse<PipelineEntityWithMetadata>> =>
            api.call({
                run: (methods) => methods.pipelinesControllerListPipelinesV1(props.orderBy, props.limit, props.cursor),
                transform: transformToListResponse,
            }) as Promise<ListResponse<PipelineEntityWithMetadata>>,
        wait: async (props: { id: string; timeoutInSeconds?: number }): Promise<PipelineEntityWithMetadata> =>
            new Promise((resolve, reject) => {
                const initialDelay = 5000;
                const delay = 2000;

                let timeoutId: NodeJS.Timeout;
                const poll = async () => {
                    const pipeline = (await api.call({
                        run: (methods) => methods.pipelinesControllerGetPipelineV1(props.id),
                    })) as PipelineEntityWithMetadata;
                    if (pipeline.status === 'completed') return resolve(pipeline);
                    if (pipeline.status === 'failed') return resolve(pipeline);
                    timeoutId = setTimeout(poll, delay);
                };
                timeoutId = setTimeout(poll, initialDelay);
            }),
    };
};

export default pipelines;
