import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 100vw;  /* evita que ultrapasse a largura da tela */
  background: #3aa032;
  display: flex;
  align-items: center;
  justify-content: space-between; /* distribui melhor */
  padding: 0 16px;
  height: 64px;
  color: #fff;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding: 16px;
    gap: 12px;
  }
`;

const Logo = styled.div`
  background-color: #f5f5f5;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  font-weight: bold;
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin-right: 2rem;
  margin-top: 1.5rem;
  padding: 0.2rem;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;  /* faz quebrar em vez de estourar */
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    width: 100%;
    align-items: flex-start;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #3AA032;
  border: none;
  border-radius: 20px;
  padding: clamp(6px, 1vw, 10px) clamp(12px, 2vw, 24px);
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.5rem;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 0.5rem;
    width: 100%;
  }
`;


export {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  Button
}