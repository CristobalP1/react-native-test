import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useProductsContext } from "@/modules/products/context/ProductsContext";
import { styles } from "./infoProductStyles";

export default function InfoProductComponent() {
  const { productsDetail } = useProductsContext();

  if (!productsDetail) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>
          No se encontró información del producto.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: productsDetail.image }} style={styles.image} />
      <Text style={styles.title}>{productsDetail.title}</Text>
      <Text style={styles.price}>${productsDetail.price.toFixed(2)}</Text>
      <Text style={styles.description}>{productsDetail.description}</Text>
    </ScrollView>
  );
}
