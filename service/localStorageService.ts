import { StorageKeys } from "@/constants/StorageKeys";
import { AuthRequest } from "@/ddd/login/domain/dto/AuthRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

class LocalStorageService {
    static async getData(key: StorageKeys): Promise<unknown> {
        try {
            const data = await AsyncStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error("Error getting data from localStorage:", error);
            return null;
        }
    }

    static async setData(key: StorageKeys, value: unknown): Promise<void> {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error setting data in localStorage:", error);
        }
    }

    static async removeData(key: StorageKeys): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing data from localStorage:", error);
        }
    }

    static async getToken(): Promise<string> {
        try {
            const data = await AsyncStorage.getItem(StorageKeys.Token);
            return data ? JSON.parse(data) : "";
        } catch (error) {
            console.error("Error getting data from localStorage:", error);
            return "";
        }
    }

    static async getUserData(): Promise<AuthRequest | null> {
        try {
            const data = await AsyncStorage.getItem(StorageKeys.User);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error("Error getting data from localStorage:", error);
            return null;
        }
    }

    static async removeAllKeys(): Promise<void> {
        try {
            await AsyncStorage.removeItem(StorageKeys.Token);
            await AsyncStorage.removeItem(StorageKeys.User);
        } catch (error) {
            console.error("Error removing data from localStorage:", error);
        }
    }

}

export default LocalStorageService;