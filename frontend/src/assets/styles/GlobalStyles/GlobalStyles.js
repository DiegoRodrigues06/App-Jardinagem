import { createGlobalStyle } from "styled-components";

// ----------------- GLOBAL STYLES -----------------
const GlobalStyle = createGlobalStyle`
 

  body {
    margin: 0;
    padding: 0;
    font-family: 'notosans', sans-serif;
    background-color: #f8fafc;
    color: #475569;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

  a, button {
    font-family: inherit;
    border: none;
    background: none;
  }
`;

export default GlobalStyle;
