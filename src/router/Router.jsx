import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Header } from "../components/header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};
