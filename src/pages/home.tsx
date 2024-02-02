import React from "react";
import styled from "styled-components";
import Logo from "../assets/imgs/logo1.svg";
import search from "../assets/imgs/search.svg";
import { Input } from "../components/common/input/Input";
import { Header } from "../components/header";
import { Speech } from "../components/common/home/speeechbubble";
import { Circle } from "../components/common/home/circle";
import Mac from "../assets/imgs/Mac.svg";
import { Footer } from "../components/common/home/footer";
import Button from "../components/common/button/Button";
import { theme } from "../styles/theme";
import homeLast from "../assets/imgs/homeLast.svg";

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
          <Exwarp>
            <Title>케이팝 아이돌 전부 모였다</Title>
            <Ex>
              아직 최애를 고르지 못했다면, 더 알고싶다면,
              <br /> 팬플로우에서 더 자세히 알아가보세요
            </Ex>
          </Exwarp>
        </Introduce>
        <Introduce>
          <Exwarp>
            <Title>스케줄 완벽 준비</Title>
            <Ex>
              공식스케줄부터 비공식 스케줄까지
              <br />
              아이돌의 활동 일정을 사전에 파악하여
              <br />
              아이돌과 더 가까워지는 기회!!
            </Ex>
          </Exwarp>
          <img src={Mac} alt="" />
        </Introduce>
        <Introduce>
          <img src={Mac} alt="" />
          <Exwarp>
            <Title>놓치기 아쉬운 순간들을 기록하자</Title>
            <Ex>
              자신의 아이돌 관련 경험, 감정, 추억 등을 쉽고 빠르게
              <br />
              기록하고 공유하는 공간!!
            </Ex>
          </Exwarp>
        </Introduce>
        <Introduce>
          <Exwarp>
            <Title>생일 카페 지도까지!</Title>
            <Ex>
              매번 생일카페 리스트만들고 찾기 어려우셨죠?
              <br />
              팬플로우에선 생일카페지도까지 준비해놨어요
            </Ex>
          </Exwarp>
          <img src={Mac} alt="" />
        </Introduce>
      </IntroduceWarp>
      <Last>
        <Warp>
          <Title>내 최애가 있는지 지금 확인해보세요</Title>
          <ButtonWarp>
            <Button
              content="아티스트 보기"
              width={150}
              height={44}
              to="/introduce"
              buttonStyle={{
                backgroundColor: "#f96c85",
              }}
            />

            <Button
              content="팬로그보기"
              width={150}
              height={44}
              borderColor="#f96c85"
              to="/fanlog"
              buttonStyle={{
                backgroundColor: "#00000000",
                color: "#f96c85",
              }}
            />
          </ButtonWarp>
        </Warp>
        <Img>
          <img src={homeLast} width={"660px"} alt="" />
        </Img>
      </Last>
      <Footer />
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
  color: ${({ theme }) => theme.color.gray__1};
`;

const IntroduceWarp = styled.div`
  :nth-child(2n) {
    background-color: ${({ theme }) => theme.color.gray0};
  }
`;

const Introduce = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 180px 0px;
`;

const Exwarp = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 60px;
`;

const Ex = styled.p`
  font-size: 24px;
`;

const Last = styled.div`
  display: flex;
  align-items: center;
  height: 800px;
  background: linear-gradient(
    180deg,
    #fff1f1 0%,
    rgba(255, 226, 226, 0.85) 36.5%,
    rgba(255, 187, 187, 0.83) 71.5%,
    rgba(255, 102, 102, 0.7) 100%
  );
  overflow: hidden;
`;

const Img = styled.div``;

const ButtonWarp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 320px;
  margin-top: 10px;
`;
const Warp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 370px;
  gap: 8px;
`;
