import { useState } from "react";
import * as Main from "./styles/Home.js";
import { Link } from "react-router-dom"
import Plant from "../components/Card.jsx";
import api from "../services/api";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
);
const HelpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

function Navbar({ isOpen }) {
    /**
     * Tive problemas na função importada de functions,
     * estava sendo executava SEMPRE que uma micro mudança fosse feita na pagina
     * então refiz a função dentro do proprio arquivo, e resolveu.
     * possivel solução seria transformar a função em um context global pra envolver o site
     * mas iria ter que refazer MUITA coisa, então deixa quieto
     */
    const [userData, setUserData] = useState(null);

    useEffect(() => {

        const fetchUserData = async () => {

            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    console.warn("Token não encontrado.");
                    return;
                }

                const decodedToken = jwtDecode(token);
                const id = decodedToken?.id; // decodifica o token e compara o id do usuario pra saber se ele esta logado

                if (!id) {
                    console.warn("userId não encontrado no token.");
                    return;
                }

                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

                const response = await api.get(`/users/${id}`);

                if (!response.data) {
                    console.log("Nenhum dado do usuário logado.");
                    return;
                }

                setUserData(response.data);
                console.log("Usuário logado");
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        };

        fetchUserData();

    }, []);

    function handleLogout() {
        localStorage.removeItem("token");
        setUserData(null);
        window.location.reload(); // recarrega a página
    }

    return (
        <Main.NavbarContainer isOpen={isOpen}>
            <Main.LogoContainer>
                <Main.LogoTitle>Jardim App</Main.LogoTitle>
            </Main.LogoContainer>
            <Main.NavLinks>
                <Main.NavLink to="/" className="active"><HomeIcon /> Minhas Plantas</Main.NavLink>
                <Main.NavLink to="/documentation"><BookIcon /> Documentação</Main.NavLink>
                <Main.NavLink to="/support"><HelpIcon /> Suporte</Main.NavLink>
                <Main.NavLink to="https://github.com/DiegoRodrigues06/App-Jardinagem" target="_blank"><GithubIcon /> Github</Main.NavLink>
            </Main.NavLinks>
            <Main.UserActions>
                {userData ? (
                    <>
                        <Link><Main.Button style={{ color: '#535353ff' }}>{`Usuário: ${userData?.nome}`}</Main.Button></Link>
                        <Link><Main.Button primary onClick={handleLogout}>Logout</Main.Button></Link>
                    </>
                ) : (
                    <>
                        <Link to="/register"><Main.Button>Registrar-se</Main.Button></Link>
                        <Link to="/Login"><Main.Button primary>Login</Main.Button></Link>
                    </>
                )}
            </Main.UserActions>
        </Main.NavbarContainer>
    );
}

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <Main.AppContainer>
                <Main.MenuButton onClick={toggleMenu}><MenuIcon /></Main.MenuButton>
                {isMenuOpen && <Main.Overlay onClick={toggleMenu} />}
                <Navbar isOpen={isMenuOpen} />
                <Main.MainContent>
                    <Plant></Plant>
                </Main.MainContent>
            </Main.AppContainer>
        </>
    );
}

export default Home;