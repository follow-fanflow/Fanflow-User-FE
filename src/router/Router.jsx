import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signUp";
import { Header } from "../components/header";
import { SearchCafe } from "../pages/searchCafe";
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
import { Schedule } from "../pages/showSchedule";
import { NotFound } from "../pages/404";
import { WriteSchedule } from "../pages/writeSchedule";
import { ApplyButton } from "../components/common/button/applyButton";
import { WriteCafe } from "../pages/writeCafe";
import { AB6IX } from "../pages/introduce/ab6ix";
import { Seventeen } from "../pages/introduce/seventeen";
import { TxT } from "../pages/introduce/txt";
import { Lucy } from "../pages/introduce/lucy";
import { Rize } from "../pages/introduce/rize";
import { Itzy } from "../pages/introduce/itzy";
import { Nct127 } from "../pages/introduce/nct127";
import { Aespa } from "../pages/introduce/aespa";
import { Bts } from "../pages/introduce/bts";
import { Idle } from "../pages/introduce/idle";
import { Ive } from "../pages/introduce/ive";
import { Lesserafim } from "../pages/introduce/lesserafim";
import { MonstaX } from "../pages/introduce/monstax";
import { NctDream } from "../pages/introduce/nctdream";
import { Newjeans } from "../pages/introduce/newjeans";
import { TheBoyz } from "../pages/introduce/theboyz";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/header" element={<Header />} />
        <Route path="/map" element={<SearchCafe />} />
        <Route path="/map/show" element={<ShowCafe />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule/write" element={<WriteSchedule />} />
        <Route path="/fanlog" element={<Fanlog />} />
        <Route path="/fanlog/detail" element={<FanlogDetail />} />
        <Route path="/fanlog/write" element={<WriteLog />} />
        <Route path="/introduce" element={<IdolList />} />
        <Route path="/introduce/group" element={<Introduce />} />
        <Route path="/introduce/group/ab6ix" element={<AB6IX />} />
        <Route path="/introduce/group/seventeen" element={<Seventeen />} />
        <Route path="/introduce/group/txt" element={<TxT />} />
        <Route path="/introduce/group/lucy" element={<Lucy />} />
        <Route path="/introduce/group/rize" element={<Rize />} />
        <Route path="/introduce/group/itzy" element={<Itzy />} />
        <Route path="/introduce/group/nct127" element={<Nct127 />} />
        <Route path="/introduce/group/nctdream" element={<NctDream />} />
        <Route path="/introduce/group/ive" element={<Ive />} />
        <Route path="/introduce/group/idle" element={<Idle />} />
        <Route path="/introduce/group/aespa" element={<Aespa />} />
        <Route path="/introduce/group/bts" element={<Bts />} />
        <Route path="/introduce/group/lesserafim" element={<Lesserafim />} />
        <Route path="/introduce/group/monstax" element={<MonstaX />} />
        <Route path="/introduce/group/newjeans" element={<Newjeans />} />
        <Route path="/introduce/group/theboyz" element={<TheBoyz />} />
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
        <Route path="/applyBtn" element={<ApplyButton />} />
        <Route path="/map/write" element={<WriteCafe />} />
      </Routes>
    </BrowserRouter>
  );
};
