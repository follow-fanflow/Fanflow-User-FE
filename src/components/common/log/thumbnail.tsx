import React, { useState } from "react";
import { styled } from "styled-components";
import heart from "../../../assets/imgs/noheart.svg";
import checkHeart from "../../../assets/imgs/checkHeart.svg";
import { theme } from "../../../styles/theme";
import { DeleteModal } from "../modal/deleteModal";
import axios from "axios";

interface ThumbnailProps {
  img: string;
  title: string;
  detail: string;
  onClick?: () => void;
  id: Number;
}

export const Thumbnail = ({
  img,
  title,
  detail,
  onClick,
  id,
}: ThumbnailProps) => {
  const [noheart, setHeart] = useState<boolean>(false);

  const heartClick = () => {
    setHeart(!noheart);
    if (noheart) {
      axios.delete(`/log/like/${id}`);
    } else {
      axios.post(`/log/like/${id}`);
    }
  };

  return (
    <Warp>
      <ImgWarp onClick={onClick}>
        <img src={img} alt="" width={175} height={216} />
      </ImgWarp>
      <Heart onClick={heartClick}>
        {noheart ? (
          <img src={checkHeart} alt="Eyes Close" />
        ) : (
          <img src={heart} alt="Eyes Open" />
        )}
      </Heart>
      <Title onClick={onClick}>{title}</Title>
      <Detail onClick={onClick}>{detail}</Detail>
    </Warp>
  );
};

const Warp = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  :hover {
  }
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
