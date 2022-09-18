import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #2a2e35;
    font-family: 'SF Pro Display', sans-serif;    
  }

  button {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    background-color: #30bee1;
    padding: 1rem 2rem;
    border: 1px solid #30bee1;
    border-radius: 0.25rem;
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
    font-size: 2rem;
  }

  span {
    color: #30bee1;
    font-weight: bold;
  }
  a {
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
  }

  p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.5rem;
    line-height: 150%;
  }


`;


export default GlobalStyle;