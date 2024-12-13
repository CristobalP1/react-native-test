import { StorageKeys } from "@/constants/StorageKeys";
import { AuthRequest } from "@/ddd/login/domain/dto/AuthRequest";
import { ILoginInterface } from "@/ddd/login/domain/interface/ILoginInterface";
import LocalStorageService from "@/service/localStorageService";
import { router } from "expo-router";
import { useCallback, useState } from "react";

const useAuth = (repository: ILoginInterface) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorService, setErrorService] = useState<Error | null>();


    const authenticateUser = async (username: string, password: string) => {

        setIsLoading(false);
        setErrorService(null);

        if (!username || !password || username.length <= 0 || password.length <= 0) {
            setErrorService(Error("Por favor, complete todos los campos."));
            return;
        }

        const request: AuthRequest = {
            username: username,
            password: password
        }

        try {
            setIsLoading(true);
            const response = await repository.signIn(request);
            await LocalStorageService.setData(StorageKeys.Token, response.token);
            await LocalStorageService.setData(StorageKeys.User, request);
            router.push("/(products)/index");
            return response;
        } catch (error: any) {
            console.error('Error Login', error);
            setErrorService(error);
        } finally {
            setIsLoading(false);
        }
    };


    return {
        isLoading,
        errorService,
        authenticateUser
    }

}

export default useAuth;