import { createGlobalStyle } from "styled-components";
import fontR from "../asset/font/SOYO Maple Regular.ttf"
import fontB from "../asset/font/SOYO Maple Bold.ttf";

export const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: "SOYO-Maple";
        src: local("SOYO Maple Regular"),
        url(${fontR}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "SOYO-Maple";
        src: local("SOYO Maple Bold"), 
        url(${fontB}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
`