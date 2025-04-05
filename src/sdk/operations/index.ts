import axios, { AxiosResponse } from 'axios';
import {
    CompositeV1Input,
    CompositeV1Response,
    ContrastV1Input,
    ContrastV1Response,
    CropV1Input,
    CropV1Response,
    CutV1Input,
    CutV1Response,
    GiseleVtonV1Input,
    GPTV1Input,
    GptV1Response,
    HauteLindaV1Response,
    HauteNaomiV1Response,
    ImagineKateV1Response,
    KateImagineV1Input,
    KateInpaintV1Input,
    LindaHauteV1Input,
    NaomiHauteV1Input,
    NegateImageV1Input,
    NegateImageV1Response,
    ObjectDetectionV1Input,
    ObjectDetectionV1Response,
    OperationEntity,
    OperationEntityStatusEnum,
    OperationsApi,
    PoseEstimationV1Input,
    PoseEstimationV1Response,
    SegmentAnythingEmbeddingsV1Input,
    SegmentAnythingEmbeddingsV1Response,
    SegmentAnythingMaskV1Input,
    SegmentAnythingMaskV1Response,
    UpscaleV1Input,
    UpscaleV1Response,
    VtonGiseleV1Response,
} from '../../autogenerated';
import { ListProps, ListResponse, SDKOptions } from '../../types';
import { useAutogeneratedAPI } from '../api';
import { transformToListResponse } from '../transformers';
import { OperationsListener } from '../listeners';
import { AddMetadata } from '../utils';
import { OperationMetadata } from '../index';

