import * as Doc from "./styles/Documentation";
import Navbar from "../components/Navbar";
import tutorial from "../../public/videos/tutorial.gif";


export default function DocumentationPage(){
    return(
        <>
        <Navbar></Navbar>
        <Doc.AppContainer>
            <Doc.MainContent>
                <Doc.Title>Bem vindo! 👋</Doc.Title> <br />
                <Doc.Text>O App Jardinagem é um projeto que tem o objetivo de guiar você em sua jornada como jardineiro.</Doc.Text>
                <Doc.Text>Como grande diferencial (ou não..), temos serviços de IA para te auxiliar com seus problemas, por mais específicos que sejam. <br />
                          Incluindo análise de images e indicações de onde procurar ajuda, em caso de problemas mais sérios. </Doc.Text>
                <Doc.Text>Segue abaixo um tutorial de como usar o site: <br /></Doc.Text>
                <Doc.GifContainer><img src={tutorial} alt="gif do tutorial" /></Doc.GifContainer>
            </Doc.MainContent>
        </Doc.AppContainer>
        </>
    );
}