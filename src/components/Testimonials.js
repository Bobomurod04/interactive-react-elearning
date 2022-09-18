import { useState } from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'
import { testimonials } from '../dataState'
import styled from 'styled-components'

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const { name, quote, job, avatar } = testimonials[index]

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1)

    if (index <= 0) {
      setIndex(testimonials.length - 1)
    }
  }

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1)

    if (index >= testimonials.length - 1) {
      setIndex(0)
    }
  }

  return (
    <StyledTestimonials>
      <div className="head">
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>
      </div>
      
      <Card>        
        <Avatar>
          <img src={avatar} alt={name} />
        </Avatar>
        <p className="testimonial__quote">{`"${quote}"`}</p>
        <h4>{name}</h4>
        <small className="testimonial__title">{job}</small>
      </Card>
     
      <Btn>
        <h3 className="testimonials__btn" onClick={prevTestimonialHandler}>
          <IoIosArrowDropleftCircle />
        </h3>
        <h3 className="testimonials__btn" onClick={nextTestimonialHandler}>
          <IoIosArrowDroprightCircle />
        </h3>
      </Btn>
    </StyledTestimonials>
  )
}

const StyledTestimonials = styled.div`
  width: 50rem;
  margin-inline: auto;
  text-align: center;
  margin: 3rem auto;
  .head {
    margin-bottom: 2rem;
  }
`
const Card = styled.div`
  background: #32343c;
  border: 2px solid transparent;
  text-align: center;
  padding: 0 2rem 2rem;
  border-radius: 0 3rem 0 3rem;
  transition: all 0.3s linear;
  margin-bottom: 0.5rem;
  &:hover {
    background: transparent;
    border-color: #000;
    cursor: default;
  }
  .testimonial__quote {
    margin-top: -2rem;
  }
`

const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1.5rem;
  border: 2px solid #000;
  overflow: hidden;
  position: relative;
  top: -2rem;
  left: calc(50% - 2rem); 
`;

const Btn = styled.div`
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  .testimonials__btn {
    background: transparent;
    cursor: pointer;
  }

  .testimonials__btn svg {
    color: #30bee1;
    width: 3rem;
    height: 3rem;
  }
`

export default Testimonials;
