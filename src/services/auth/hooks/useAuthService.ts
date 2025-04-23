import { useMemo } from "react";
import AuthService from "..";

export default function useAuthService() {
    const sAuth = useMemo(() => new AuthService(), []);
    return sAuth;
}