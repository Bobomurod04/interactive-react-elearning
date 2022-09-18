import React, { useState } from 'react'
import { MdEmail, MdLocationOn, MdPhoneAndroid, MdOutlinePhoneEnabled } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import styled from 'styled-components';

//Animations for
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    
    <StyledContact
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <div className="container">
        <h5>Get In Touch</h5>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact__wrapper">
          <div className="r">
            <StyledContactLeft>
              <div className="icon">
                <MdLocationOn />
              </div>
              <h3>Albstadt Ebingen</h3>
            </StyledContactLeft>
            <StyledContactLeft>
              <div className="icon">
                <MdOutlinePhoneEnabled />
              </div>
              <h3>+491639262582</h3>
            </StyledContactLeft>
            <StyledContactLeft>
              <div className="icon">
                <MdPhoneAndroid />
              </div>
              <h3>01639262582</h3>
            </StyledContactLeft>
            <StyledContactLeft>
              <div className="icon">
                <MdEmail />
              </div>
              <h3>bobomurodj@outlook.de</h3>
            </StyledContactLeft>
            <StyledContactLeft>
              <div className="icon">
                <CgWebsite />
              </div>
              <h3>https://bobcoder.netlify.app</h3>
            </StyledContactLeft>
          </div>

          <StyledContactRight>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="name"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="7"
                  cols="50"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </StyledContactRight>
        </div>
      </div>
    </StyledContact>
  )
}

const StyledContact = styled(motion.div)`
color: #fff;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;
  .contact__wrapper {
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
    justify-content: center;
    position: relative;
    padding: 3rem 0;
  }
`;
const StyledContactLeft = styled.div`
  background: #32343c;
  width: 24rem;
  margin: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 25px rgba(1, 1, 1, 0.15);
  border-radius: 8px;
  transition: all 0.3s linear;
  border: 1px solid transparent;
  &:hover {
    background: transparent;
      border-color: #30bee1;
      color: #fff;
    }
  .icon {
    color: #30bee1;
    font-size: 2.45rem;
  }
  h3 {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem;
    letter-spacing: 2px;
  }
`;

const StyledContactRight = styled.div`
  width: 35rem;
  background: #32343c;  
  margin: 20px;
  padding: 1rem 1.5rem;
  box-shadow: 0 5px 25px rgba(1, 1, 1, 0.15);
  border-radius: 8px;
   transition: all 0.3s linear;
  border: 1px solid transparent;
   &:hover {
    background: transparent;
      border-color: #30bee1;
      color: #fff;
    }

  .form-group {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    background: #32343c;
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    border: 1px solid #30bee1;
    transition: all 0.3s linear;
   &:hover {
    background: transparent;
      border-color: #30bee1;
      color: #fff;
    }
  }
  .btn {
    width: 100%;
    margin-top: 0.75rem;
  }
`;

export default Contact;

