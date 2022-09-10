import React from 'react'
import HomeIntro2 from '../images/homeIntro2.jpg'
import styled from 'styled-components'
import { About, Description, Image, Hide } from '../styles'

// Framer-Motion
import { motion } from 'framer-motion'

const BenefitsSections = () => {
  return (
    <Benefits>
      <Image>
        <motion.img
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 360,
            transition: { duration: 3 },
          }}
          initial={{ rotate: 0, scale: 0.2 }}
          src={HomeIntro2}
          alt="Home Intro"
          
        />
      </Image>

      <Description>
        <motion.h2
          animate={{
            x: 0,
            y: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 3 },
          }}
          initial={{ y: -300 }}
        >
          High Quality Learning Systems
        </motion.h2>
        {/* <div className="benefit"> */}
        <Hide>
          <motion.h3
            animate={{
              x: 0,
              y: 1,
              scale: 1,
              rotate: 0,
              transition: { duration: 3 },
            }}
            initial={{ y: -300 }}
          >
            Online platform
          </motion.h3>
          <motion.h3
            animate={{
              x: 0,
              y: 1,
              scale: 1,
              rotate: 360,
              transition: { duration: 3 },
            }}
            initial={{ rotate: 0, x: 300 }}
          >
            High experienced and talented mentors
          </motion.h3>
          <motion.h3
            animate={{
              x: 1,
              y: 1,
              scale: 1,
              rotate: -360,
              transition: { duration: 3 },
            }}
            initial={{ rotate: 0, x: -300 }}
          >
            Fast learning system
          </motion.h3>
          <motion.h3
            animate={{
              x: 0,
              y: 1,
              scale: 1,
              rotate: 0,
              transition: { duration: 3 },
            }}
            initial={{ scale: 1.8, y: 300 }}
          >
            Offline school for children
          </motion.h3>
        </Hide>
        {/* </div> */}
      </Description>
      {/* <img src = {HomeIntro2} alt = "Home Intro" />
      flex-direction: row-reverse; */}
    </Benefits>
  )
}

const Benefits = styled(About)`
  h2 {
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
    border-right: 4px solid #30bee1;
  }
`

export default BenefitsSections
