import styled from "styled-components";
import { Icon } from "../assets/imgs/Icons/celender";
import { theme } from "../styles/theme";

interface IconProps {
  stroke: string;
}

export function Header() {
  return <Icon src={Icon} stroke={theme.color.four} color={theme.color.five} />;
}

const Icon = styled.img<IconProps>`
  color: ${({ theme }) => theme.color.Red_1};
  stroke: ${({ stroke }) => theme.color.one};
`;
