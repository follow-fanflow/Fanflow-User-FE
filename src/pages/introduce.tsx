import styled from "styled-components";
import React from "react";
import { Header } from "../components/header";
import Lucy from "../assets/imgs/Lucy.svg";
import BackBtn from "../assets/imgs/backBtn.svg";
import MemberPicture from "../assets/imgs/yechan.svg";
import { Link } from "react-router-dom";

export function Introduce() {
    return (
        <>
            <Header />
            <Wrapper>
                <ButtonWrapper to='/introduce'>
                    <Button src={BackBtn}></Button>
                </ButtonWrapper>
                <Box1>
                    <GroupProfile>
                        <img src={Lucy}></img>
                        <GroupName>LUCY</GroupName>
                        <div style={{ marginTop: '5px' }}>2019년 데뷔</div>
                    </GroupProfile>
                </Box1>
                <Box2>
                    <Title>LUCY</Title>
                    <div style={{ fontSize: '30px', marginBottom: "36px" }}>멤버</div>
                    <MemberWrapper>
                        <Member>
                            <MemberProfile src={MemberPicture}></MemberProfile>
                            <MemberName>신예찬</MemberName>
                            <MemberBirth>1992.06.13</MemberBirth>
                        </Member>
                        <Member>
                            <MemberProfile src={MemberPicture}></MemberProfile>
                            <MemberName>신예찬</MemberName>
                            <MemberBirth>1992.06.13</MemberBirth>
                        </Member>
                    </MemberWrapper>
                    <div style={{ fontSize: '30px', marginBottom: "36px" }}>팀 소개</div>
                    <TeamIntroduce>투모로우바이투게더는 2019년 3월 4일에 데뷔한 대한민국 빅히트 뮤직 소속의 5인조 보이 그룹이다. '투모로우바이투게더'라는 그룹명에 대해서는 서로 다른 너와 내가 하나의 꿈으로 모여 함께 내일을 만들어간다는 의미를 가지고 있다. 투모로우바이투게더의 팬덤은 2019년 8월 22일 모스부호 모아로 확정되었다. 모아는 Moments Of Alwaysness의 준말이자 서로의 꿈 조각들을 모아 하나의 꿈을 완성하는 투모로우바이투게더와 팬이라는 의미와 언제나 항상 영원히 투모로우바이투게더와 팬이 함께 하는 순간이라는 의미를 가지고 있다.</TeamIntroduce>
                </Box2>
            </Wrapper >
        </>
    );
}

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
    margin-right: 30px;
`;

const MemberWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 36px;
`;

const Title = styled.div`
    font-size: 35px;
    margin-bottom: 60px;
`;

const Box2 = styled.div`
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    width: 1080px;
    height: 655px;
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
    height: 655px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0px 85px 0px 62px;
    background: linear-gradient(to top, #FFC1C1, rgba(255, 0, 0, 0));
`;

const Wrapper = styled.div`
    height: 91vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 75px;
`;