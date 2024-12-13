import Header from "./components/Header";
import Todos from "./components/Todos";
import GlobalStyles from "../src/GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Todos />
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
`;

export default App;
