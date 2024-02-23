import styled from "styled-components";
import logo from "../assets/imgs/logo1.svg";
import { theme } from "../styles/theme";
import Button from "../components/common/button/Button";

export const NotFound = () => {
  return (
    <Wrap>
      <Logo>
        <img src={logo} alt="로고" />
      </Logo>
      <Not>404</Not>
      <PageText>페이지를 찾을 수 없습니다</PageText>
      <Detail>
        링크가 잘못되었거나, 삭제된 페이지입니다. 주소를 다시 한번 확인해주세요
      </Detail>
      <Button content="메인화면" to="/" />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;

const Logo = styled.div``;

const Not = styled.p`
  color: ${theme.color.four};
  font-size: 40px;
`;

const PageText = styled.p`
  font-size: 32px;
`;

const Detail = styled.p`
  font-size: 24px;
`;
