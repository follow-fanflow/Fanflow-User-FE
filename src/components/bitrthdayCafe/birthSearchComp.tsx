import { Input } from "../common/input/Input";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../assets/imgs/logo1.svg";
import TextLogo from "../../assets/imgs/textLogo.svg";
import { AutoInput } from "../common/input/AutoInput";

export const BirthSearchComp = () => {
  const suggest = ["조슈아", "신라면", "지젤", "자비스~", "신예찬"];

  const handleGroupSelect = (selectedGroup: string) => {
    console.log(`Selected Group: ${selectedGroup}`);
  };

  return (
    <div>
      <SearchWrapper>
        <LogoImg src={Logo} alt="Logo"></LogoImg>
        <InputWrapper>
          <AutoInput
            suggestions={suggest}
            placeholder="멤버명"
            label="내 최애 생일카페가 어디어디에 있나?"
            onSelect={handleGroupSelect}
          />
        </InputWrapper>
        <LogoImg2 src={TextLogo} alt="textLogo"></LogoImg2>
      </SearchWrapper>
    </div>
  );
};

const LogoImg2 = styled.img`
  width: 170px;
  margin-top: 300px;
  margin-bottom: 28px;
`;

const InputWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 90px;
`;

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
