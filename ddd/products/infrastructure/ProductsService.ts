import apiFakeStore from "@/api/apiFakeStore";
import { GetProductsResponse } from "../domain/dto/GetProductsResponse";
import { IProductsInterface } from "../domain/interface/IProductsInterface";
import { ListProductsModel } from "../domain/models/ListProductsModel";
import { ProductsModel } from "../domain/models/ProductsModel";

export class ProductsService implements IProductsInterface {
    async getProducts(): Promise<ListProductsModel> {
        try {
            const response = await apiFakeStore.get<GetProductsResponse[]>(`/products`);

            const products = response.data.map((product) =>
                new ProductsModel(
                    product.id,
                    product.title,
                    product.price,
                    product.description,
                    product.category,
                    product.image,
                    product.rating
                )
            );

            return new ListProductsModel(products);
        } catch (error: any) {
            console.log(error);
            if (error.response) {
                throw new Error(`${error.response.data}`);
            } else if (error.request) {
                console.error('no response from server');
                throw new Error('Sin respuesta del servidor. Vuelva a intentarlo mas tarde');
            } else {
                console.error('request setup error', error.message);
                throw new Error('Error en la configuración de la solicitud. Vuelva a intentarlo mas tarde');
            }

        }
    }

}