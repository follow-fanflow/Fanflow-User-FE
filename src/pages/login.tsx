import styled from "styled-components";
import Logoimg from "../assets/imgs/logo1.svg";
// import { theme } from "../styles/theme";

export function Login() {
<<<<<<< Updated upstream
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
      </LoginWrapper>
      {/* <Ani theme={theme}></Ani> */}
    </Wrapper>
  );
}

=======
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
                    <Id ></Id>
                </InputWrapper>
            </LoginWrapper>
            {/* <Ani theme={theme}></Ani> */}
        </Wrapper>
    );
}

const Id = styled.input``;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Title = styled.div`
    font-size: 26px;
`;


>>>>>>> Stashed changes
const Logo = styled.img`
  width: 50px;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

// const Ani = styled.div`
//     width: 30px;
//     height: 30px;
//     background-color: ${({ theme }) => theme.color.two};
// `;
