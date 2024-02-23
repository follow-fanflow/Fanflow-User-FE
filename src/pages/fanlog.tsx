import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import banner from "../assets/imgs/배너.png";
import { Thumbnail } from "../components/common/log/thumbnail";
import Button from "../components/common/button/Button";
import { SelectTag } from "../components/common/tag/selectTag";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Fanlog = () => {
  const navigate = useNavigate();
  const [Fanlogdata, setFanlogData] = useState([
    {
      id: Number,
      title: "",
      content: "",
      group: "",
      likeCount: Number,
      image: "",
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    axios.get("localhost:3002/fanlog").then((res) => {
      console.log(res.data.list);
      setFanlogData(res.data.list);
    });
  }, []);

  const onClickFanlog = (id: number) => {
    navigate(`/fanlog/${id}`);
  };

  const onChangeTag = (value: string, name: string) => {
    console.log(`Selected Group: ${value}`);
    axios
      .get(`/schedule?group=${value}`)
      .then((response) => {
        const fanloglist = response.data.fanloglist;
        const groupFanlog = fanloglist.map((schedule: any) => {
          return {
            id: schedule.id,
            title: schedule.title,
            group: schedule.group,
            likeCount: schedule.likeCount,
            image: schedule.image,
          };
        });
        setSelectedGroup(value);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
          <SelectTag
            type="idol"
            onChange={(value) => onChangeTag(value, "group")}
            name="group"
          />
          <Button
            content="작성하기"
            width={154}
            height={33}
            to="/fanlog/write"
          />
        </Search>
        <LogWarp>
          {Array.isArray(Fanlogdata) &&
            Fanlogdata.map((item, idx) => (
              <Thumbnail
                key={idx}
                id={idx}
                img={item.image}
                title={item.title}
                detail={item.content}
                onClick={() => onClickFanlog(idx)}
              />
            ))}
          <Thumbnail
            id={1}
            onClick={() => onClickFanlog(1)}
            img=""
            title="박빨입"
            detail="박우진보고싶어버블라이브켜"
          />
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

export default Fanlog;
