import { ProductsModel } from "@/ddd/products/domain/models/ProductsModel";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}


interface ListProductsState {
    list: Product[];
}

const initialState: ListProductsState = {
    list: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductsModel[]>) => {
            state.list = action.payload.map(product => ({
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
            }));
        },
        clearProducts: (state) => {
            state.list = [];
        }
    }
});


export const { setProducts, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;