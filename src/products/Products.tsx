import React from 'react';
import './Products.css';
import {products} from "../data";
import {IProductModel, IReviewModel} from "../models/IProductModel";


const Products = () => {
    return (
        <div className="all">{
                    products.map(({
                                      id, title, rating, description,                                      category, availabilityStatus,
                                      price, discountPercentage,                                      stock, brand, sku, weight,
                                      warrantyInformation, shippingInformation,                                      tags, meta, returnPolicy, minimumOrderQuantity,
                                      reviews, images, thumbnail,dimensions
                                  }: IProductModel) =>
                        <div>
                            <div className="prod">
                                <h3>{id}. {title}</h3>
                                {/*<img src={images[0]}/>*/}
                                <img src={thumbnail} alt={thumbnail}/>
                                <p>Description: {description}</p>

                                <ul>
                                    <li>Raiting: {rating}</li>
                                    <li>Category: {category}</li>
                                    <li>AvailabilityStatus: {availabilityStatus}</li>
                                    <li>Price:{price}</li>
                                    <li>DiscountPercentage:{discountPercentage}</li>
                                    <li>stock:{stock}</li>
                                    <li>brand:{brand}</li>
                                    <li>sku:{sku}</li>
                                    <li>weight:{weight}</li>
                                    <li>warrantyInformation:{warrantyInformation}</li>
                                    <li>shippingInformation:{shippingInformation}</li>
                                    <li>availabilityStatus:{availabilityStatus}</li>
                                    <li>tags: {tags.join(', ')}</li>
                                    <li>createdAt:
                                        <ul>
                                            <li>{meta.createdAt}</li>
                                            <li>{meta.updatedAt}</li>
                                            <li>{meta.barcode}</li>
                                            <img src={meta.qrCode} alt={`qrCode`}/>
                                        </ul>

                                    </li>
                                    <li>returnPolicy:{returnPolicy}</li>
                                    <li>minimumOrderQuantity:{minimumOrderQuantity}</li>
                                    <li> Dimensions

                                        <ul>
                                            <li>width: {dimensions.width}</li>
                                            <li>depth: {dimensions.depth}</li>
                                            <li>height: {dimensions.height}</li>
                                        </ul>
                                    </li>
<hr/>

                                    <ul>reviews:{


                                        reviews.map(({
                                                         rating,
                                                         comment,
                                                         date,
                                                         reviewerName,
                                                         reviewerEmail
                                                     }: IReviewModel) =>
                                            <>
                                                <li>rating: {rating}</li>
                                                <li>comment: {comment}</li>
                                                <li>date: {date}</li>
                                                <li>reviewerName: {reviewerName}</li>
                                                <li>reviewerEmail: {reviewerEmail}</li>
                                                <hr/>

                                            </>
                                        )


                                    }
                                    </ul>


                                </ul>
                            </div>
                        </div>)
        }

        </div>
    );
};

export default Products;