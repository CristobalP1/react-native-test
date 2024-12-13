import React from "react";
import ProductsComponent from "./ProductsComponent";
import useProductsList from "./hooks/useProductsList";
import { ProductsService } from "@/ddd/products/infrastructure/ProductsService";

export default function ProductsContainer() {
  const { isLoading, errorService } = useProductsList(new ProductsService());

  return (
    <>
      <ProductsComponent isLoading={isLoading} errorService={errorService} />
    </>
  );
}
