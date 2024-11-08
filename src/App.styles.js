import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1440px;
    color: #3e4056;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Open Sans", Roboto,
      Oxygen, Ubuntu, Cantarell, "Segoe UI", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F7F9FC;
  }
`;

export const Main = styled.main`
  padding: 40px 136px;
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
