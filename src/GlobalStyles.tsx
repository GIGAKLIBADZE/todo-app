import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Josefin Sans', sans-serif !important;
    }

    body {
        width: 100vw;
        min-height: 100vh;
        padding: 0 0 72px !important;
        background-color: #fafafa !important;
        background-image: url(../public/images/bg-desktop-light.jpg) !important;
        background-repeat: no-repeat;
    }
`;

export default GlobalStyle;
