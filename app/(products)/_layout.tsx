import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { signOut } from "@/utils/functions/signOut";
import { useDispatch } from "react-redux";

export default function ProductsLayout() {


  const dispatch = useDispatch();
  const handlePress = () => {
    Alert.alert(
      "Información",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "OK", onPress: () => signOut(dispatch) },
      ],
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
