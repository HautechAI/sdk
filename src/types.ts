export interface SDKOptions {
    authToken: () => string | Promise<string>;
    endpoint?: string;
    // default: true
    useWebsocket?: boolean;
    allowPollingFallback?: boolean;
}

export type ListProps = {
    cursor?: string;
    limit?: number;
    orderBy?: 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
};

export class ListResponse<T> extends Array<T> {
    nextCursor?: string;
}

// ------------------------------------------------------------
// AUTOGENERATED TYPES START
// ------------------------------------------------------------

export {
    AccountEntity,
    CollectionEntity,
    GroupEntity,
    ImageEntity,
    OperationEntity,
    PipelineDto,
    PipelinePreviewDto,
    ResourceEntity,
    StackEntity,
    StorageEntity,
} from './autogenerated/api';

// ------------------------------------------------------------
// AUTOGENERATED TYPES END
// ------------------------------------------------------------
