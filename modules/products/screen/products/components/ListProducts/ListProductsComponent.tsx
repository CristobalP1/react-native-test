import { View, Text, FlatList } from "react-native";
import React from "react";
import { useProductsContext } from "@/modules/products/context/ProductsContext";
import ProductItemComponent from "../ProductItem/ProductItemComponent";

export default function ListProductsComponent() {
  const { products } = useProductsContext();

  console.log(products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItemComponent {...item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
