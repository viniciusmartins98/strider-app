import axios, { AxiosError } from "axios";
import config from "../../config";
import AuthRequest from "./interfaces/authRequest.interface";
import AuthResponse from "./interfaces/authResponse.interface";
import AuthResult from "./interfaces/authResult.interface";

export default class AuthService {
    private _baseUrl = config.apiBaseUrl.endsWith('/') ? config.apiBaseUrl : `${config.apiBaseUrl}/`;

    async authenticate(authRequest: AuthRequest): Promise<AuthResult> {
        try {
            const response = await axios.post<AuthResponse>(`${this._baseUrl}auth`, authRequest);
            axios.defaults.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
            return {
                message: '',
                success: true
            }
        } catch (e) {
            const result: AuthResult = {
                message: 'An unexpected error ocurred, try again in a few minutes.',
                success: false
            }
            if (!axios.isAxiosError(e)) {
                return result;
            }
            const error = e as AxiosError;
            if ([401, 403].includes((error as AxiosError)?.response?.status || 0)) {
                result.message = 'Invalid username or password.';
            }
            return result;
        }
    }
}