import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./productItemStyles";
import { useRouter } from "expo-router";
import { useProductsContext } from "@/modules/products/context/ProductsContext";

interface ProductItemComponentProps {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductItemComponent({
  id,
  image,
  title,
  category,
  description,
  price,
  rating,
}: ProductItemComponentProps) {
  const router = useRouter();
  const { setProductsDetail } = useProductsContext();

  const handlePress = (
    id: number,
    image: string,
    description: string,
    price: number,
    title: string
  ) => {
    setProductsDetail({
      image: image,
      description: description,
      price: price,
      title: title,
    });
    router.push(`/(products)/${id}` as any);
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={() => handlePress(id, image, description, price, title)}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <Text style={styles.rating}>
            ⭐ {rating.rate.toFixed(1)} ({rating.count})
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
