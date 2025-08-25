import { Container, Subtitle, Description } from "./styles"
import Navbar from "../../components/Navbar"

function SecPage(){
    return(
        <>
        <Navbar />
        <Container>
            <Subtitle>Tutorial gamer de como plantar maconha! ⚠️</Subtitle>
            <Description>
                Primeiramente, não repita isso em casa se fores menor de idade, ponto. <br />
                Sou um profissional na área e sei o que estou fazendo (não sei). <br />
                Isso aqui é só para os fortes, que querem viver a vida com um
                pouco mais de adrenalina na veia.
                Se após esses avisos você ainda quer ir pelo caminho das
                adversidades, não irei tentar lhe impedir, a partir daqui é por sua conta e risco.
            </Description>
            <img src="/src/assets/james.png" alt="eu sem poder provar" height="200px"/>
        </Container>
        </>
    );

}

export default SecPage