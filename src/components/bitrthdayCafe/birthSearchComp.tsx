import { Input } from "../common/input/Input";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/imgs/logo1.svg";
import SearchIcon from "../../assets/imgs/search.svg";
import TextLogo from "../../assets/imgs/textLogo.svg";
import { SearchTag } from "../common/tag/searchTag";

export const BirthSearchComp = () => {
  return (
    <div>
      <SearchWrapper>
        <LogoImg src={Logo} alt="Logo"></LogoImg>
        <InputWrapper>
          <SearchTag content="내 최애 생일카페가 어디어디에 있나?" />
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
