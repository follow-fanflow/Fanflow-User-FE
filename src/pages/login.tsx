import styled from "styled-components";
import Logoimg from "../assets/imgs/logo1.svg";
import PersonIcon from "../assets/imgs/PersonIcon.svg";
import EyeCloseIcon from "../assets/imgs/closeIcon.svg";
import EyeOpenIcon from "../assets/imgs/openIcon.svg";
import React, { useState } from "react";

// test

export function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Wrapper>
            <CommentWrapper>
                <Comment>
                    <Name></Name>
                    <Content></Content>
                </Comment>
            </CommentWrapper>
            <LoginWrapper>
                <Logo src={Logoimg}></Logo>
                <Title>로그인</Title>
                <InputWrapper>
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
                </InputWrapper>
            </LoginWrapper>
        </Wrapper>
    );
}

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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const Name = styled.div``;
const Content = styled.div``;

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
