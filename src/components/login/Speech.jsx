import React from "react";
import { styled } from "styled-components";

export const Speech = ({ messege1, messege2, messege3 }) => {
    return (
        <div>
            <Bubble>
                <Name>
                    {messege1}
                </Name>
                <Content>
                    {messege2}
                    {messege3 && <AdditionalMessage>{messege3}</AdditionalMessage>}
                </Content>
            </Bubble>
        </div>
    );
};

const Name = styled.div`
    color: black;
    font-size: 19px;
    margin-left: 23px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 23px;
`;

const Bubble = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    width: 340px;
    height: 104px;
    background-color: white;
    border-radius: 7px;
    border: solid 1px ${({ theme }) => theme.color.gray};
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
`;

const AdditionalMessage = styled.div``;
