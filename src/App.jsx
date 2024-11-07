import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import MainDesk from "./components/MainDesk/MainDesk";
import UserDetails from "./components/UserDetails";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1440px;
    color: #3e4056;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Open Sans", Roboto,
      Oxygen, Ubuntu, Cantarell, "Segoe UI", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <UserDetails />
      <MainDesk />
    </>
  );
}

export default App;
