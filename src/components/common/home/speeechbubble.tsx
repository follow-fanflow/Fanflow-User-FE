import { styled } from "styled-components";
import { BoxShadow } from "../../../styles/theme";

interface SpeechProps {
  detail: string;
  back: string;
}

export const Speech = ({ detail, back }: SpeechProps) => {
  console.log(back);
  return (
    <Warp>
      <Square backgroundColor={back}>{detail}</Square>
      <Triangle backgroundColor={back}></Triangle>
    </Warp>
  );
};

const Warp = styled.div`
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  animation: fadeInUp 0.5s ease-in-out;
`;

const Square = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 338px;
  height: 55px;
  border-radius: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
  box-shadow: ${BoxShadow};
`;

const Triangle = styled.div<{ backgroundColor: string }>`
  width: 0px;
  height: 0px;
  border-top: calc(20px * 1.732) solid
    ${({ backgroundColor }) => backgroundColor};
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  margin-left: 40px;
`;
