import { ReactNode, useState } from "react";
import authContext from "./authContext";
import ICredentials from "./interfaces/credentials.interface";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  function login(credentials: ICredentials) {
    console.log(credentials);
    setAuthenticated(true);
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <authContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
