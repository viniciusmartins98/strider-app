export default interface IAuthContext {
    authenticated: boolean;
    login: () => void;
    logout: () => void;
}