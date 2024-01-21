import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { Header } from "../components/header";
import { SearchCafe } from "../pages/searchCafe";
import { SearchSchedule } from "../pages/searchSchedule";
import { Fanlog } from "../pages/fanlog";
import { IdolList } from "../pages/idolList";
import { Home } from "../pages/home";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/header" element={<Header />} />
        <Route path="/map" element={<SearchCafe />} />
        <Route path="/schedule" element={<SearchSchedule />} />
        <Route path="/fanlog" element={<Fanlog />} />
        <Route path="/introduce" element={<IdolList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
