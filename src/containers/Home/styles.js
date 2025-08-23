import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Jetbrains Mono", "Arial", sans-serif;
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export { Container, Title, Description };