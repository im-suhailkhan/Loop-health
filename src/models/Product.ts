import mongoose from "mongoose";
export type ProductDocument = mongoose.Document & {
    "landingPageUrl": string;
    "productId": string;
    "product": string;
    "productName": string;
    "rating": number,
    "ratingCount": number,
    "discount": number,
    "brand": string;
    "searchImage": string;
    "effectiveDiscountPercentageAfterTax": number,
    "effectiveDiscountAmountAfterTax": number,
    "sizes": string;
    "gender": string;
    "primaryColour": string;
    "discountLabel": string;
    "discountDisplayLabel": string;
    "additionalInfo": string;
    "category": string;
    "mrp": number,
    "price": number,
    "colorVariantAvailable": false,
    "discountType": string;
    "catalogDate": string;
    "season": string;
    "year": string;
};

const productSchema = new mongoose.Schema<ProductDocument>(
    {
        "landingPageUrl": String,
        "productId": String,
        "product": String,
        "productName": String,
        "rating": Number,
        "ratingCount": Number,
        "discount": Number,
        "brand": String,
        "searchImage": String,
        "effectiveDiscountPercentageAfterTax": Number,
        "effectiveDiscountAmountAfterTax": Number,
        "sizes": String,
        "gender": String,
        "primaryColour": String,
        "discountLabel": String,
        "discountDisplayLabel": String,
        "additionalInfo": String,
        "category": String,
        "mrp": Number,
        "price": Number,
        "colorVariantAvailable": false,
        "discountType": String,
        "catalogDate": String,
        "season": String,
        "year": String,
    },
    { timestamps: true },
);


export const Product = mongoose.model<ProductDocument>("Product", productSchema);
