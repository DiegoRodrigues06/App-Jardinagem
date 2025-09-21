import * as Add from "./styles/Add-Plant"

import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"

export default function AddPlant(){
    return (
        <>  
            <Add.PageContainer>
                <Navbar />
                <Add.FormContainer>
                    <Add.Header>
                        <Add.Title>O que você gostaria de plantar?</Add.Title>
                    </Add.Header>
                    <SearchBar/>
                    <Add.Label>
                        <Add.RadioInput type="radio" name="nickname" value="nickname" defaultChecked />
                        Apelido
                    </Add.Label>
                    <Add.TextField type="text" placeholder="Digite o apelido da planta" />
                    <Add.Title style={{ marginTop: "1rem", fontSize: "1.25rem", textAlign: "left" }}>
                         em que ambiente pretende plantar? 
                         <Add.Options>
                             <option value="interno">dentro de casa</option>
                             <option value="externo">jardim externo</option>
                         </Add.Options>
                    </Add.Title>
                    <Add.EndContainer>
                        <Add.ImageContainer> Img </Add.ImageContainer>
                        <Add.ButtonContainer style={{ alignItems: "right", justifyContent: "right" }}>
                            Gerar Rotina
                        </Add.ButtonContainer>
                    </Add.EndContainer>
                </Add.FormContainer>
            </Add.PageContainer>
        </>
    )
}