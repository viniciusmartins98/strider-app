import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../contexts/authContext";

export default function ProtectedRoutes() {
  const authContext = useAuthContext();
  return authContext.authenticated ? <Outlet /> : <Navigate to="/login" />
}
