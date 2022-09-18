import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Logo from '../images/logo.png'
import { motion } from 'framer-motion'

const Nav = () => {
  const {pathname} = useLocation();
  return (
    <StyledNav>
      <Link to="/">
        <img src={Logo} alt="Logo Image" />
      </Link>
      <ul>
        <li>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 1.0 }}
            initial={{ width: "0%" }}
            animate = {{ width: pathname==="/" ? "57%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/courses">Courses</Link>
          <Line
            transition={{ duration: 1.0 }}
            initial={{ width: "0%" }}
            animate = {{ width: pathname==="/courses" ? "54%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 1.0 }}
            initial={{ width: "0%" }}
            animate = {{ width: pathname==="/contact" ? "55%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  )
}

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

  li {
    padding-left: 5rem;
    position: relative;
    a {
      color: #162850;
      font-size: 1.25rem;
      font-weight: 500;
    }
    .active {
      color: crimson;
    }
  }
`
const Line = styled(motion.div)`
  height: 0.2rem;
  border-radius: 0.5rem;
  background-color: orange;
  position: absolute;
  bottom: -40%;
  left: 50%;
`;

export default Nav;
