import styled from "styled-components";
import React from "react";
import { Header } from "../components/header";

export function Introduce() {
  return (
    <>
      <Header />
      <Wrapper>
        <Box1>{/* introduceComp를 이용하거나 여기서 바로 퍼블리싱 */}</Box1>
      </Wrapper>
    </>
  );
}

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 327px;
  height: 735px;
  background-color: black;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  justify-content: center;
`;
