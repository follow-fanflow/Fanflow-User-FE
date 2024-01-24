import React from "react";
import { styled } from "styled-components";
import { BoxShadow, theme } from "../../../styles/theme";

interface CircleProps {
  title: string;
  detail: string;
  color: string;
}

export const Circle = ({ title, detail, color }: CircleProps) => {
  return (
    <Back color={color}>
      <Text>
        <First>{title}</First>
        <p>{detail}</p>
      </Text>
    </Back>
  );
};

const Back = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 250px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: ${BoxShadow};
  padding: 0px 18px;
  box-sizing: border-box;

  text-align: center;
`;

const First = styled.div`
  font-size: 28px;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
