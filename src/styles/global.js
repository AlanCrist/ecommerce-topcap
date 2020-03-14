import { createGlobalStyle } from 'styled-components';
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body, #root {
    min-height: 100%;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  body{
    background: #191919;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
