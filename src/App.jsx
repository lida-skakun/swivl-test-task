import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import * as Styles from "./App.styles";
import Header from "./components/Header";
import MainDesk from "./components/FeedDesk";
import UserDetails from "./components/UserDetails";

const theme = {
  colors: {
    text: "#3e4056",
    textBright: "#3e3f58",
    gradient: "linear-gradient(to right bottom, #ff974f, #e32c75);",
    lightBackground: "#F7F9FC",
    red: "#f05d63",
  },
  desktop: "1200px",
  laptop: "1025px",
  tablet: "768px",
  mobile: "576px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Styles.GlobalStyle />
        <Header />
        <Styles.Main>
          <UserDetails />
          <MainDesk />
        </Styles.Main>
      </>
    </ThemeProvider>
  );
}

export default App;
