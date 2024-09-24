import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    //* 폰트
  }

  button{
    cursor: pointer;
  }

  input{
    outline: none;
  }
  
  input:focus::placeholder{
    color: transparent;
  }
`;

export default GlobalStyle;
