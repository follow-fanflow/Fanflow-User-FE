import { Header } from "../components/header";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { SelectTag } from "../components/common/tag/selectTag";
import { Input } from "../components/common/input/Input";
import Button from "../components/common/button/Button";
import { useNavigate } from "react-router-dom";

export const WriteSchedule = () => {
  const navigate = useNavigate();
  const Submin = () => {
    alert("신청이 완료되었습니다");
    navigate("/schedule");
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
              />
              <Input
                label="장소를 입력해주세요"
                placeholder="ex) 홍대입구역 2번 출구"
                width="399px"
              />
            </First>
            <First>
              <Input type="date" width="399px" placeholder="날짜 선택" />
              <Input
                placeholder="해당 스케줄 멤버를 입력해주세요"
                width="399px"
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
