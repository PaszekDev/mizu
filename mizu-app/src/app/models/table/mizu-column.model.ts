export interface MizuColumn {
    fieldName: string;
    columnName: string;
    width?: number;
    isHidden?: boolean;
    isInnerHtml?: boolean;
    innerHtml?:string;
    cell: any;
}