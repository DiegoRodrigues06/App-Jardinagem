import styled from "styled-components";

// Definição de cores para fácil manutenção
const colors = {
  darkDarkBlue: "#051229ff",
  darkBlue: "#586875",
  lightBlue: "#a5c8ca",
  green: "#BDD6D2",
  lightGreen: "#E3E5D7",
  yellow: "#F6EDDC",
  white: "#FFFFFF",
  black: "#000000",
  darkGray: "#424242",
};

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.div`
  margin-left: 15rem; 
  width: 100%;

  @media (max-width: 800px) {
    margin-left: 0;
    transition: margin-left 0.25s ease-in-out;
  }

  /* Quando a tela for menor que 600px, a navbar fica em cima */
  @media (max-width: 600px) {
    margin-left: 0; /* Remove a margem da esquerda */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; /* Alinhamento ao topo */
  min-height: 100vh;
  padding: 4rem;
  margin: 0;
  background-color: ${colors.white}; /* Fundo branco para a página */
`;

const Header = styled.header`
  background-color: ${colors.darkDarkBlue};
  background-opacity: 0.9;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo */
  color: ${colors.white};
  padding: 2rem; /* Define a altura pelo padding */
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif; /* Fonte moderna */
  font-size: 2.5rem;
  color: ${colors.white};
  margin: 0;
`;

const Subtitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  color: ${colors.darkGray};
  margin: 0.5rem 0 0 0;
`;

const Description = styled.p`
  font-family: "Roboto", sans-serif; /* Fonte legível para o corpo */
  font-size: 1.2rem;
  color: ${colors.darkGray};
  text-align: center;
`;

export {
   Container,
   Title,
   Subtitle,
   Description,
   Header,
   MainContent,
  PageContainer
  }; 