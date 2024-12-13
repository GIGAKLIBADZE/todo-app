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
        display: flex;
        justify-content: center;
        width: 100vw;
        min-height: 100vh;
        padding: 48px 24px 72px 24px !important;
        background-color: #fafafa !important;
        background-image: url(../public/images/bg-mobile-light.jpg) !important;
        background-repeat: no-repeat;  
        background-position: center top;
        background-size: contain;
        
    }
`;

export default GlobalStyle;
