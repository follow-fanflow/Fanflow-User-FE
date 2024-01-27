import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { Header } from "../components/header";
import { SearchCafe } from "../pages/searchCafe";
import { SearchSchedule } from "../pages/searchSchedule";
import { Fanlog } from "../pages/fanlog";
import { IdolList } from "../pages/idolList";
import { Home } from "../pages/home";
import { Input } from "../components/common/input/Input";
import { ShowCafe } from "../pages/showCafe";
import Map from "../components/bitrthdayCafe/map";
import { Footer } from "../components/common/home/footer";
import { Circle_2 } from "../components/introduceIdol/circle2";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/header" element={<Header />} />
        <Route path="/map" element={<SearchCafe />} />
        <Route path="/map/show" element={<ShowCafe />}></Route>
        <Route path="/schedule" element={<SearchSchedule />} />
        <Route path="/fanlog" element={<Fanlog />} />
        <Route path="/introduce" element={<IdolList />} />
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Input />} />
        <Route path="/mapApi" element={<Map />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/circle_2" element={<Circle_2 />} />
      </Routes>
    </BrowserRouter>
  );
};
