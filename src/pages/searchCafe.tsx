import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";

export function SearchCafe() {
    return (
        <Wrapper>
            <Header />
            <div>header 성공!!</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  /* 여기에 필요한 스타일을 추가하세요 */
`;
