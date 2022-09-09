import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #2a2e35;
  }

  button {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    background-color: #ffe45c;
    padding: 1rem 2rem;
    border: 1px solid #ffe45c;
    border-radius: 0.75rem;
    color: #2a2e35;
    transition: all 0.3s linear;
    &:hover {
      background-color: transparent;
      color: #fff;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  h3 {
    color: #fff;
  }
  h4 {
    font-weight: bold;
  }

  span {
    color: #ffe45c;
    font-weight: bold;
  }
  a {
    font-size: 1rem;
  }

  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.5rem;
    line-height: 150%;
  }


`


export default GlobalStyle;