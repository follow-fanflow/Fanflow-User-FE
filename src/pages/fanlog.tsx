import React from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import banner from "../assets/imgs/배너.png";
import { Thumbnail } from "../components/common/log/thumbnail";
import Button from "../components/common/button/Button";
import { SelectTag } from "../components/common/tag/selectTag";
import { useState, useEffect } from "react";
import axios from "axios";

export const Fanlog = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    axios.get("baseURL").then((res) => {
      console.log(res.data.list);
      setDate(res.data.list);
    });
  });
  return (
    <>
      <Wrapper>
        <Header />
        <BannerWarp>
          <img src={banner} alt="Banner 1" />
          <img src={banner} alt="Banner 2" />
          <img src={banner} alt="Banner 3" />
        </BannerWarp>
      </Wrapper>
      <Warp>
        <Search>
          <SelectTag />
          <Button
            content="작성하기"
            width={154}
            height={33}
            to="/fanlog/write"
          />
        </Search>
        <LogWarp>
          {/* {Array.isArray(data) &&
          data.map((item, idx) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/more/${item.recruitment_id}`}
            ></} */}
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
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
          <Thumbnail img="r" title="f" detail="l" />
        </LogWarp>
      </Warp>
    </>
  );
};

const Warp = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  padding: 110px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerWarp = styled.div`
  justify-content: center;
  display: flex;
  overflow: hidden;
  gap: 34px;
`;

const Search = styled.div`
  padding: 0px 57px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 460px;
`;

const LogWarp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
`;
