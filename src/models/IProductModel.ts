

export interface IMetaModel {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string;
}

export interface IReviewModel {
    rating: number,
    comment:string,
    date: string,
    reviewerName: string,
    reviewerEmail: string

}


export interface IDimensionsModel {
    width: number,
    height: number,
    depth: number
}

export interface IProductModel {

    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand?: string,
    sku: string,
    weight: number,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    tags: string[];
    meta: IMetaModel;

    reviews: IReviewModel[];
    minimumOrderQuantity:number;
    returnPolicy:string;
    images:string[];
    thumbnail:string;
    dimensions:IDimensionsModel;
}