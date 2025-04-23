import { ReactNode, useState } from "react";
import authContext from "./authContext";
import ICredentials from "./interfaces/credentials.interface";
import useAuthService from "../../services/auth/hooks/useAuthService";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const sAuth = useAuthService();

  async function login(credentials: ICredentials) {
    const authResult = await sAuth.authenticate({
      email: credentials.username,
      password: credentials.password
    });
    if (!authResult.success) {
      setErrorMessage(authResult.message)
      return false;
    }
    setErrorMessage(undefined);
    setAuthenticated(true);
    return true;
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <authContext.Provider value={{ authenticated, login, logout, errorMessage }}>
      {children}
    </authContext.Provider>
  );
}
