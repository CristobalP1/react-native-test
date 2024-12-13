import { IProductsInterface } from "@/ddd/products/domain/interface/IProductsInterface";
import { useProductsContext } from "@/modules/products/context/ProductsContext";
import { useCallback, useEffect, useState } from "react";

const useProductsList = (repository: IProductsInterface) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorService, setErrorService] = useState<Error | null>();
    const { setProducts } = useProductsContext();

    const getListProducts = useCallback(async () => {
        setIsLoading(true);
        setErrorService(null);

        try {
            const response = await repository.getProducts();
            setProducts(response.list);
        } catch (error: any) {
            console.error('Error Products', error);
            setErrorService(error);
        } finally {
            setIsLoading(false);
        }
    }, [repository]);

    useEffect(() => {
        getListProducts();
    }, []);


    return {
        isLoading,
        errorService,
    }

}

export default useProductsList;