import ICredentials from "./credentials.interface";

export default interface IAuthContext {
    authenticated: boolean;
    login: (credentials: ICredentials) => Promise<boolean>;
    logout: () => void;
    errorMessage?: string;
}