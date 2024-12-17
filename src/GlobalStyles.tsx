import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ $theme: boolean }>`
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
        background-color: ${({ $theme }) => ($theme ? "#fafafa" : "#171823")};
        background-image: ${({ $theme }) =>
          $theme
            ? "url(../public/images/bg-mobile-light.jpg)"
            : "url(../public/images/bg-mobile-dark.jpg)"};
        background-repeat: no-repeat;  
        background-position: center top;
        background-size: contain;

        @media (min-width: 1440px) {    
            padding: 70px 450px 52px 450px;
            background-image: ${({ $theme }) =>
              $theme
                ? "url(../public/images/bg-desktop-light.jpg)"
                : "url(../public/images/bg-desktop-dark.jpg)"};;
        }
        
    }
`;

export default GlobalStyle;
