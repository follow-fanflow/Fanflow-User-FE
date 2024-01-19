import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "../pages/signUp";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
    </BrowserRouter>
}