import { AuthRequest } from "../domain/dto/AuthRequest";
import { AuthResponse } from "../domain/dto/AuthResponse";
import { ILoginInterface } from "../domain/interface/ILoginInterface";

export class signIn {
    constructor(
        private repository: ILoginInterface
    ) { }

    async authUseCase(request: AuthRequest): Promise<AuthResponse> {
        return await this.repository.signIn(request);
    }
}