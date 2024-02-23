import { Header } from "../components/header";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { SelectTag } from "../components/common/tag/selectTag";
import { Input } from "../components/common/input/Input";
import Button from "../components/common/button/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const WriteSchedule = () => {
  const [scheduleData, SetScheduleData] = useState({
    title: "",
    date: "",
    group: "",
    member: "",
    place: "",
  });

  React.useEffect(() => {
    console.log(scheduleData);
  }, [scheduleData]);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement> | string,
    name: string
  ) => {
    const inputValue = typeof e === "string" ? e : e.target.value;
    SetScheduleData({ ...scheduleData, [name]: inputValue });
    console.log(scheduleData);
  };

  const navigate = useNavigate();
  const Submin = () => {
    axios
      .post("베이스URL자리/user/schedule/write", { ...scheduleData })
      .then(() => {
        alert("신청이 완료되었습니다");
        navigate("/schedule");
        console.log({ ...scheduleData });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Wrap>
      <Header />
      <Content>
        <Title>스케줄을 신청해주세요</Title>
        <Select>
          <Essential>필수*</Essential>
          <General>선택</General>
        </Select>
        <FormWrap>
          <InputWrap>
            <First>
              <SelectTag />
              <Input
                label="스케줄명을 입력해주세요"
                placeholder="ex) 빌드업"
                width="399px"
                onChange={(value) => onChangeInput(value, "title")}
                name="title"
              />
              <Input
                label="장소를 입력해주세요"
                placeholder="ex) 홍대입구역 2번 출구"
                width="399px"
                onChange={(value) => onChangeInput(value, "place")}
                name="place"
              />
            </First>
            <First>
              <Input
                type="date"
                width="399px"
                placeholder="날짜 선택"
                onChange={(value) => onChangeInput(value, "date")}
                name="date"
              />
              <Input
                placeholder="해당 스케줄 멤버를 입력해주세요"
                width="399px"
                onChange={(value) => onChangeInput(value, "member")}
                name="member"
              />
            </First>
          </InputWrap>
          <Button content="신청하기" onClick={Submin} />
        </FormWrap>
      </Content>
    </Wrap>
  );
};

const Select = styled.div`
  display: flex;
  gap: 640px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

const First = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 338px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
  height: 91vh;
`;

const Content = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 64px 100px;
  border: 1px solid ${theme.color.gray__1};
  border-radius: 50px;
`;

const Title = styled.p`
  font-size: 28px;
`;

const Essential = styled.p`
  color: ${theme.color.error};
  font-size: 16px;
`;

const General = styled.p`
  font-size: 16px;
`;
