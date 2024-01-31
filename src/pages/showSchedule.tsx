import { MyCalender } from "../components/calendar/calendar";
import { ScheduleSearchComp } from "../components/schedule/scheduleSearchComp";
import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { Input } from "../components/common/input/Input";
import { AutoInput } from "../components/common/input/AutoInput";
import Logo from "../assets/imgs/logo1.svg";
import { theme } from "../styles/theme";
import textlogo from "../assets/imgs/textLogo.svg";

export const Schedule = () => {
  const suggest = ["ab6ix", "react", "ff", "avre", "ateez"];
  return (
    <Wrapper>
      <Header />
      <SearchWarp>
        <Top>
          <img src={Logo} alt="" width={80} />
          <AutoInput
            suggestions={suggest}
            placeholder="그룹명"
            label="스케줄이 궁금한 아이돌"
          />
        </Top>
        <img src={textlogo} />
      </SearchWarp>
      <ContentWrapper>
        <MyCalender />
      </ContentWrapper>
    </Wrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 75px;
`;

const SearchWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 55px 55px 55px;
  border-right: 1px solid ${theme.color.gray__1};
  justify-content: space-between;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
`;
