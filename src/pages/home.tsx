import React from "react";
import styled from "styled-components";
import Logo from "../assets/imgs/logo1.svg";
import { theme } from "../styles/theme";
import search from "../assets/imgs/search.svg";
import { Input } from "../components/common/input/Input";
import { Header } from "../components/header";
import { Speech } from "../components/common/home/speeechbubble";
import { Circle } from "../components/common/home/circle";
import Mac from "../assets/imgs/Mac.svg";

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
      <Second>
        <Circle
          title="아이돌 소개"
          detail="모든 아이돌을 모았다. 케이팝 아이돌을 전부 모아놨어요"
          color={theme.color.zero}
        />
        <Hr />
        <Circle
          title="스케줄"
          detail="공식,비공식 스케줄을 월별로 볼 수 있어요!"
          color={theme.color.one}
        />
        <Hr />
        <Circle
          title="팬로그"
          detail="당신의 소중한 추억을 남겨보세요!"
          color={theme.color.two}
        />
        <Hr />
        <Circle
          title="생카지도"
          detail="팬들이 주최한 생일카페를 지도에 모아봤어요!"
          color={theme.color.three}
        />
      </Second>
      <IntroduceWarp>
        <Introduce>
          <img src={Mac} alt="" />
          tjtoro
        </Introduce>
        <Introduce>
          <img src={Mac} alt="" />
          tjtoro
        </Introduce>
        <Introduce>
          <img src={Mac} alt="" />
          tjtoro
        </Introduce>
        <Introduce>
          <img src={Mac} alt="" />
          tjtoro
        </Introduce>
      </IntroduceWarp>
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

const Second = styled.div`
  background-color: ${({ theme }) => theme.color.gray0};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 900px;
`;

const Hr = styled.div`
  border-top: 1px solid;
  width: 140px;
`;

const IntroduceWarp = styled.div`
  :nth-child(2n) {
    background-color: ${({ theme }) => theme.color.gray0};
  }
`;

const Introduce = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 180px 234px;
`;

const Title = styled.p``;
