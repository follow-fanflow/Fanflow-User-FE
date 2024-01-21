import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import Logo from "../assets/imgs/logo1.svg";

export function SearchCafe() {
    return (
        <div>
            <Header />
            <Wrapper>
                <SearchWrapper>
                    <LogoImg src={Logo}></LogoImg>
                    <TagWrapper></TagWrapper>
                </SearchWrapper>
            </Wrapper>
        </div>
    );
}

const TagWrapper = styled.div``;

const LogoImg = styled.img`
    width: 60px;
    margin-top: 95px;
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 419px;
    align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
