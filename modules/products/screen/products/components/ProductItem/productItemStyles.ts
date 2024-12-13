import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      },
      cardPressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
      },
      image: {
        width: "100%",
        height: 180,
      },
      content: {
        padding: 16,
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
      },
      category: {
        fontSize: 14,
        color: "#888",
        marginBottom: 8,
      },
      description: {
        fontSize: 12,
        color: "#555",
        marginBottom: 16,
        lineHeight: 18,
      },
      footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#27ae60",
      },
      rating: {
        fontSize: 14,
        color: "#f1c40f",
      },
})