import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import ListProductsComponent from "./components/ListProducts/ListProductsComponent";
import { styles } from "./productsStyles";

interface ProductsComponentProps {
  isLoading: boolean;
  errorService: Error | undefined | null;
}

export default function ProductsComponent({
  isLoading,
  errorService,
}: ProductsComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de productos</Text>

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loading}
        />
      ) : errorService ? (
        <Text style={styles.error}>Error: {errorService.message}</Text>
      ) : (
        <ListProductsComponent />
      )}
    </View>
  );
}
