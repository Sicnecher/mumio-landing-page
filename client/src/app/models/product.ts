export interface ProductExplanationModel{
    _Id?:string;
    name:string;
    img:string;
    video:string;
    explain:string[];
    slogen:string;
    data_table:Table;
}

export interface Table{
    propertie: {
        hundred: string,
        twoHundred: string
    }
}


export interface ProductPerchusModel{
    _Id?:string;
    name:string;
    price:string;
}