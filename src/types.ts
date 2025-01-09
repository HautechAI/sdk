export interface ClientSDKOptions {
    authToken: () => string | Promise<string>;
    endpoint?: string;
}

export type ListProps = {
    cursor?: string;
    limit?: number;
    orderBy?: 'createdAt_ASC' | 'createdAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
};
