import styled from "styled-components";
import Logoimg from "../assets/imgs/logo1.svg";
import person from "../assets/imgs/PersonIcon.svg";
import { Speech } from "../components/login/Speech";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/common/input/Input";

export function Login() {
  const navigation = useNavigate();
  const [loginData, setLoginData] = useState({
    accountId: "",
    passowrd: "",
  });

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement> | string,
    name: string
  ) => {
    const inputValue = typeof e === "string" ? e : e.target.value;
    setLoginData({ ...loginData, [name]: inputValue });
    console.log(loginData);
  }

  const onClickLogin = () => {
    axios
      .post("베이스url/user/login", { ...loginData })
      .then(() => {
        alert("로그인에 성공하셨습니다");
        navigation("/");
        console.log({ ...loginData });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <Wrapper>
      <CommentWrapper>
        <BottomRight>
          <SpeechBox>
            <Speech messege1='OO님' messege2='아 진짜 ~~~ 좋다 이거야' messege3='ㅎ헤헤헷  박우진 버블 와라 박현아가 기다림' />
            <Speech messege1='OO님' messege2='아 진짜 ~~~ 좋다 이거야' messege3='ㅎ헤헤헷  조슈아 알랍유 나랑 결혼하쟈' />
            <Speech messege1='OO님' messege2='아 진짜 ~~~ 좋다 이거야' messege3='ㅎ헤헤헷  박우진 버블 와라 박현아가 기다림' />
            <Speech messege1='OO님' messege2='아 진짜 ~~~ 좋다 이거야' messege3='ㅎ헤헤헷  조슈아 알랍유 나랑 결혼하쟈' />
          </SpeechBox>
        </BottomRight>
      </CommentWrapper>
      <LoginWrapper>
        <Logo src={Logoimg}></Logo>
        <TextWrapper>
          <Title>로그인</Title>
          <Error>※계정을 찾을 수 없습니다</Error>
        </TextWrapper>
        <LoginBox>
          <Input
            type="icon"
            placeholder="아이디"
            onChange={(value) => onChangeInput(value, "accountId")}
            name="accountId"
            Icon={<img src={person} alt="계정"/>}
            width="270px"
          />
          <Input
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={(value) => onChangeInput(value, "password")}
            width="270px"
          />
          <LoginBtn onClick={onClickLogin} to='/'>로그인</LoginBtn>
          <SpanWrapper>
            <Span>아직 회원이 아니신가요?</Span>
            <SignUpBtn to='/signUp'>회원가입하기</SignUpBtn>
          </SpanWrapper>
        </LoginBox>
      </LoginWrapper>
    </Wrapper>
  );
}

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 60px;
`;

const Error = styled.div`
  color: ${({ theme }) => theme.color.red_1};
  font-size: 10px;
`;

const BottomRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpeechBox = styled.div`
  width: 540px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > :nth-child(2n) {
    margin-left: 200px;
  }
`;

const SignUpBtn = styled(Link)`
  font-size: 13px;
  color: ${({ theme }) => theme.color.two};
  text-decoration: none;
`;

const Span = styled.div`
  font-size: 13px;
`;

const SpanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;

const LoginBtn = styled(Link)`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-decoration: none;
  width: 270px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.zero};
  color: white; 
  font-size: 13px;
  border: none; 
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.color.one};
  }
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 23px;
`;

const Logo = styled.img`
  width: 50px;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 480px;
  border: solid ${({ theme }) => theme.color.gray__1} 1px;
  border-radius: 10px;
  margin: auto;
  display: flex;
  align-items: center;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 43%;
  background-color: #ffdede;
  padding: 30px;
  box-sizing: border-box;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
