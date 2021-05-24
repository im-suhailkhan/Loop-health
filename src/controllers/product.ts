import { Request, Response } from "express";
import { Product } from "../models/Product";
import axios from "axios";
import { filter } from "bluebird";

/**
 * Home page.
 * @route GET /
 */
export const insertProductsToCollection = async (req: Request, res: Response) => {
    const result = await axios.get("https://demo7242716.mockable.io/products");
    const response = await Product.insertMany(result.data.products);
    return res.status(200).send(response);
};


// baseUrl/products?gender=Male&brand=Kelvin&priceLow=100&pricehigh=100000
// http://localhost:3000/products?brand=Ahalyaa&categories=Kurta%20Sets
export const getFilteredProduct = async (req: Request, res: Response) => {
    const filters = req.query; // {gender="Male", brand="Kelvin"}
    const query = {} as any;

    if(filters.gender) {
        query.gender = filters.gender;
    }


    if(filters.brand) {
        query.brand = { $in: filters.brand };
    }


    if(filters.priceLow) {
        query.price = { $gte: filters.priceLow };
    }

    if(filters.priceHigh) {
        query.price = { $lte: filters.priceHigh };
    }

    // user request -> [A, B, C, D]
    // product -> product1(A), product2(B)
    if(filters.categories) {
        query.category = { $in: filters.categories };
    }

    if(filters.searchterm){

        const expr = new RegExp(filters.searchterm as string);
        query.productName  = { $regex: expr, $options: "i" };
        // query.productName={$regex:req.query.dsearch};
    }
    const filteredProducts = await Product.find(query);


    return res.status(200).json(filteredProducts);

};

// export const getAllFilters = async (req: Request, res: Response) => {


//     return res.status(200).send(response);
// };

// export const searchProducts = async (req: Request, res: Response) => {


// Product.find({productName:{'$regex':req.query.dsearch}});
//     return res.status(200).send(response);
// };

