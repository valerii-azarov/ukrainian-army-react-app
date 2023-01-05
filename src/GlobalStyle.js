import { createGlobalStyle } from "styled-components";
import eUkraineBoldOTF from "./assets/fonts/e-UkraineHead-Bold.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'e-Ukraine Head Light';
    src: url(${eUkraineBoldOTF});
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'e-Ukraine Head Light';
  }

  @keyframes color {    
    0%  { background: #33CC36; }
    50%  { background: #B8CC33; }
    100%  { background: #33CC36; }
  }

  body {
    animation: color 10s infinite linear;
  }
`;