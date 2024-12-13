import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    errorText: {
        color: "red",
        fontSize: 18,
        textAlign: "center",
        marginTop:15
    },
    retryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: "#007BFF",
    },
    retryButtonText: {
        color: "#FFF",
        fontSize: 16,
    },
    errorDescription: {
        fontSize: 13,
        color: '#D32F2F',
        textAlign: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
});