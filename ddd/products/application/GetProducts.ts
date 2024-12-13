import { IProductsInterface } from "../domain/interface/IProductsInterface";
import { ListProductsModel } from "../domain/models/ListProductsModel";

export class GetProducts {
    constructor(
        private repository: IProductsInterface
    ) { }

    async getProductsUseCase(): Promise<ListProductsModel> {
        return await this.repository.getProducts();
    }
}