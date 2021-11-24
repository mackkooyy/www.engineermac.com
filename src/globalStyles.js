import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'sans-serif';
  }

  html, body{
    overflow-x: hidden;
    font-size: 15px;
	  line-height: 24px;
	  background: #151515;
    color: #fff;
    font-family: 'Inter', sans-serif;
    background-color: #161719;
    background-attachment: scroll !important;
  }
  div {
    display: block;
  }
`;

export default GlobalStyle;
