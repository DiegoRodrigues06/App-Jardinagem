import { Container, Title, Description, Header } from "./styles";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
    <Navbar />
    <Container>
        <Header>
            <Title>Bem vindo ao App jardinagem muito brabo 2000</Title>
        </Header>
        <Description>Este site vai te transformar no maior jardineiro! (da sua casa.)</Description>
    </Container>
    </>
  );
}

export default Home;
