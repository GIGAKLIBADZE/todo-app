import Header from "./components/Header";
import Todos from "./components/Todos";
import GlobalStyles from "../src/GlobalStyles";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <>
      <GlobalStyles $theme={theme} />
      <Header theme={theme} setTheme={setTheme} />
      <Todos theme={theme} />
      <FooterText>Drag and drop to reorder list</FooterText>
    </>
  );
}

const FooterText = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #9495a5;
  text-align: center;
  margin-top: 40px;

  @media (min-width: 1440px) {
    margin-top: 49px;
  }
`;

export default App;
