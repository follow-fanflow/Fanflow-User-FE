import styled from "styled-components";
import { Celender } from "../assets/imgs/Icons/celender";
import { GroupIcon } from "../assets/imgs/Icons/peopleGroup";
import { theme } from "../styles/theme";
import textLogo from "../assets/imgs/textLogo.svg";
import { NoteBook } from "../assets/imgs/Icons/noteBook";
import { MapIcon } from "../assets/imgs/Icons/mapIcon";
import profile from "../assets/imgs/profile.svg";
import { useNavigate } from "react-router-dom";

interface NavProps {
  selectedNav: "introduction" | "fanlog" | "schedule" | "map";
  to: string;
}

const NavWrapper = styled.div<{ selected: boolean }>`
  color: ${({ selected }) =>
    selected ? theme.color.black_1 : theme.color.three};
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.color.one};
  }
`;

const Nav = ({
  selectedNav,
  to,
  children,
}: React.PropsWithChildren<NavProps>) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <NavWrapper selected={selectedNav === to} onClick={handleClick}>
      {children}
    </NavWrapper>
  );
};
interface HeaderProps {
  selectedNav: "introduction" | "fanlog" | "schedule" | "map";
}

export const Header = ({ selectedNav }: HeaderProps) => {
  return (
    <>
      <Layout>
        <Left>
          <img src={textLogo} alt="" />
          <NavWrap>
            <Nav selectedNav={selectedNav} to="/introduce">
              <GroupIcon />
              소개
            </Nav>
            <Nav selectedNav={selectedNav} to="/fanlog">
              <NoteBook />
              팬로그
            </Nav>
            <Nav selectedNav={selectedNav} to="/schedule">
              <Celender />
              스케줄
            </Nav>
            <Nav selectedNav={selectedNav} to="/map">
              <MapIcon />
              생카지도
            </Nav>
          </NavWrap>
        </Left>
        <img src={profile} alt="" />
      </Layout>
    </>
  );
};

const Layout = styled.div`
  padding: 20px 28px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  gap: 300px;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 44px;
`;
