import { Link } from "react-router-dom"
import * as Nav from "./Navbar"
import canabis from "../../assets/canabis.png"

function Navbar() {
  return (
    <Nav.NavbarContainer>
      <Nav.Logo>
        <img src={canabis} alt="maconha" />
      </Nav.Logo>
      <Nav.NavLinks>
        <Link to="/"><Nav.NavLink>Home</Nav.NavLink></Link>
        <Link to="/Documentation"><Nav.NavLink>Documentação</Nav.NavLink></Link>
        <Link to="/Support"><Nav.NavLink>Support</Nav.NavLink></Link>
        <a href="https://github.com/DiegoRodrigues06" target="_blank" rel="noopener noreferrer"><Nav.NavLink>Github</Nav.NavLink></a>
      </Nav.NavLinks>
      <Nav.ButtonContainer>
        <Link to="/Signup"><Nav.Button>Sign up</Nav.Button></Link>
        <Link to="/Login"><Nav.Button>Login</Nav.Button></Link>
      </Nav.ButtonContainer>
    </Nav.NavbarContainer>
  );
}

export default Navbar;
 