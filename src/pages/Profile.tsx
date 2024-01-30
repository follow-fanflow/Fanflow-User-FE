import styled from "styled-components";
import React from "react";
import { Header } from "../components/header";
import Button from "../components/common/button/Button";
import LogoImg from "../assets/imgs/logo1.svg";
import CircleImg from "../assets/imgs/circle.svg";
import PersonImg from "../assets/imgs/profile.svg";

export function Profile() {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <>
            <Header />
            <Wrapper>
                <ContentWrapper>
                    <img src={LogoImg} style={{ width: '90px' }} alt="Logo"></img>
                    <ContentBox>
                        <div style={{ fontSize: '30px' }}>쉽고 편한</div>
                        <div style={{ fontSize: '35px', marginLeft: '10px' }}>덕질 메이트</div>
                    </ContentBox>
                    <div style={{ fontSize: '35px' }}>팬플로우 🫰🏻</div>
                </ContentWrapper>
                <CircleWrapper>
                    <Circle>
                        <ContainerWrapper>
                            <ContainerBox>
                                <Container1>
                                    <img src={PersonImg} style={{ width: '100px', marginBottom: '17px' }}></img>
                                    <UserName>신예찬내꺼(님)</UserName>
                                    <UserId>아이디 넣기</UserId>
                                </Container1>
                                <Container2>
                                    <div style={{ fontSize: '20px' }}>지금까지 작성하신 팬로그는</div>
                                    <CountWrapper>
                                        <Count>99개</Count>
                                        <div style={{ fontSize: '20px', marginLeft: '6px' }}>입니다</div>
                                    </CountWrapper>
                                </Container2>
                            </ContainerBox>
                            <SmallContainer>
                                <ButtonWrapper>
                                    <Button width={148} height={39} backgroundColor="#F96C85" hoverColor="#FF4869" content="비밀번호 변경" />
                                    <Button width={148} height={39} backgroundColor="#F96C85" hoverColor="#FF4869" content="닉네임 변경" />
                                </ButtonWrapper>
                            </SmallContainer>
                        </ContainerWrapper>
                    </Circle>
                </CircleWrapper>
            </Wrapper>
        </>
    );
}

const CountWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    margin-top: 10px;
`;

const Count = styled.div`
    font-size: 25px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90px;
`;

const UserId = styled.div`
    font-size: 12px;
    margin-top: 3px;
`;

const UserName = styled.div`
`;

const SmallContainer = styled.div`
    width: 378px;
    height: 238px;
    background-color: #FFDEDE;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container1 = styled.div`
    width: 378px;
    height: 278px;
    background-color: #FFDEDE;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Container2 = styled.div`
    width: 378px;
    height: 278px;
    background-color: #FFDEDE;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 600px;
    margin-right: 50px;
`;

const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 240px;
    margin-left: 300px;
`;

const CircleWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    position: relative;
`;

const Circle = styled.div`
    background-image: url(${CircleImg});
    background-size: cover;
    width: 1200px;
    height: 1000px;
`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 207px;
    margin-left: 200px;
`;

const Wrapper = styled.div`
    height: 91vh;
    display: flex;
    flex-direction: row;
    margin-top: 75px;
    align-items: center;
`;
