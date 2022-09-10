import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { CourseState } from '../../dataState'

const CourseDetail = () => {
  const history = useHistory()
  const url = history.location.pathname
  const [courses, setCourses] = useState(CourseState)
  const [course, setCourse] = useState(null)

  // useEffect 12V
  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url,
    )
    setCourse(currentCourse[0])
  }, [courses, url])

  return (
    <>
      {course && (
        <Details>
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="Notebook" />
          </Header>
          <Awards>
            {course.awards.map((award) => (
              <Award
                key={award.title}
                title={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={course.secondaryImg} alt="developer" />
          </ImageDisplay>
        </Details>
      )}
    </>
  )
}

// Awerd Component
const Award = ({title, description}) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
  </StyledAward>
  )  
}

// Styled Component

const Details = styled.div`
  color: #fff;
`;
const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Header = styled.div`
  min-height: 90vh;
  padding-top: 10vh;
  position: relative;
  h2 {
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const Awards = styled.div`
min-height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem;
`;

const StyledAward = styled.div`
  padding: 4rem;
  h3 {
    font-size: 2em;
  }
  .line {
    width: 100%;
    height: 0.25rem;
    background: #30bee1;
    margin: 1.25rem 0;
  }
  p {
    padding: 2rem 0;
  }

`;

export default CourseDetail
