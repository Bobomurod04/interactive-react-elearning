import React from 'react'
import AboutHome from '../images/homeIntro1.jpg'
// import styled from 'styled-components';
import { About, Description, Hide, Image } from '../styles'

// Framer-Motion
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2
              animate={{
                x: 0,
                y: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 3 },
              }}
              initial={{ scale: 1.8, y: -300 }}
            >
              Be educated so that
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              animate={{
                x: 1,
                y: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 3 },
              }}
              initial={{ x: -300 }}
            >
              you <span>can change</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              animate={{
                x: 0,
                y: 1,
                scale: 1,
                rotate: 0,
                transition: { duration: 3 },
              }}
              initial={{ scale: 1.8, y: 300 }}
            >
              the world
            </motion.h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus.
        </p>
        <button>About Us</button>
      </Description>
      <Image>
        <motion.img
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: { duration: 3 },
          }}
          initial={{ scale: 0.2 }}
          src={AboutHome}
          alt="About Home"
        />
      </Image>
    </About>
  )
}

export default AboutSection
