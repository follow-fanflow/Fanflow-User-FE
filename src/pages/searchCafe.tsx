import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { Search } from "../components/bitrthdayCafe/search";

export function SearchCafe() {

  return (
    <>
      <Header />
      <Wrapper>
        <Search />
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

const Wrapper = styled.div`
  display: flex;
`;
