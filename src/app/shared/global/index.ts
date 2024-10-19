import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --toastify-toast-width: 40%;
    --toastify-color-warning: #ff9100;
    --red: #ff4f4f;

    --azul-escuro: #070b13;
    --azul-marinho: #0a0f2b;
    --azul: #111c30;
    --azul-claro: #16243d;

    --pink-theme: #be267a;

    --white-theme: #c1c2c2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #f2f5f9;
    overflow: auto;
    height: 100vh;
    font-family: "Montserrat", sans-serif;
  }

  body,
  input,
  textarea,
  select {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 160%;
  }

  button {
    font-family: "Montserrat", sans-serif !important;
    font-weight: 600;
    line-height: 160%;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }

  ul,
  li,
  a {
    text-decoration: none;
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    border: 1px solid #000000;
    margin-left: 0.938em;
    margin-right: 0.938em;
    border-radius: 3px;
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background: #161c23;
    border-radius: 3px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.5;
  }

  [disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
