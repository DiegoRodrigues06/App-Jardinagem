import styled from "styled-components";

const colors = {
  darkDarkBlue: "#010409",
  darkBlue: "#586875",
  lightBlue: "#a5c8ca",
  green: "#BDD6D2",
  lightGreen: "#E3E5D7",
  yellow: "#F6EDDC",
  white: "#FFFFFF",
  black: "#000000",
  darkGray: "#424242",
};

const NavbarContainer = styled.div`
  width: 15rem;
  background-color: ${colors.lightBlue}; /* Cor mais clara */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100vh; /* Altura total da tela */
  position: fixed;
  left: 0;
  top: 0;
  color: ${colors.darkGray};
  box-sizing: border-box;
  overflow-y: auto;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    transform: translateX(${props => (props.open ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    position: relative;
    flex-direction: row;
    padding: 1rem;
    transform: translateX(${props => (props.open ? '0' : '0rem')});
    transition: transform 0s;

  }
`;

const Logo = styled.div`
  background-color: ${colors.white};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 600px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;
 
const AltLogo = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: "Segoe Print";
  color: ${colors.white};

  @media (max-width: 600px) {
    margin-top: 0;
    margin-right: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
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

const ButtonNav = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 600px) {
    flex-direction: row;
    margin-top: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: auto;

  @media (max-width: 600px) {
    flex-direction: row;
    margin-top: 1rem;
  }
`;

const Button = styled.button`
  background: ${colors.darkBlue};
  color: ${colors.white};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${colors.lightGreen};
    color: ${colors.darkGray};
  }

  &:active {
    background: #004d40;
  }

  @media (max-width: 600px) {
    width: auto;
  }
`;

export {
  NavbarContainer,
  Logo,
  AltLogo,
  NavLinks,
  ButtonNav,
  Button,
  ButtonContainer
};