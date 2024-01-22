import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/imgs/logo1.svg";
import { theme } from "../styles/theme";
import { Header } from "../components/header";

export function Home() {
  return (
    <>
      <Header />
      <Back>
        <img src={Logo} alt="" width={100} />
        <Text>
          <Highlight>fan</Highlight>flow
        </Text>
        아이돌을 덕질중이라면
        <Text>
          <Highlight>필수</Highlight>덕질 사이트
        </Text>
      </Back>
    </>
  );
}

const Back = styled.div`
  width: 100%;
  background-color: #ffe6e2;
  padding: 294px 114px;
  font-size: 70px;
  white-space: normal;
`;

const Highlight = styled.p`
  color: ${({ theme }) => theme.color.four};
`;

const Text = styled.div`
  display: flex;
`;
