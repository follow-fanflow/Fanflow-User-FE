import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "SOYOMapleBoldTTF";
        user-select: none;
    }

    input, textarea, button {
        // order: none;
        outline: none;
        resize: none;
    }
`;
