import { AxiosResponse } from 'axios';
import createOperationUpdater from './updater';
import {
    CompositeV1Input,
    CutV1Input,
    GPTV1Input,
    KateImagineV1Input,
    KateInpaintV1Input,
    LindaHauteV1Input,
    NaomiHauteV1Input,
    ObjectDetectionV1Input,
    OperationEntity,
    OperationsApi,
    PoseEstimationV1Input,
    SegmentAnythingEmbeddingsV1Input,
    SegmentAnythingMaskV1Input,
    UpscaleV1Input,
} from '../../autogenerated';
import { ListProps, ListResponse, SDKOptions } from '../../types';
import { useAutogeneratedAPI } from '../api';
import { transformToListResponse } from '../transformers';

const operations = (options: SDKOptions) => {
    const api = useAutogeneratedAPI({ API: OperationsApi, options });
    const updates = createOperationUpdater(options);

    const createOperation =
        <T>(
            callMethod: (
                methods: OperationsApi,
                props: { input: T; metadata?: any },
            ) => Promise<AxiosResponse<OperationEntity, any>>,
        ) =>
        (props: { input: T; metadata?: any }) =>
            api.call({ run: (methods: OperationsApi) => callMethod(methods, props) });

    return {
        create: {
            composite: {
                v1: createOperation<CompositeV1Input>((methods, props) =>
                    methods.operationsControllerRunCompositeV1V1(props),
                ),
            },
            cut: {
                v1: createOperation<CutV1Input>((methods, props) => methods.operationsControllerRunCutV1V1(props)),
            },
            detect: {
                v1: createOperation<ObjectDetectionV1Input>((methods, props) =>
                    methods.operationsControllerRunObjectDetectionV1V1(props),
                ),
            },
            estimatePose: {
                v1: createOperation<PoseEstimationV1Input>((methods, props) =>
                    methods.operationsControllerRunPoseEstimationV1V1(props),
                ),
            },
            haute: {
                linda: {
                    v1: createOperation<LindaHauteV1Input>((methods, props) =>
                        methods.operationsControllerRunHauteLindaV1V1(props),
                    ),
                },
                naomi: {
                    v1: createOperation<NaomiHauteV1Input>((methods, props) =>
                        methods.operationsControllerRunHauteNaomiV1V1(props),
                    ),
                },
            },
            gpt: {
                v1: createOperation<GPTV1Input>((methods, props) => methods.operationsControllerRunGptV1V1(props)),
            },
            imagine: {
                kate: {
                    v1: createOperation<KateImagineV1Input>((methods, props) =>
                        methods.operationsControllerRunImagineKateV1V1(props),
                    ),
                },
            },
            inpaint: {
                kate: {
                    v1: createOperation<KateInpaintV1Input>((methods, props) =>
                        methods.operationsControllerRunInpaintKateV1V1(props),
                    ),
                },
            },
            segmentEmbeddings: {
                v1: createOperation<SegmentAnythingEmbeddingsV1Input>((methods, props) =>
                    methods.operationsControllerRunSegmentAnythingEmbeddingsV1V1(props),
                ),
            },
            segmentMask: {
                v1: createOperation<SegmentAnythingMaskV1Input>((methods, props) =>
                    methods.operationsControllerRunSegmentAnythingMaskV1V1(props),
                ),
            },
            upscale: {
                v1: createOperation<UpscaleV1Input>((methods, props) =>
                    methods.operationsControllerRunUpscaleV1V1(props),
                ),
            },
        },
        get: (props: { id: string }): Promise<OperationEntity | undefined> =>
            api.callWithReturningUndefinedOn404({
                run: (methods) => methods.operationsControllerGetOperationV1(props.id),
            }),
        getMany: (props: { ids: string[] }): Promise<OperationEntity[]> =>
            api.call({
                run: (methods) => methods.operationsControllerGetOperationsV1({ ids: props.ids }),
            }),
        list: (props: ListProps = {}): Promise<ListResponse<OperationEntity>> =>
            api.call({
                run: (methods) =>
                    methods.operationsControllerListOperationsV1(props.orderBy, props.limit, props.cursor),
                transform: transformToListResponse,
            }),
        updateMetadata: async (props: { id: string; metadata?: any }): Promise<void> =>
            api.call({
                run: (methods) => methods.operationsControllerUpdateMetadataV1(props.id, { overwrite: props.metadata }),
            }),
        updates,
        wait: async (props: { id: string; timeoutInSeconds?: number }): Promise<OperationEntity> =>
            new Promise((resolve, reject) => {
                const initialDelay = 5000;
                const delay = 2000;

                const listenToOperation = (operation: OperationEntity) => {
                    if (operation.id === props.id) {
                        clearTimeout(timeoutId);
                        resolve(operation);
                        updates.unsubscribe({ callback: listenToOperation });
                    }
                };
                updates.subscribe({ callback: listenToOperation });

                let timeoutId: NodeJS.Timeout;
                const poll = async () => {
                    const operation = await api.call({
                        run: (methods) => methods.operationsControllerGetOperationV1(props.id),
                    });
                    if (operation.status !== 'pending') return resolve(operation);
                    timeoutId = setTimeout(poll, delay);
                    updates.unsubscribe({ callback: listenToOperation });
                };
                timeoutId = setTimeout(poll, initialDelay);
            }),
    };
};

export default operations;
