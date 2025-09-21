import styled from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  primary: "#c7e0be", 
  primaryDark: "#b4d6a9", 
  background: "#a5c8ca",
  background2: "#e3e5d7", 
  formBackground: "#ffffff", 
  text: "#333333", 
  textLight: "#7f8c8d", 
  border: "#bdc3c7", 
  white: "#fff"
};

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1.5rem;
  padding-top: 5rem;
  transition: margin-left 0.3s ease-in-out;

  @media (min-width: 1024px) {
    margin-left: 250px;
    padding: 3rem;
    width: calc(100% - 250px);
  }
`;

const MenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 30;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  color: #475569;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavbarContainer = styled.aside`
  width: 250px;
  background-color: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};

  @media (min-width: 1024px) {
    transform: translateX(0);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
  color: ${colors.text};
`;

const LogoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const NavLinks = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: #475569;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f1f5f9;
    color: ${colors.text};
  }

  &.active {
    background-color: #eef2ff;
    color: ${colors.text};
  }
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;
  margin-top: auto;
  border-top: 1px solid #e2e8f0;
`;
  
const Button = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  display: inline-block;
  background-color: ${({ primary }) => (primary ? "#71acafff" : "white")};
  color: ${({ primary }) => (primary ? "white" : "#71acafff")};
  border: 1px solid ${({ primary }) => (primary ? "#71acafff" : "#cbd5e1")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#5b8b8dff" : "#f8fafc")};
  }
`;



export { AppContainer, 
         MainContent, 
         MenuButton, 
         Overlay, 
         NavbarContainer, 
         LogoContainer, 
         LogoTitle, 
         NavLinks, 
         NavLink, 
         UserActions, 
         Button };