import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden; // Força a remoção da barra de rolagem horizontal
    box-sizing: border-box;
    font-family: "JetBrainsMono Nerd Font", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    background-color: #c0c0c0;
  }
`;

export default GlobalStyle;
