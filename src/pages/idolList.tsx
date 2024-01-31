import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import { Circles } from "../components/introduceIdol/circle2";

export function IdolList() {
    const [groupCount, setGroupCount] = useState(0);

    const fetchGroupCount = async () => {
        try {
            const response = await fetch("https://api.example/groupCount");
            const data = await response.json();

            setGroupCount(data.groupCount);
        } catch (error) {
            console.error("에러에러: ", error);
        }
    }

    useEffect(() => {
        fetchGroupCount();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Wrapper>
                    <GroupCount>팬플로우에서 {groupCount}팀의 아티스트를 만나볼 수 있어요</GroupCount>
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
    width: 1321px;
`;

const CircleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GroupCount = styled.div`
    font-size: 23px;
    padding: 100px 0px 50px 0px;
`;
