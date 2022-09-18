import React from 'react';
import styled from 'styled-components';
import {About } from '../styles';
import FaqToggle from './FaqToggle';
import { motion, AnimateSharedLayout } from 'framer-motion';

// FaqToggle

const FaqSection = () => {
  
  return (
    <Faq>
      <h2>Any Questions <span>FAQs</span></h2>
      <AnimateSharedLayout>
        <FaqToggle title="Kann ich auf dieser Plattform bei 0 anfangen zu programmieren?">
          <div className="question">
            <motion.div layout className="answer">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.       
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus!</p>
            </motion.div>
          </div>
        </FaqToggle>
        <FaqToggle title="Kann ich auf dieser Plattform bei 0 anfangen zu programmieren?">
          <div className="question">
            <div className="answer">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.       
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus!</p>
            </div>
          </div>
        </FaqToggle>
        <FaqToggle title="Kann ich auf dieser Plattform bei 0 anfangen zu programmieren?">
          <div className="question">
            <div className="answer">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.       
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus!</p>
            </div>
          </div>
        </FaqToggle>
        <FaqToggle title="Kann ich auf dieser Plattform bei 0 anfangen zu programmieren?">
          <div className="question">
            <div className="answer">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing.       
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus!</p>
            </div>
          </div>
        </FaqToggle>
      </AnimateSharedLayout>      
    </Faq>
  )
};

const Faq = styled(About)`
  display: block;
  h4 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
    /* transition: all 0.3s linear; */
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