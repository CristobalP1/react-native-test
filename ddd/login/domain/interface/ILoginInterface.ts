import { AuthRequest } from "../dto/AuthRequest";
import { AuthResponse } from "../dto/AuthResponse";

export interface ILoginInterface {
    signIn(request: AuthRequest): Promise<AuthResponse>
}