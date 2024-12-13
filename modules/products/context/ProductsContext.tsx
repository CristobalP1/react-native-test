import { ProductDetailModel } from "@/ddd/products/domain/models/ProductDetailModel";
import { ProductsModel } from "@/ddd/products/domain/models/ProductsModel";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface ProductsContextType {
  products: ProductsModel[];
  setProducts: (products: ProductsModel[]) => void;
  productsDetail: ProductDetailModel | null;
  setProductsDetail: (product: ProductDetailModel | null) => void;
}

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
  productsDetail: null,
  setProductsDetail: () => {},
});

export const ProductsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductsModel[]>([]);
  const [productsDetail, setProductsDetail] = useState<ProductDetailModel | null>(
    null
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        productsDetail,
        setProductsDetail,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
