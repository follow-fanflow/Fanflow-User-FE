import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { AutoInput } from "../components/common/input/AutoInput";
import Logo from "../assets/imgs/logo1.svg";
import textlogo from "../assets/imgs/textLogo.svg";
import { theme } from "../styles/theme";
import { ApplyButton } from "../components/common/button/applyButton";

export const SearchCafe = () => {
  const suggest = ["세븐틴", "react", "ff", "avre", "ateez"];

  const handleGroupSelect = (selectedGroup: string) => {
    // Perform actions when a group is selected, e.g., send a request
    console.log(`Selected Group: ${selectedGroup}`);
  };

  return (
    <Wrapper>
      <Header />
      <SearchWarp>
        <Top>
          <img src={Logo} alt="" width={80} />
          <AutoInput
            suggestions={suggest}
            placeholder="멤버명"
            label="내 최애 생일카페가 어디어디에 있나?"
            onSelect={handleGroupSelect}
          />
        </Top>
        <img src={textlogo} alt="텍스트 로고" />
      </SearchWarp>
      <ContentWrapper>
        <Content>생일카페 위치가 궁금한 멤버를 검색해주세요</Content>
        <ButtonStyle>
          <ApplyButton
            width="205px"
            content="생일카페 추가하기"
            linkTo="/map/write"
          />
        </ButtonStyle>
      </ContentWrapper>
    </Wrapper>
  );
};

const ButtonStyle = styled.div`
  margin-left: 565px;
  margin-top: 40px;
`;

const Content = styled.div`
  font-size: 40px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
