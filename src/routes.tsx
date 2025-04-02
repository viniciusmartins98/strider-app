import { BrowserRouter, Route, Routes } from "react-router";
import HomePageComponent from "./pages/HomePageComponent";
import LoginPageComponent from "./pages/LoginPageComponent";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePageComponent />} />
        <Route path="/login" element={<LoginPageComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
