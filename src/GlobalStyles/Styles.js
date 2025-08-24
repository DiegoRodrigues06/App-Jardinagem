import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: "Jetbrains Mono", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    background: url('/src/assets/mine.png') no-repeat center center fixed;
    background-size: cover;
  }
`;

export default GlobalStyle;
