import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/imgs/logo1.svg";
import { theme } from "../styles/theme";
import { Header } from "../components/header";
import { Input } from "../components/common/input/Input";

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    // 포커스가 이동했을 때 수행할 동작 추가
  };

  const handleBlur = () => {
    setIsFocused(false);
    // 포커스가 해제되었을 때 수행할 동작 추가
  };

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
      <Input
        width="100px"
        height="100px"
        type="password"
        value={"dks"}
        onChange={handleFocus}
        placeholder={"qlal"}
      />
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
