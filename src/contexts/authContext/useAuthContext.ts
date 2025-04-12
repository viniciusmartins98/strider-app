import { useContext } from "react";
import authContext from "./authContext";

export default function useAuthContext() {
    return useContext(authContext);
}