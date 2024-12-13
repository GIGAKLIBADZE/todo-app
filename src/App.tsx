import Header from "./components/Header";
import Todos from "./components/Todos";
import GlobalStyles from "../src/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Todos />
      <p>Drag and drop to reorder list</p>
    </>
  );
}

export default App;
