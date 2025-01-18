import { ListResponse } from '../types';

export const transformToListResponse = <T>(response: {
    data: T[];
    pageInfo: { nextCursor: string };
}): ListResponse<T> => {
    const array = [...response.data] as ListResponse<T>;
    array['nextCursor'] = response.pageInfo.nextCursor;
    return array;
};
