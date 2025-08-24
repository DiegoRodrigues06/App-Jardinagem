import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  min-height: 100vh; 
  padding: 2rem;
  margin: 0;
`;

const Header = styled.header`
  background: linear-gradient(to bottom, #121e0f 0%, #253c1f 50%, #f5f5f5 100%);
  height: 8.3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start 1rem;
  color: white;
`;

const Title = styled.h1`
  font-family: "Jetbrains Mono", "Arial", sans-serif;
  font-size: 2rem;
  color: #f5f5f5;
`;

const Subtitle = styled.h3`
  font-family: "Jetbrains Mono", "Arial", sans-serif;
  font-size: 1.5rem;
  color: #f5f5f5;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #f5f5f5;
`;

export { Container, Title, Subtitle, Description, Header };