import styled from "styled-components";
import React from "react";
import { Header } from "../components/header";
//커밋 테스트용


export function Profile() {
    return (
        <>
            <Header />
            <Wrapper>
                <></>
            </Wrapper>
        </>
    );
}


const Wrapper = styled.div`
    height: 91vh;
    display: flex;
    flex-direction: row;
    margin-top: 75px;
`;