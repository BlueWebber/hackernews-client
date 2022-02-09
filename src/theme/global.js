import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }

  :root {
    background-color: ${({ theme }) => theme.colors.main};
  }

  body {
    padding: 0;
    margin: 0.3rem;
    font-family: Verdana, Geneva, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.primary};
    max-width: 1650px;
    margin: auto;
  }

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
  }
`;

export default GlobalStyle;
