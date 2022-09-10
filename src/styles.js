import styled from 'styled-components';

// Styled Components

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`;


export const Image = styled.div`
  flex: 1;  
  overflow: hidden;
  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Hide = styled.div`
 overflow: hidden;
`;