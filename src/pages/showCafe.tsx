import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { Search } from "../components/bitrthdayCafe/search";
import Map from "../components/bitrthdayCafe/map";

export function ShowCafe() {

    return (
        <>
            <Header />
            <Wrapper>
                <Search />
                <ContentWrapper>
                    <Map />
                </ContentWrapper>
            </Wrapper>
        </>
    );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
`;
