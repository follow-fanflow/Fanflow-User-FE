import { Header } from "../components/header"
import styled from "styled-components";

export const WriteCafe = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Box></Box>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    width: 865px;
    height: 509px;
`;