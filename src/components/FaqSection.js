import React from 'react';
import styled from 'styled-components';
import {About } from '../styles';

const FaqSection = () => {
  return (
    <Faq>
      <h2>Any Questions <span>FAQs</span></h2>
      <div className="question">
        <h4>Kann ich auf dieser Plattform bei 0 anfangen zu programmieren?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.       
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Kann ich auf dieser Plattform bei 0 anfangen zu programmieren?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.       
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Kann ich auf dieser Plattform bei 0 anfangen zu programmieren?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.       
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus!</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Kann ich auf dieser Plattform bei 0 anfangen zu programmieren?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.       
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus!</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  )
};

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
  .faq-line {
    background-color: #ccc;    
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0;
  }
`;

export default FaqSection;