type OperationEntityWithMetadata = AddMetadata<OperationEntity, OperationMetadata>;
type Waited<T extends OperationEntityWithMetadata> = T &
    (
        | { status: typeof OperationEntityStatusEnum.Failed; output: null }
        | { status: typeof OperationEntityStatusEnum.Pending; output: null }
        | { status: typeof OperationEntityStatusEnum.Finished; output: NonNullable<T['output']> }
    );

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const operations = (options: SDKOptions, operationsListener: OperationsListener) => {
    const api = useAutogeneratedAPI({ API: OperationsApi, options });

    const createOperation =
        <T, R>(
            callMethod: (methods: OperationsApi, props: { input: T; metadata?: any }) => Promise<AxiosResponse<R, any>>,
        ) =>
        (props: { input: T; metadata?: any }) =>
            api.call({ run: (methods: OperationsApi) => callMethod(methods, props) });

    return {
        run: {
            haute: {
                linda: {
                    v1: createOperation<LindaHauteV1Input, HauteLindaV1Response>((methods, props) =>
                        methods.operationsControllerRunHauteLindaV1V1(props),
                    ),
                },
                naomi: {
                    v1: createOperation<NaomiHauteV1Input, HauteNaomiV1Response>((methods, props) =>
                        methods.operationsControllerRunHauteNaomiV1V1(props),
                    ),
                },
            },
            inpaint: {
                kate: {
                    v1: createOperation<KateInpaintV1Input, ImagineKateV1Response>((methods, props) =>
                        methods.operationsControllerRunInpaintKateV1V1(props),
                    ),
                },
            },
            gpt: {
                v1: createOperation<GPTV1Input, GptV1Response>((methods, props) =>
                    methods.operationsControllerRunGptV1V1(props),
                ),
            },
            imagine: {
                kate: {
                    v1: createOperation<KateImagineV1Input, ImagineKateV1Response>((methods, props) =>
                        methods.operationsControllerRunImagineKateV1V1(props),
                    ),
                },
            },
            upscale: {
                v1: createOperation<UpscaleV1Input, UpscaleV1Response>((methods, props) =>
                    methods.operationsControllerRunUpscaleV1V1(props),
                ),
            },
            objectDetection: {
                v1: createOperation<ObjectDetectionV1Input, ObjectDetectionV1Response>((methods, props) =>
                    methods.operationsControllerRunObjectDetectionV1V1(props),
                ),
            },
            segmentAnything: {
                embeddings: {
                    v1: createOperation<SegmentAnythingEmbeddingsV1Input, SegmentAnythingEmbeddingsV1Response>(
                        (methods, props) => methods.operationsControllerRunSegmentAnythingEmbeddingsV1V1(props),
                    ),
                },
                mask: {
                    v1: createOperation<SegmentAnythingMaskV1Input, SegmentAnythingMaskV1Response>((methods, props) =>
                        methods.operationsControllerRunSegmentAnythingMaskV1V1(props),
                    ),
                },
            },
            poseEstimation: {
                v1: createOperation<PoseEstimationV1Input, PoseEstimationV1Response>((methods, props) =>
                    methods.operationsControllerRunPoseEstimationV1V1(props),
                ),
            },
            cut: {
                v1: createOperation<CutV1Input, CutV1Response>((methods, props) =>
                    methods.operationsControllerRunCutV1V1(props),
                ),
            },
            crop: {
                v1: createOperation<CropV1Input, CropV1Response>((methods, props) =>
                    methods.operationsControllerRunCropV1V1(props),
                ),
            },
            noise: {
                v1: createOperation<CropV1Input, CropV1Response>((methods, props) =>
                    methods.operationsControllerRunCropV1V1(props),
                ),
            },
            contrast: {
                v1: createOperation<ContrastV1Input, ContrastV1Response>((methods, props) =>
                    methods.operationsControllerRunContrastV1V1(props),
                ),
            },
            composite: {
                v1: createOperation<CompositeV1Input, CompositeV1Response>((methods, props) =>
                    methods.operationsControllerRunCompositeV1V1(props),
                ),
            },
            vton: {
                gisele: {
                    v1: createOperation<GiseleVtonV1Input, VtonGiseleV1Response>((methods, props) =>
                        methods.operationsControllerRunVtonGiseleV1V1(props),
                    ),
                },
            },
            negateImage: {
                v1: createOperation<NegateImageV1Input, NegateImageV1Response>((methods, props) =>
                    methods.operationsControllerRunNegateImageV1V1(props),
                ),
            },
        },
        get: (props: { id: string }): Promise<OperationEntityWithMetadata | undefined> =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.operationsControllerGetOperationV1(props.id),
            }),
        getMany: (props: { ids: string[] }): Promise<OperationEntityWithMetadata[]> =>
            api.call({
                run: (methods) => methods.operationsControllerGetOperationsV1({ ids: props.ids }),
            }),
        list: (props: ListProps = {}): Promise<ListResponse<OperationEntityWithMetadata>> =>
            api.call({
                run: (methods) =>
                    methods.operationsControllerListOperationsV1(props.orderBy, props.limit, props.cursor),
                transform: transformToListResponse,
            }) as Promise<ListResponse<OperationEntityWithMetadata>>,
        updateMetadata: async (props: { id: string; metadata?: any }): Promise<void> =>
            api.call({
                run: (methods) => methods.operationsControllerUpdateMetadataV1(props.id, { overwrite: props.metadata }),
            }),
        wait: async <T extends OperationEntityWithMetadata | { id: string }, N extends number | undefined = undefined>(
            props: T,
            timeoutMs?: N,
        ): Promise<
            | Waited<T extends OperationEntityWithMetadata ? T : OperationEntityWithMetadata>
            | (N extends undefined ? never : null)
        > => {
            type RT = T extends OperationEntityWithMetadata ? T : OperationEntityWithMetadata;
            const deadline: number | undefined = timeoutMs ? Date.now() + timeoutMs : undefined;
            const delay = operationsListener.websocketEnabled() ? 50 : 1000;

            const poll = async (id: string): Promise<Waited<RT> | null> => {
                const operation = await operationsListener.getOperation(id);
                if (operation?.status !== 'pending') return operation as Waited<RT>;
                return null;
            };

            while (!deadline || Date.now() < deadline) {
                const polled = await poll(props.id);
                if (polled) return polled;
                await sleep(delay);
            }

            //@ts-expect-error - can't be reached if timeoutMs is defined.
            return null;
        },
    };
};

export default operations;
