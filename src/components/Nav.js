import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';

const Nav = () => {
  return (
    <StyledNav>
      <img src = {Logo} alt="Logo Image" />
      {/* <h1>
        <a href="#" id = "logo">e-Learning</a>
        <img src = {Logo} alt="Logo Image" />
      </h1> */}
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Kurse</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </StyledNav>
  )
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  background-color: #30bee1;
  align-items: center;
  padding: 0 10rem;
  img {
    width: 12rem;
    padding: 0;
  }
  ul {
    display: flex;
    list-style: none;
  }
/* 
  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
  } */

  li {
    padding-left: 5rem;
    position: relative;
    a {
      color: #162850;
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

`;

export default Nav;
