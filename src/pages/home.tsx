// 파일 내용...

import { styled } from "styled-components";
import Logo from "../assets/imgs/logo1.svg";
import { theme } from "../styles/theme";

export function Home() {
  return (
    <Back>
      <img src={Logo} alt="" width={100} />
      fanflow 아이돌을 덕질중이라면
      <br />
      <Highlight>필수</Highlight> 덕질 사이트
    </Back>
  );
}

const Back = styled.div`
  width: 100%;
  background-color: #ffe6e2;
  padding: 294px 114px;
  font-size: 70px;
`;

const Highlight = styled.p`
  color: ${({ theme }) => theme.color.four};
`;
