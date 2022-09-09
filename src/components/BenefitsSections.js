import React from 'react';
import HomeIntro2 from '../images/homeIntro2.jpg';

const BenefitsSections = () => {
  return (
    <div className = "benefits">
      <div className="description">
        <h2>High quality learning systems</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </div>
      <img src = {HomeIntro2} alt = "Home Intro" />
    </div>
  )
}

export default BenefitsSections;