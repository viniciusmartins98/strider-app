import { ReactNode, useState } from "react";
import authContext from "./authContext";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  function login() {
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
