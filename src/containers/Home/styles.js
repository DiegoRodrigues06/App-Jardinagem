import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  padding: 1rem;
`;

const Header = styled.header`
  background: linear-gradient(to bottom, #3aa032 0%, #71bf62 40%, #f5f5f5 100%);
  height: 128px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Title = styled.h1`
  font-family: "Jetbrains Mono", "Arial", sans-serif;
  font-size: 2rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export { Container, Title, Description, Header };