import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SpoqaHanSansNeo";
    src: url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Thin.woff2") format("woff2"), 
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Thin.woff") format("woff"),
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Thin.ttf") format("truetype");
    font-weight: 200;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo";
    src: url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Light.woff2") format("woff2"), 
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Light.woff") format("woff"),
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Light.ttf") format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo";
    src: url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Regular.woff2") format("woff2"), 
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Regular.woff") format("woff"),
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Regular.ttf") format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo";
    src: url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Medium.woff2") format("woff2"), 
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Medium.woff") format("woff"),
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Medium.ttf") format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "SpoqaHanSansNeo";
    src: url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Bold.woff2") format("woff2"), 
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Bold.woff") format("woff"),
         url("/fonts/SpoqaHanSansNeo_TTF_subset/SpoqaHanSansNeo-Bold.ttf") format("truetype");
    font-weight: 600;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  

  body {
    font-family: "SpoqaHanSansNeo", sans-serif;
    font-weight: 400;
  }

  button{
    cursor: pointer;
  }

  input{
    outline: none;
  }
  input:focus::placeholder{
    color: transparent;
    outline: none;
  }
`;

export default GlobalStyle;
