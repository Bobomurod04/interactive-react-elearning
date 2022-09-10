import React from 'react';
import AboutHome from '../images/homeIntro1.jpg';
// import styled from 'styled-components';
import {About, Description, Hide, Image} from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>you <span>can change</span></h2>
          </Hide>
          <Hide>
            <h2>the world</h2>
          </Hide>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus.</p>
        <button>About Us</button>        
      </Description>
      <Image>
        <img src={AboutHome} alt="About Home" />
      </Image>
    </About>
  )
}



export default AboutSection;
