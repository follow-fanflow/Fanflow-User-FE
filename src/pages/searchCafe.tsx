import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { BirthSearchComp } from "../components/bitrthdayCafe/birthSearchComp";
import { Link } from "react-router-dom";
import { ApplyButton } from "../components/common/button/applyButton";

export function SearchCafe() {

  return (
    <>
      <Header />
      <Wrapper>
        <BirthSearchComp />
        <LineWrapper>
          <Line></Line>
        </LineWrapper>
        <ContentWrapper>
          <Content>생일카페 위치가 궁금한 멤버를 검색해주세요</Content>
          <ButtonStyle>
            <ApplyButton width="205px" content="생일카페 추가하기" linkTo="/" />
          </ButtonStyle>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const ButtonStyle = styled.div`
  margin-left: 655px;
  margin-top: 40px;
`;

const Content = styled.div`
  font-size: 45px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const Wrapper = styled.div`
  display: flex;
`;
