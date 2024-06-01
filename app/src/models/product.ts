export interface ProductExplanationModel{
    _Id?:string;
    name:string;
    img:Buffer;
    video:Buffer;
    explain:string[];
    slogen:string;
    data_table:string;
}

export interface ProductPerchusModel{
    _Id?:string;
    name:string;
    price:string;
}