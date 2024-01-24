import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import Logo from "../assets/imgs/logo1.svg";
import { Input } from "../components/common/input/Input";
import SearchIcon from "../assets/imgs/search.svg";
import TextLogo from "../assets/imgs/textLogo.svg";

export function SearchCafe() {
  const handleBlur = () => {
    console.log("Input blurred");
  };

  return (
    <>
      <Header />
      <Wrapper>
        <SearchWrapper>
          <LogoImg src={Logo} alt="Logo"></LogoImg>
          <TagWrapper>{/* tag 컴포넌트 넣기 */}</TagWrapper>
          <InputWrapper>
            <Span>내 최애 생일카페가 어디어디에 있나?</Span>
            <Input
              width="379px"
              type="icon"
              placeholder="Search"
              onChange={handleBlur}
              Icon={<img src={SearchIcon} alt="Search Icon" />}
            />
          </InputWrapper>
          <LogoImg2 src={TextLogo} alt="textLogo"></LogoImg2>
        </SearchWrapper>
        <LineWrapper>
          <Line></Line>
        </LineWrapper>
        <ContentWrapper>
          <Content>생일카페 위치가 궁금한 멤버를 검색해주세요</Content>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const Content = styled.div`
  font-size: 45px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Line = styled.div`
  width: 1px;
  height: 780px;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.color.gray__1};
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImg2 = styled.img`
  width: 170px;
  margin-top: 340px;
  margin-bottom: 28px;
`;

const Span = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.color.gray__1};
  margin-bottom: 4px;
`;

const InputWrapper = styled.div`
  margin-top: 70px;
  margin-bottom: 90px;
`;

const TagWrapper = styled.div``;

const LogoImg = styled.img`
  width: 75px;
  margin-top: 95px;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 50px;
  align-items: center;
  margin-top: 70px;
`;

const Wrapper = styled.div`
  display: flex;
`;
