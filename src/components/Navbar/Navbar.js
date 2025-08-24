import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 15rem;
  background: #121e0f;
  display: flex;
  flex-direction: column;  /* Mudei para column */
  align-items: center;
  padding: 1rem;
  height: 99vh;
  position: fixed;  /* Fixa na lateral */
  left: 0;         /* Coloca na direita */
  top: 0;
  color: #fff;
  border-radius: 0;
  margin: 0.3rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  overflow-y: auto;  /* Permite scroll se necessário */

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    position: relative;
    flex-direction: row;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  background-color: #f5f5f5;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;  /* Espaço abaixo do logo */
  
  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 600px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;  /* Coluna em vez de linha */
  gap: 1rem;
  flex: 1;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: underline;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: auto;  /* Empurra para a base */

  @media (max-width: 600px) {
    flex-direction: row;
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #253c1f;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background: #e0e0e0;
  }

  @media (max-width: 600px) {
    width: auto;
  }
`;


export {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  Button,
  ButtonContainer
}