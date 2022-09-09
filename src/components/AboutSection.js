import React from 'react';
import AboutHome from '../images/about.png';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Be educated so that</h2>
          </div>
          <div className="hide">
            <h2>you can change</h2>
          </div>
          <div className="hide">
            <h2>the world</h2>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus.</p>
        <button>About Us</button>        
      </div>
      <div className="image">
        <img src={AboutHome} alt="About Home" />
      </div>
    </div>
  )
}

export default AboutSection;
