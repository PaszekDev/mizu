export interface SearchRequest {
    value: string;
    pageSize: number;
    pageNumber: number;
    params: Param[];
}


export interface Param {
    value: string;
    fieldName: string;
}