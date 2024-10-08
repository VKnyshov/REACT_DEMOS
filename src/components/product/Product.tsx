import React, {FC} from 'react';
import {IProductModel} from "../../models/IProductModel";

const Product: FC<IProductModel> = ({
                                        id,
                                        title,
                                        rating,
                                        sku,
                                        weight,
                                        shippingInformation,
                                        warrantyInformation,
                                        price,
                                        discountPercentage,
                                        stock,
                                        brand,
                                        description,
                                        category,
                                        availabilityStatus,
    tags,
    meta    ,
    reviews,
    returnPolicy,
    minimumOrderQuantity,
    images,
    thumbnail,
    dimensions,
                                    }) => {
    return (
        <>
            {id} {title} {rating} {description}
            {category} {availabilityStatus}{price}
            {discountPercentage}{stock}{brand}
            {sku}{weight}{warrantyInformation}{shippingInformation}
            {availabilityStatus}{tags}{meta}{reviews}{returnPolicy}{minimumOrderQuantity}
            {images}{thumbnail}{dimensions}
        </>
    );
};

export default Product;