import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { AutoInput } from "../components/common/input/AutoInput";
import Logo from "../assets/imgs/logo1.svg";
import textlogo from "../assets/imgs/textLogo.svg";
import DaySchedule from "../components/schedule/daySchedule";
import { MyCalender } from "../components/calendar/calendar";
import { theme } from "../styles/theme";

interface ScheduleData {
  [date: string]: {
    [group: string]: string[];
  };
}

export const Schedule = () => {
  const suggest = ["ab6ix", "react", "ff", "avre", "ateez"];

  const scheduleData: ScheduleData = {
    "2024년01월31일": {
      ab6ix: ["18 : 00 ) THE FUTURE IS OURS : FOUND", "라디오", "엠카"],
    },
    "2024년02월01일": {
      ab6ix: ["스케줄1", "스케줄2"],
      react: ["스터디2", "코딩2"],
    },
  };

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}년${month}월${day}일`;
  };

  const handleDateChange = (date: Date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  const markedDates = Object.keys(scheduleData);
  console.log(markedDates);

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
        <MyCalender onClickDay={handleDateChange} markedDates={markedDates} />
        {selectedDate && scheduleData[selectedDate] && (
          <DaySchedule
            date={selectedDate}
            group="ab6ix"
            schedule={scheduleData[selectedDate]["ab6ix"]}
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 172px;

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
