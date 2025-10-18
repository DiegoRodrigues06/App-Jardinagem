import styled from "styled-components";
import { Link } from "react-router-dom";

const colors = {
    primary: "#c7e0be", // Azul principal
    primaryDark: "#b4d6a9", // Azul para hover
    background: "#a5c8ca",
    background2: "#e3e5d7", // Fundo da página (cinza claro)
    formBackground: "#ffffff", // Fundo do formulário (branco)
    text: "#333333", // Cor principal do texto
    textLight: "#7f8c8d", // Cor de texto sutil
    border: "#bdc3c7", // Cor da borda
};

// Container principal que centraliza tudo na página
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(100deg, ${colors.background} 0%, ${colors.background2} 100%);
`;

// A "caixa" do formulário de login
export const LoginBox = styled.div`
  background-color: ${colors.formBackground};
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  font-family: 'notosans', Tahoma, Geneva, Verdana, sans-serif;
`;

// Título "Login"
export const Title = styled.h1`
  color: ${colors.text};
  margin-bottom: 2rem;
  font-size: 2rem;
`;

// O formulário em si
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento entre os inputs e o botão */
`;

// Estilo para os inputs de texto e senha
export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

// Estilo para o botão de "Entrar"
export const Button = styled.button`
  background-color: ${colors.primary};
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;

// Estilo para o link "Voltar para Home"
export const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  color: ${colors.textLight};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;

  &:hover {
    color: ${colors.text};
    text-decoration: underline;
    text-decoration: none;
  }
`;

export default {
    PageContainer,
    LoginBox,
    Title,
    Form,
    Input,
    Button,
    StyledLink
};