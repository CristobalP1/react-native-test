import { ProductsModel } from "./ProductsModel";

export class ListProductsModel {
    constructor(
        public readonly list: ProductsModel[]
    ) { }
}