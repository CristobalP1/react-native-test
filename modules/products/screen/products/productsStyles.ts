import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    loading: {
        marginTop: 20,
    },
    error: {
        color: "red",
        fontSize: 16,
        marginTop: 20,
    },

    
})