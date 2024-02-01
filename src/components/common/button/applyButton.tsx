import React from "react";
import styled from "styled-components";
import ButtonImg from "../../../assets/imgs/ApplyBtn.svg";
import { Link } from "react-router-dom";

// 사용법: <ApplyButton width="px" content="텍스트" linkTo="/" />
interface ApplyButtonProps {
    width?: string;
    content?: string;
    linkTo?: string;
}

export const ApplyButton: React.FC<ApplyButtonProps> = ({ width, content, linkTo }) => {
    return (
        <Button width={width}>
            <Content>{content}</Content>
            <IconWrapper to={linkTo as string}>
                <img src={ButtonImg} alt="Apply Button" />
            </IconWrapper>
        </Button>
    );
};

const Button = styled.div<{ width?: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${({ width }) => width || "191px"};
    height: 38px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.color.zero};
`;

const Content = styled.div`
    color: white;
    margin: 0px 30px 0 20px;
    font-size: 15px;
`;

const IconWrapper = styled(Link)`
    display: flex;
    align-items: center;
`;
