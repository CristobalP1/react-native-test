import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import ListProductsComponent from "./components/ListProducts/ListProductsComponent";
import { styles } from "./productsStyles";
import ErrorService from "@/components/common/ErrorService/ErrorService";

interface ProductsComponentProps {
  isLoading: boolean;
  errorService: Error | undefined | null;
  onRetry: () => void;
}

export default function ProductsComponent({
  isLoading,
  errorService,
  onRetry,
}: ProductsComponentProps) {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loading}
          />
          <Text style={styles.title}>Cargando...</Text>
        </>
      ) : errorService ? (
        <ErrorService onRetry={onRetry} />
      ) : (
        <>
          <Text style={styles.title}>Listado de productos</Text>
          <ListProductsComponent />
        </>
      )}
    </View>
  );
}
