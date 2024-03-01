import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import banner from "../assets/imgs/배너.png";
import BackIcon from "../assets/imgs/leftArrow.svg";
import axios from "axios";
import HeartImg from "../assets/imgs/checkHeart.svg";

export const FanlogDetail = () => {
  const navigate = useNavigate();
  const [detailData, setDetailData] = useState({
    nickname: "",
    id: Number,
    title: "",
    content: "",
    group: "",
    likeCount: "",
    image: "https://parkwoojin",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/log/${detailData.id}`);
        setDetailData(response.data.list);
      } catch (error) {
        console.error(error);
      }
    };
  }, [detailData.id]);

  const BackClick = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Header />
      <BannerWarp>
        <img src={banner} alt="Banner 1" />
        <img src={banner} alt="Banner 2" />
        <img src={banner} alt="Banner 3" />
      </BannerWarp>
      <Warp>
        <Container>
          <Back>
            <img src={BackIcon} alt="" onClick={BackClick} />
            {detailData.nickname}ㄱㄴ여섯님
          </Back>
          <Content>
            <Left>
              <img src={detailData.image} alt="" width={230} height={308} />
              <Heart>
                <img src={HeartImg} alt="하트" />
                {detailData.likeCount}100개
              </Heart>
            </Left>
            <Right>
              <Title>{detailData.title}정신차리자</Title>
              <Detail>
                {detailData.content}알보고니 곧 컴백이라니 열심히 살겠습니다...
                우리오파(于里烏播) 개귀여어(凱歸蠡魚) 하고풍거(河鼓風去)
                삭다해라(削多海蘿) 신의미모(神義美貌) 세상간지(世上間地)
                용안에서(用安恚西) 비치난다(費治難多) 좌로인정(左虜人正)
                우로인정(右虜人正) 압구루기(狎鷗漏器) 대굴대굴(大窟大窟)
                매일이론(每日理論) 덕후마음(德厚馬音) 주접이라(主楪伊亽)
                할지라도(轄地羅道) 내가알게(來駕謁揭) 모야시발(暮夜始發)
                내주접은(內主接銀) 정당하다(正當下多)
              </Detail>
            </Right>
          </Content>
        </Container>
      </Warp>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-direction: column;
  padding: 110px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerWarp = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  overflow: hidden;
  gap: 34px;
`;

const Warp = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 240px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  gap: 80px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.gray_1};
  border-radius: 30px;
  padding: 64px 106px;
`;

const Back = styled.div`
  align-items: center;
  gap: 15px;
  display: flex;
  font-size: 24px;
`;

const Heart = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const Title = styled.p`
  font-size: 28px;
`;

const Detail = styled.p`
  font-size: 24px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  width: 840px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Content = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-evenly;
  align-items: flex-start;
`;
