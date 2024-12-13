import { GetProductsResponse } from "../dto/GetProductsResponse";
import { ListProductsModel } from "../models/ListProductsModel";

export interface IProductsInterface {
    getProducts(): Promise<ListProductsModel>;
} 