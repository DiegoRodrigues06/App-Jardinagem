import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #fcfbf8;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 1.5rem;
  padding-top: 5rem;
  transition: margin-left 0.3s ease-in-out;

  @media (min-width: 1400px) {
    margin-left: 250px;
    padding: 3rem;
    width: calc(100% - 250px);
  }
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.75rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #475569;
`;

export const GifContainer = styled.div`
  background-color: #e9e1c9ff;
  margin-rigth: ;
  width: fit-content;
  display: flex;
  justify-content: left;
  padding: 2rem;
  border-radius: 10px;
`;