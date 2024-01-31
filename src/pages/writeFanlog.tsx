import React from "react";
import styled from "styled-components";
import banner from "../assets/imgs/배너.png";
import { Header } from "../components/header";
import Button from "../components/common/button/Button";
import camera from "../assets/imgs/camera.svg";
import { Thumbnail } from "../components/common/log/thumbnail";
import { SelectTag } from "../components/common/tag/selectTag";

export const WriteLog = () => {
  const today = new Date();
  return (
    <Wrapper>
      <Header />

      <BannerWarp>
        <img src={banner} alt="Banner 1" />
        <img src={banner} alt="Banner 2" />
        <img src={banner} alt="Banner 3" />
      </BannerWarp>
      <Second>
        <DateContainer>
          <Left>
            {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
            <SelectTag />
          </Left>
          <Button
            content="올리기"
            width={94}
            height={33}
            to="/fanlog"
            backgroundColor="#F96C85"
          />
        </DateContainer>
        <Write>
          <Textarea placeholder="놓치기 아쉬운 순간들을 기록해보세요!" />
          <ImgPost>
            <img src={camera} alt="" />
            사진도 함께 남겨보세요
            <input type="file" accept="image/jpeg, image/svg" />
          </ImgPost>
        </Write>
        <Text>지금까지 내가 남긴 추억들👍</Text>
        <Logwarp>
          <Thumbnail
            img="https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2/ab6ix/f159b904-7b8a-46d6-87c1-922d1150e1cf/783d7bae-ca55-4361-9d67-aae0a991134f/ori.jpeg"
            title="안녕하세용..?"
            detail="처음뵙지만 잘부탁해?"
          />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
        </Logwarp>
      </Second>
    </Wrapper>
  );
};

const Left = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Logwarp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Text = styled.p`
  font-size: 24px;
`;

const ImgPost = styled.label`
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 12px;
  padding: 94px 32px;
  gap: 4px;
  width: 188px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.zero};
  cursor: pointer;

  input {
    display: none;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.color.zero};
  width: 100%;
  height: 243px;
  padding: 22px;
`;

const Second = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0px 180px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Wrapper = styled.div`
  flex-direction: column;
  padding: 110px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const DateContainer = styled.div`
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;

const BannerWarp = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  overflow: hidden;
  gap: 34px;
`;

const Write = styled.div`
  display: flex;
  gap: 22px;
`;
