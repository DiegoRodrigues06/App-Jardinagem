import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* "top" não existe, use flex-start */
  height: 35rem; 
  width: 30rem;
  padding: 2rem;
  margin: 0;
  border-radius: 0.5rem;
`;

const Subtitle = styled.h3`
  font-family: "Jetbrains Mono", "Arial", sans-serif;
  font-size: 1.5rem;
  color: #000;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #000;
`;


export {
    Container,
    Subtitle,
    Description
}