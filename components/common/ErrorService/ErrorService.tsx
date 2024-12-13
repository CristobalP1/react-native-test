import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./errorServiceStyles";
import { Ionicons } from "@expo/vector-icons";

interface ErrorServiceProps {
  onRetry: () => void;
}

export default function ErrorService({ onRetry }: ErrorServiceProps) {
  return (
    <View style={styles.center}>
      <Ionicons name="close-circle" size={50} color="red" />
      <Text style={styles.errorText}>Lo sentimos, algo salió mal.</Text>
      <Text style={styles.errorDescription}>
        Por favor, verifica tu conexión o intenta de nuevo más tarde.
      </Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Reintentar</Text>
      </TouchableOpacity>
    </View>
  );
}
