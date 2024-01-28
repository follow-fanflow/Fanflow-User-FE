import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";

export function IdolList() {
    return (
        <>
            <Header />
            <Wrapper>
                {/* circle2 컴포넌트 적용 -> 그룹 리스트 */}
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
  display: flex;
`;
