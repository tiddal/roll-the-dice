import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body, input, button {
    font-family: 'Mulish', Roboto, Arial, Helvetica, sans-serif;
  };
  body{
    height: 100vh;
    width: 100vw;
    display: grid;
    align-content: center;
    justify-content: center;
  };
`;

export default GlobalStyle;
