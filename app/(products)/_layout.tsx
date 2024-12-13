import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProductsLayout() {

  const handlePress = () => {
    Alert.alert(
      "Información",
      "Has presionado el botón.",
      [{ text: "OK", onPress: () => console.log("Botón presionado") }],
      { cancelable: true }
    );
  };

  return (
    <Stack initialRouteName="products">
      <Stack.Screen
        name="products"
        options={{
          title: "Home",
          headerRight: () => (
            <TouchableOpacity onPress={handlePress}>
              <Ionicons name="person-circle" size={45} color="blue" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Producto",
        }}
      />
    </Stack>
  );
}
