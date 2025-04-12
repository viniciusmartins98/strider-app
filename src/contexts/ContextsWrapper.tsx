import { ReactNode } from "react";
import { AuthContextProvider } from "./authContext";

type ContextsWrapperProps = {
  children: ReactNode;
};

export default function ContextsWrapper({ children }: ContextsWrapperProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
