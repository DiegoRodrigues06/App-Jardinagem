import * as Nav from "./Navbar"
import canabis from "../../assets/canabis.png"

function Navbar() {
  return (
    <Nav.NavbarContainer>
      <Nav.Logo>
        <img src={canabis} alt="maconha" />
      </Nav.Logo>
      <Nav.NavLinks>
        <Nav.NavLink>Home</Nav.NavLink>
        <Nav.NavLink>Documentação</Nav.NavLink>
        <Nav.NavLink>Support</Nav.NavLink>
        <Nav.NavLink>Github</Nav.NavLink>
      </Nav.NavLinks>
      <Nav.Button>Sign up</Nav.Button>
      <Nav.Button>Login</Nav.Button>
    </Nav.NavbarContainer>
  );
}

export default Navbar;
