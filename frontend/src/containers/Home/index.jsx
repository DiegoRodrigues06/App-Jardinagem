import CardContainer from "../../components/Card/Card";
import { Container, Title, Subtitle, Description, Header, MainContent, PageContainer } from "./styles";
import maisLogo from "../../assets/maisSimbolo.jpg";
import planta from "../../assets/planta.png";


function Home() {
  return (
    <>
      <PageContainer>
        <MainContent>
          <Header>
              <Title>
                App Jardinagem 
                <img src={planta} alt="logo planta" style={{ width: "40px", marginLeft: "1rem" }} />
              </Title>
            </Header>
          <Container>   
            <CardContainer>
              <Subtitle>Planta 1</Subtitle>
              <Description><img src={maisLogo} style={{ maxWidth: "100%", width: "60px", borderRadius: "8px" }} /></Description>
            </CardContainer>
          </Container>
        </MainContent>  
      </PageContainer>
    </>
  );
}

export default Home;
 
{/* <br></br>
<Subtitle>Este site vai te transformar no maior jardineiro! (da sua casa.)</Subtitle>
<Description>Aqui você pode gerar rotinas de cuidados para suas plantas.</Description>
<Description>E o melhor de tudo: você terá acesso á ajuda personalizada da IA mais potente <br></br>
que já pisou na extratosfera! o grok...</Description>
<Description>Se depois de tudo isso você não conseguir fazer sua planta crescer firme e forte..! <br></br>
Senta e chora, meu nobre. Mas posso afirmar que vai ser uma baita experiencia!</Description>
<br></br>
<Subtitle>Se interessou?! clique aqui para começar 👉 <Link to="/Login"><MyButton /></Link></Subtitle> */}