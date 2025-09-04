import { Link } from "react-router-dom"
import * as Nav from "./Navbar"
import canabis from "../../assets/canabis.png"
import SecFunc from "../SecFunc";

function Navbar() {
  return (
    <Nav.NavbarContainer>
      <SecFunc>
        <Nav.Logo>
          <img src={canabis} alt="maconha" />
        </Nav.Logo>
      </SecFunc>
      <Nav.ButtonNav>
        <Link to="/">
          <Nav.Button>Home
          </Nav.Button>
        </Link>
        <Link to="/Documentation"><Nav.Button>Documentação</Nav.Button></Link>
        <Link to="/Support"><Nav.Button>Support</Nav.Button>
        </Link><a href="https://github.com/DiegoRodrigues06" target="_blank" rel="noopener noreferrer"><Nav.Button>Github</Nav.Button></a>
      </Nav.ButtonNav>
      <Nav.ButtonContainer>
        <Link to="/Signup"><Nav.Button>Sign up</Nav.Button></Link>
        <Link to="/Login"><Nav.Button>Login</Nav.Button></Link>
      </Nav.ButtonContainer>
    </Nav.NavbarContainer>
  );
}

export default Navbar;  
 