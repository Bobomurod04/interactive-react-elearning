import React from 'react';

//Animations for
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      Contact
    </motion.div>
  )
}

export default Contact;