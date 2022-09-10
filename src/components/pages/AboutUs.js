import React from 'react'
import AboutSection from '../AboutSection'
import BenefitsSections from '../BenefitsSections'
import FaqSection from '../FaqSection'
//Animations for
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <BenefitsSections />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs
