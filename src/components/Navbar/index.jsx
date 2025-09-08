import { Link } from "react-router-dom"
import * as Nav from "./Navbar"

function Navbar() {
  return (
    <Nav.NavbarContainer>
      <Nav.AltLogo>Jardim Monstro</Nav.AltLogo> 
      <Nav.ButtonNav>
        <Link to="/">
          <Nav.Button>Home
          </Nav.Button>
        </Link>
        <Link to="/Documentation"><Nav.Button>Documentação</Nav.Button></Link>
        <Link to="/Support"><Nav.Button>Support</Nav.Button>
        </Link><a href="https://github.com/DiegoRodrigues06/App-Jardinagem" target="_blank" rel="noopener noreferrer"><Nav.Button>Github</Nav.Button></a>
      </Nav.ButtonNav>
      <Nav.ButtonContainer>
        <Link to="/Signup"><Nav.Button>Sign up</Nav.Button></Link>
        <Link to="/Login"><Nav.Button>Login</Nav.Button></Link>
      </Nav.ButtonContainer>
    </Nav.NavbarContainer>
  );
}

export default Navbar;  
 