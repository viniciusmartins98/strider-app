import { BrowserRouter, Route, Routes } from "react-router";
import HomePageComponent from "../pages/HomePageComponent";
import LoginPageComponent from "../pages/LoginPageComponent";
import ProtectedRoutes from "./components/ProtectedRoutes";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPageComponent />} />
        
        {/* Private routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePageComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
