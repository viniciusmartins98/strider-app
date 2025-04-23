import { createContext } from "react";
import IAuthContext from "./interfaces/authContext.interface";

const authContext = createContext<IAuthContext>({
    authenticated: false,
    login: async () => false,
    logout: () => { },
});
export default authContext;
