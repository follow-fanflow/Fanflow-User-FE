import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { AutoInput } from "../components/common/input/AutoInput";
import Logo from "../assets/imgs/logo1.svg";
import textlogo from "../assets/imgs/textLogo.svg";
import { DaySchedule } from "../components/schedule/daySchedule";
import axios from "axios";
import { MyCalender } from "../components/calendar/calendar";
import { theme } from "../styles/theme";
import { ApplyButton } from "../components/common/button/applyButton";

export const Schedule = () => {
  const suggest = ["ab6ix", "react", "ff", "avre", "ateez"];

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [schedules, setSchedules] = useState<any[]>([]);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}년${month}월${day}일`;
  };

  React.useEffect(() => {
    console.log(schedules);
  }, [schedules]);

  const handleDateChange = (date: Date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  const handleGroupSelect = (selectedGroup: string) => {
    console.log(`Selected Group: ${selectedGroup}`);
    axios
      .get(`/schedule?group=${selectedGroup}`)
      .then((response) => {
        const scheduleList = response.data.scheduleList;

        const updatedSchedules = scheduleList.map((schedule: any) => {
          return {
            id: schedule.id,
            title: schedule.title,
            date: schedule.date,
            group: schedule.group,
            member: schedule.member,
            place: schedule.place,
          };
        });

        setSelectedGroup(selectedGroup);
        setSchedules(updatedSchedules);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const markedDates: string[] = schedules.map((schedule) => schedule.date);
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
            onSelect={handleGroupSelect}
          />
        </Top>
        <img src={textlogo} alt="텍스트 로고" />
      </SearchWarp>
      <ContentWrapper>
        <Content>
          <Fix>
            <MyCalender
              onClickDay={handleDateChange}
              markedDates={markedDates}
            />

            {selectedDate &&
              selectedGroup &&
              schedules.find((schedule) => schedule.date === selectedDate) && (
                <DaySchedule
                  date={selectedDate}
                  group={selectedGroup}
                  schedule={
                    schedules.find(
                      (schedule) => schedule.date === selectedDate
                    )![selectedGroup]
                  }
                />
              )}
          </Fix>
          <ApplyButton content="스케줄 신청하기" linkTo="/schedule/write" />
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};
const Fix = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 75px;
  height: 91vh;
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
