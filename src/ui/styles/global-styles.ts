import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 60px 0 0 70px;
    font-family: Poppins, 'sans-serif';
    overflow: hidden;
    background-color: #efefef;
  }

  root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

export default GlobalStyle;