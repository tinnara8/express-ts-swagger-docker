export interface Product {
    id: number;
    prodCode: string;
    barcode: string;
    nameEN: string;
    nameTH: string;
    stockAmt: string;
    weight: string;
    payType: string;
    prodType: string;
    pic: string;
    tag: string;
    prodDesc: string;
    unitcount: string;
    createdAt: Date;
}

export interface ProductCreateReq {
    email: string;
}

export interface ProductUpdateReq {
    createdAt?: Date;
    email: string;
}