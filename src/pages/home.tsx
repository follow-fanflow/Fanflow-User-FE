import React from "react";
import styled from "styled-components";
import Logo from "../assets/imgs/logo1.svg";
import { theme } from "../styles/theme";
import search from "../assets/imgs/search.svg";
import { Input } from "../components/common/input/Input";
import { Header } from "../components/header";
import { Speech } from "../components/common/home/speeechbubble";

export function Home() {
  return (
    <>
      <Header />
      <Back>
        <TextWarp>
          <img src={Logo} alt="" width={100} />
          <Text>
            <Highlight>fan</Highlight>flow
          </Text>
          아이돌을 덕질중이라면
          <Text>
            <Highlight>필수</Highlight>덕질 사이트
          </Text>
        </TextWarp>
        <Roude>
          <SpeechBubble>
            <Speech detail="🌟 환상의 덕질 세계 🌟 " back={theme.color.four} />
            <Speech
              detail="🎨 다양한 콘텐츠로 얻는 즐거움 "
              back={theme.color.three}
            />
            <Speech
              detail="진정한 덕후로서 행복한 순간 💖"
              back={theme.color.one}
            />
            <Speech detail="😋덕질을 더욱 풍부하게🧐" back={theme.color.zero} />
          </SpeechBubble>
        </Roude>
      </Back>
    </>
  );
}

const Back = styled.div`
  background-color: #ffe6e2;
  padding: 76px 0px 0px 114px;
  height: 1000px;
  font-size: 70px;
  display: flex;
  justify-content: flex-end;
  gap: 60px;
`;

const TextWarp = styled.div`
  padding-top: 218px;
`;

const Roude = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 150px 0px 0px 0px;
  width: 1040px;
  height: auto;
`;

const SpeechBubble = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  > :nth-child(2n) {
    margin-left: 200px;
  }
`;

const Highlight = styled.p`
  color: ${({ theme }) => theme.color.four};
`;

const Text = styled.div`
  display: flex;
`;
