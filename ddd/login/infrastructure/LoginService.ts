import apiFakeStore from "@/api/apiFakeStore";
import { ILoginInterface } from "../domain/interface/ILoginInterface";
import { AuthRequest } from "../domain/dto/AuthRequest";
import { AuthResponse } from "../domain/dto/AuthResponse";

export class LoginService implements ILoginInterface {
    async signIn(request: AuthRequest): Promise<AuthResponse> {
        try {
            const response = await apiFakeStore.post<AuthResponse>(`/auth/login`, request);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                throw new Error(`${error.response.data}`);
            } else if (error.request) {
                console.error('no response from server');
                throw new Error('Sin respuesta del servidor. Vuelva a intentarlo mas tarde');
            } else {
                console.error('request setup error', error.message);
                throw new Error('Error en la configuración de la solicitud. Vuelva a intentarlo mas tarde');
            }

        }
    }

}