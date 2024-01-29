import styled from "styled-components";
import React from "react";
import { Header } from "../components/header";

export function Profile() {
    return (
        <>
            <Header />
            <Wrapper>
                <Div></Div>
            </Wrapper>
        </>
    );
}

const Div = styled.div`
    width: 300px;
    height: 500px;
    background-color: black;
`;

const Wrapper = styled.div`
    height: 91vh;
    display: flex;
    flex-direction: row;
    margin-top: 75px;
`;