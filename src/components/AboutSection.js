import React from 'react';
import AboutHome from '../images/about.png';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <About>
      <Discription>
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
      </Discription>
      <Image>
        <img src={AboutHome} alt="About Home" />
      </Image>
    </About>
  )
}

// Styled Components

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
`;

const Discription = styled.div`
  flex: 1;
  padding-right: 5rem;
`;


const Image = styled.div`
  flex: 1;
  padding-left: 5rem;
  overflow: hidden;
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const Hide = styled.div`
 overflow: hidden;
`;

export default AboutSection;
