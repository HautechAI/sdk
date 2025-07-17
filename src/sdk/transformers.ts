import { ListResponse } from '../types';

export const transformToListResponse = <T>(response: {
    data: T[];
    pageInfo: { nextCursor?: string };
}): ListResponse<T> => {
    const array = new ListResponse<T>(...response.data);
    array.nextCursor = response.pageInfo.nextCursor;
    return array;
};
