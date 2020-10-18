import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.4;
  }

  html, body {
    width: 100vw;

    overflow-x: hidden;
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.black}
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
