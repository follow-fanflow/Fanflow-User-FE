import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { Header } from "../components/header";
import { SearchCafe } from "../pages/searchCafe";
import { SearchSchedule } from "../pages/searchSchedule";
import { Fanlog } from "../pages/fanlog";
import { IdolList } from "../pages/idolList";
import { Introduce } from "../pages/introduce";
import { Home } from "../pages/home";
import { Input } from "../components/common/input/Input";
import { ShowCafe } from "../pages/showCafe";
import Map from "../components/bitrthdayCafe/map";
import { Footer } from "../components/common/home/footer";
import { Circles } from "../components/introduceIdol/circle2";
import { IntroduceComp } from "../components/introduceIdol/introduceComp";
import { Profile } from "../pages/Profile";
import { SelectTag } from "../components/common/tag/selectTag";
import { FanlogDetail } from "../pages/fanlogDetail";
import { WriteLog } from "../pages/writeFanlog";
import { SearchTag } from "../components/common/tag/searchTag";
import { DeleteModal } from "../components/common/modal/deleteModal";
import { ChangeModal } from "../components/common/modal/changeModal";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/header" element={<Header />} />
        <Route path="/map" element={<SearchCafe />} />
        <Route path="/map/show" element={<ShowCafe />} />
        <Route path="/schedule" element={<SearchSchedule />} />
        <Route path="/fanlog" element={<Fanlog />} />
        <Route path="/fanlog/detail" element={<FanlogDetail />} />
        <Route path="/fanlog/write" element={<WriteLog />} />
        <Route path="/introduce" element={<IdolList />} />
        <Route path="/introduce/group" element={<Introduce />} />
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<Input />} />
        <Route path="/mapApi" element={<Map />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/circles" element={<Circles />} />
        <Route path="/introduceComp" element={<IntroduceComp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/selectTag" element={<SelectTag />} />
        <Route path="/searchTag" element={<SearchTag />} />
        <Route path="/deleteModal" element={<DeleteModal />} />
        <Route path="/changeModal" element={<ChangeModal />} />
      </Routes>
    </BrowserRouter>
  );
};
