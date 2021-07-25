import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: -webkit-fill-available;
  }

  body {
    margin: 0;
    overscroll-behavior: none;
    font-family: 'Gentleman', Arial, -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.02px;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  *, :after, :before { box-sizing: border-box; }

  html, body, #root {
    scroll-behavior: smooth;
    min-height: -webkit-fill-available;
    height: 100%;
    overflow: hidden;
    font-feature-settings:"liga" 0;
  }

  body {
    scroll-behavior: smooth;
    min-height: -webkit-fill-available;
    height: 100%;
    overflow: auto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    width: 100vw;
    max-width: 100vw;
  }

  .layout {
    display: flex;
    height: 100%;
    background: ${({theme}) => theme.dark || 'black'};
    flex-direction: column;
    overflow: auto;
    max-width: 100%;
    margin: 0 auto;
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: right 20px top 20px;
    overflow-x: hidden;
  }

  label {
    margin-bottom: 0;
  }

  input, textarea, select {
    letter-spacing: 0.02px;
  }

  textarea {
    -webkit-transform: translateZ(0px)!important;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  .invisible {
    visibility:hidden!important;
    text-shadow:none!important;
    box-shadow:none!important
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 .5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  h1 {
    font-size:2.5rem
  }

  h2 {
    font-size:2rem
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size:1.5rem
  }

  h5 {
    font-size:1.25rem
  }

  h6 {
    font-size:1rem
  }

  h6 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
  }

  img, svg {
    vertical-align: middle;
  }

  img {
    border-style: none;
  }

  button {
    cursor: pointer;
  }

  button, input {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button:active, button:focus {
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;
