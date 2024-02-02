import styled from "styled-components";
import React from "react";
import BackBtn from "../../assets/imgs/backBtn.svg";
import { Link } from "react-router-dom";

interface IntroduceProp {
  member: string[];
  group: string;
  groupImg: string;
  memberImg: string[];
  detail: string;
  debut: string;
  memberBirthday: string[];
}

export const IntroduceComp = ({
  member,
  group,
  groupImg,
  memberImg,
  debut,
  detail,
  memberBirthday,
}: IntroduceProp) => {
  return (
    <Wrapper>
      <ButtonWrapper to="/introduce">
        <Button src={BackBtn}></Button>
      </ButtonWrapper>
      <Box1>
        <GroupProfile>
          <img src={groupImg}></img>
          <GroupName>{group}</GroupName>
          <div>{debut}</div>
        </GroupProfile>
      </Box1>
      <Box2>
        <Title>{group}</Title>
        <div style={{ fontSize: "30px", marginBottom: "36px" }}>멤버</div>
        <MemberWrapper>
          {member &&
            member.map((name, index) => (
              <Member key={index}>
                <MemberProfile src={memberImg[index]} />
                <MemberInfo>
                  <MemberName>{name}</MemberName>
                  <MemberBirth>{memberBirthday[index]}</MemberBirth>
                </MemberInfo>
              </Member>
            ))}
        </MemberWrapper>
        <div style={{ fontSize: "30px", marginBottom: "36px" }}>팀 소개</div>
        <TeamIntroduce>{detail}</TeamIntroduce>
      </Box2>
    </Wrapper>
  );
};

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamIntroduce = styled.div`
  width: 741px;
`;

const MemberBirth = styled.div`
  font-size: 12px;
`;

const MemberName = styled.div`
  font-size: 24px;
`;

const MemberProfile = styled.img``;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 149px;
`;

const MemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 36px;
  gap: 33px;
`;

const Title = styled.div`
  font-size: 35px;
  margin-bottom: 60px;
`;

const Box2 = styled.div`
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 1080px;
  padding: 66px 51px 46px 0px;
  min-height: 550px;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  box-shadow: 2px 2px 17.9px rgba(0, 0, 0, 0.2);
  justify-content: center;
  padding-left: 50px;
`;

const ButtonWrapper = styled(Link)``;

const Button = styled.img`
  margin-bottom: 632px;
  cursor: pointer;
`;

const GroupName = styled.div`
  font-size: 35px;
  margin-top: 15px;
`;

const GroupProfile = styled.div`
  margin-top: 90px;
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 327px;
  min-height: 655px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0px 85px 0px 62px;
  background: linear-gradient(to top, #ffc1c1, rgba(255, 0, 0, 0));
`;

const Wrapper = styled.div`
  height: 91vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
`;
