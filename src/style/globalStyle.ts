import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    box-sizing: border-box;
  }
  input {
    border: none;
    outline: none;
  }
  input:focus {
    border-bottom: 2px solid rgb(103, 58, 183);;
  }
`;

export default GlobalStyle;
