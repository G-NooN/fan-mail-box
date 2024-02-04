import { GlobalStyle } from "components/styles/GlobalStyle";
import Header from "components/layout/Header";
import Router from "shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
    </>
  );
}

export default App;
