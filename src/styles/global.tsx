import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body{
    font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
    font-size: 14px;
  }
`;

export default GlobalStyle;