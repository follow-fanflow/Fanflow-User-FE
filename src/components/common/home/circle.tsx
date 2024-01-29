import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { useInView } from "react-intersection-observer";
import { BoxShadow, theme } from "../../../styles/theme";

interface CircleProps {
  title: string;
  detail: string;
  color: string;
}

export const Circle = ({ title, detail, color }: CircleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      console.log("Circle component is now in view!");
    }
  }, [inView]);

  return (
    <Back ref={ref} color={color} className={inView ? animatedClassName : ""}>
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
  opacity: 0;
  transform: translateY(20px);

  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
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

const animatedClassName = "in-view";
