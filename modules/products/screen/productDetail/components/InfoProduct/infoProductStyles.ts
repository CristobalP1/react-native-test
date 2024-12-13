import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f9f9f9",
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center",
    },
    price: {
        fontSize: 20,
        fontWeight: "600",
        color: "#4CAF50",
        marginBottom: 15,
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        color: "#444",
        textAlign: "justify",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
    },
    message: {
        fontSize: 18,
        color: "#888",
    },
})