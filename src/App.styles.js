import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #3e4056;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Open Sans", Roboto,
      Oxygen, Ubuntu, Cantarell, "Segoe UI", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.lightBackground};
  }
`;

export const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 110px;
  display: grid;
  gap: 60px;
  grid-template-columns: auto auto auto;

  @media (max-width: ${({ theme }) => theme.desktop}) {
    gap: 30px;
    padding: 40px 80px;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;
