import styled from "styled-components";
import Logoimg from "../assets/imgs/logo1.svg";
import PersonIcon from "../assets/imgs/PersonIcon.svg";
import EyeCloseIcon from "../assets/imgs/closeIcon.svg";
import EyeOpenIcon from "../assets/imgs/openIcon.svg";
import { Speech } from "../components/login/Speech";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
        <Title>로그인</Title>
        <LoginBox>
          <IdWrapper>
            <IdIcon src={PersonIcon}></IdIcon>
            <IdInput placeholder="아이디"></IdInput>
          </IdWrapper>
          <PwWrapper>
            <PwInput
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
            />
            <PwIcon src={showPassword ? EyeOpenIcon : EyeCloseIcon} onClick={handleTogglePassword} />
          </PwWrapper>
          <LoginBtn>로그인</LoginBtn>
          <SpanWrapper>
            <Span>아직 회원이 아니신가요?</Span>
            <SignUpBtn to='/signUp'>회원가입하기</SignUpBtn>
          </SpanWrapper>
        </LoginBox>
      </LoginWrapper>
    </Wrapper>
  );
}

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

const LoginBtn = styled.button`
  width: 262px;
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


const PwIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const PwWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative; /* relative 추가 */
`;

const PwInput = styled.input`
  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.color.gray__1};
  width: 230px;
  height: 30px;
  position: relative;
  padding-left: 10px;
  padding-right: 20px;
  &:focus {
    border: 1.5px solid black;
    outline: none;
  }
`;

const IdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const IdIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`;

const IdInput = styled.input`
  border-radius: 5px;
  border: 1.5px solid ${({ theme }) => theme.color.gray__1};
  width: 230px;
  height: 30px;
  position: relative;
  padding-left: 30px;
  &:focus {
    border: 1.5px solid black;
    outline: none;
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
  margin-top: 30px;
  margin-bottom: 70px;
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

const Comment = styled.div`
  display: flex;
  flex-direction: column;
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
