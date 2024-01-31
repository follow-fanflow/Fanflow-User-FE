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
                    <TeamIntroduce>미스틱스토리에서 선보이는 첫 밴드이자 4인조 밴드.
                        2019년 밴드 오디션 프로그램 JTBC 슈퍼밴드서 처음 결성되어 준우승을 차지하였다.
                        팀명은 슈퍼밴드 시절 작업실에서 키우던 강아지 이름에서 따왔으며 라틴어로 '빛'을 의미한다.
                        폭폭넓은 다양한 장르의 음악들을 선보이며 활동하고 있는데, 중성적인 느낌의 팀명처럼 편견 없는 음악을 하고 싶다며
                        장르를 정의하지 않고 LUCY 자체가 장르가 됐으면 한다는 포부를 밝혔다.</TeamIntroduce>
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