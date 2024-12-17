import Header from "./components/Header";
import Todos from "./components/Todos";
import GlobalStyles from "../src/GlobalStyles";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <>
      <GlobalStyles $theme={theme} />
      <Header theme={theme} setTheme={setTheme} />
      <Todos theme={theme} />
    </>
  );
}

export default App;
