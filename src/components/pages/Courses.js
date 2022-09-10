import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import Image
import RR from '../../images/reactjs-redux.png'
import RR2 from '../../images/react-redux-2.webp'

//Animations for
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';

const Courses = () => {
  return (
    <StyledCourses
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Course>
        <h2>Interactive React and Redux</h2>
        <div className="line"></div>
        <Link to="/courses/react">
          <img src={RR} alt="react-redux" />
        </Link>
      </Course>
      <Course>
        <h2>Interactive React and Redux</h2>
        <div className="line"></div>
        <Link to="/courses/soon">
          <img src={RR2} alt="react-redux" />
        </Link>
      </Course>
      <Course>
        <h2>Interactive React and Redux</h2>
        <div className="line"></div>
        <Link to="/courses/js">
          <img src={RR} alt="react-redux" />
        </Link>
      </Course>
    </StyledCourses>
  )
}

const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  padding: 10rem;
  h2 {
    padding-bottom: 2rem;
    font-size: 3rem;
  }
`
const Course = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.25rem;
    background-color: #ccc;
    margin-bottom: 2rem;
  }
  img {
    width: 70%;
    /* height: 70vh; */
    /* object-fit: cover; */
  }
`

export default Courses
