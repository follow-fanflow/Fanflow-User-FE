import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { Circles } from "../components/introduceIdol/circle2";

export function IdolList() {
    return (
        <>
            <Header />
            <Container>
                <Wrapper>
                    <GroupCount>팬플로우에서 16팀의 아티스트를 만나볼 수 있어요</GroupCount>
                    <CircleWrapper>
                        <Circles />
                    </CircleWrapper>
                </Wrapper>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    justify-content: space-between;
    align-items: center;
`;

const CircleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GroupCount = styled.div`
    font-size: 23px;
    padding: 100px 0px 20px 0px;
`;
