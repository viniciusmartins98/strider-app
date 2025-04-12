import { createContext } from "react";
import IAuthContext from "./interfaces/authContext.interface";

const authContext = createContext<IAuthContext>({
    authenticated: false,
    login: () => { },
    logout: () => { },
});
export default authContext;
