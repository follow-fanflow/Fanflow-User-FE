import styled from "styled-components";
import { Celender } from "../assets/imgs/Icons/celender";
import { theme } from "../styles/theme";

export function Header() {
  return <Celender fill={theme.color.five} />;
}
