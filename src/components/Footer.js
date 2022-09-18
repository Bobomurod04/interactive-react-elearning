import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.png';

const Footer = () => {
  let year = new Date().getUTCFullYear();
  return (
    <StyledFooter>
      <Link to = '/'>
        <img src={Logo} alt="Logo Image" />
      </Link>
      <p> &copy;{year} Bobomurod Jabbarov</p>
    </StyledFooter>
  )
};

const StyledFooter = styled.footer`
  min-height: 5rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background-color: #30bee1;
  align-items: center;
  img {
    width: 12rem;
    padding: 0;
  }
  p {
    color: #162850;
    padding: 0 4rem;
  }
`;

export default Footer;