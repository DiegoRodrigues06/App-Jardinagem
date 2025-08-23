import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
  background: #0057d8;
  display: flex;
  align-items: center;
  padding: 0 32px;
  height: 64px;
  color: #fff;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 32px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  flex: 1;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #0057d8;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 24px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>🍀</Logo>
      <NavLinks>
        <NavLink>Paleta de Cores</NavLink>
        <NavLink>Utilizar uma imagem</NavLink>
        <NavLink>Extrair cores do Instagram</NavLink>
        <NavLink>Outras cores</NavLink>
        <NavLink>Outras ferramentas</NavLink>
      </NavLinks>
      <Button>Sign up</Button>
      <Button>Login</Button>
    </NavbarContainer>
  );
}


export default Navbar;