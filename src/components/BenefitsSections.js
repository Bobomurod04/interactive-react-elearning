import React from 'react';
import HomeIntro2 from '../images/homeIntro2.jpg';
import styled from 'styled-components';
import {About, Description, Image } from '../styles';

const BenefitsSections = () => {
  return (
    <Benefits>
      <Image>
        <img src = {HomeIntro2} alt = "Home Intro" />
      </Image>
      
      <Description>
        <h2>High Quality Learning Systems</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      {/* <img src = {HomeIntro2} alt = "Home Intro" />
      flex-direction: row-reverse; */}
    </Benefits>
  )
}

const Benefits = styled(About)`
  
  h2{
    color: #30bee1;
    font-size: 2.75rem;
    padding-bottom: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
    padding: 0.75rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1.25rem 0;
    width: 70%;
    clip-path: polygon(0 10%, 100% 0, 100% 91%, 0 100%);
    border-left: 4px solid #30bee1;
  }
`

export default BenefitsSections;