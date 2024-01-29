import React, { useState } from "react";
import { styled } from "styled-components";
import heart from "../../../assets/imgs/noheart.svg";
import checkHeart from "../../../assets/imgs/checkHeart.svg";

interface ThumbnailProps {
  img: string;
  title: string;
  detail: string;
}

export const Thumbnail = ({ img, title, detail }: ThumbnailProps) => {
  const [noheart, setHeart] = useState<boolean>(false);

  const handleThumbnailClick = () => {
    window.location.href = "/fanlog/detail";
  };

  return (
    <Warp onClick={handleThumbnailClick}>
      <ImgWarp>
        <img src={img} alt="" width={175} height={216} />
      </ImgWarp>
      <Heart onClick={() => setHeart(!noheart)}>
        {noheart ? (
          <img src={checkHeart} alt="Eyes Close" />
        ) : (
          <img src={heart} alt="Eyes Open" />
        )}
      </Heart>
      <Title>{title}</Title>
      <Detail>{detail}</Detail>
    </Warp>
  );
};

const Warp = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

const ImgWarp = styled.div`
  border-radius: 5px;
`;

const Heart = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Detail = styled.div`
  font-size: 8px;
`;
