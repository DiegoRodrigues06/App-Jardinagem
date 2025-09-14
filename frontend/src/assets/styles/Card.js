import styled from "styled-components";

export const colors = {
  primary: "#c7e0be", // Azul principal
  primaryDark: "#b4d6a9", // Azul para hover
  background: "#a5c8ca",
  background2: "#e3e5d7", // Fundo da página (cinza claro)
  formBackground: "#ffffff", // Fundo do formulário (branco)
  text: "#333333", // Cor principal do texto
  textLight: "#7f8c8d", // Cor de texto sutil
  border: "#bdc3c7", // Cor da borda
  white: "#fff"
};

// ----------------- CARD -----------------
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  &.add {
    background-color: transparent;
    border: 2px dashed #cbd5e1;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    min-height: 300px;
    color: #64748b;
    text-align: center;

    &:hover {
      border-color: ${colors.primary};
      color: ${colors.text};
      background-color: #f8fafc;
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
`;

const CardButton = styled.button`
  margin-top: auto;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  background-color: #4338ca;
  color: white;
  border: 1px solid #4338ca;
  font-family: 'Poppins', sans-serif;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3730a3;
  }
`;

// ----------------- HOME -----------------
const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const HomeTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e293b;
`;

const HomeButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  background-color: ${colors.text};
  color: white;
  border: 1px solid: ${colors.text};
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: #5f6969ff;
    transition: background-color 0.5s ease;;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export { Card, CardImage, CardContent, CardTitle, CardDescription, CardButton, HomeHeader, HomeTitle, HomeButton, HomeGrid };