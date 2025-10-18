import * as Detail from "./styles/Details"
import { useParams } from "react-router-dom";

import MyPlantsFetcher from "../functions/getMyPlants";
import Navbar from "../components/Navbar";

// --- Ícones SVG ---
// Definir ícones aqui facilita a customização e evita dependências externas.
const WaterDropIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
);
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="#f3ad15ff" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);
const WindIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="#86818fff" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
);
const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);
const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);

const iconMap = {
    WaterDrop: <WaterDropIcon />,
    Sun: <SunIcon />,
    Wind: <WindIcon />,
};

// --- COMPONENTE PRINCIPAL ---
export default function PlantDetailsPage() {

    const { id } = useParams();
    const { plantas, loading } = MyPlantsFetcher();

    if (loading) {
        return <p>Carregando...</p>;
    }

    const planta = plantas.find((p) => String(p.id) === id);

    if (!planta) return <p>Nenhuma planta foi encontrada.</p>;

    const dataFormatada = new Date(planta.criadoEm).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <>
            <Detail.Body>
                <Detail.Container>
                    <Navbar />

                    {/* --- CABEÇALHO --- */}
                    <Detail.Header>
                        <Detail.HeaderImage src={`http://localhost:3001/api${planta.especie.imagem}`} alt={`Foto de ${planta.apelido}`} />
                        <Detail.HeaderInfo>
                            <Detail.HeaderApelido>{planta.apelido}</Detail.HeaderApelido>
                            <Detail.HeaderEspecie>{planta.especie.nome}</Detail.HeaderEspecie>
                            <Detail.HeaderData>Adicionada em {dataFormatada}</Detail.HeaderData>
                            <Detail.HeaderActions>
                                <Detail.HeaderButton className="edit"><EditIcon />Editar</Detail.HeaderButton>
                                <Detail.HeaderButton className="delete"><TrashIcon />Excluir</Detail.HeaderButton>
                            </Detail.HeaderActions>
                        </Detail.HeaderInfo>
                    </Detail.Header>

                    {/* --- ROTINA --- */}
                    <Detail.SectionTitle>Sua Rotina de Cuidados (ambiente {planta.ambiente})</Detail.SectionTitle>

                    <Detail.RoutineGrid>
                        {planta.especie.rotinas
                            .filter(rotina => rotina.ambiente === planta.ambiente) // mostra só as rotinas do mesmo ambiente da planta
                            .map(rotina => (
                                <Detail.TaskCard key={rotina.id}>
                                    <Detail.TaskCardHeader>
                                        {iconMap[
                                            rotina.tipoCuidado === "regar"
                                                ? "WaterDrop"
                                                : rotina.tipoCuidado === "luz"
                                                    ? "Sun"
                                                    : "Wind"
                                        ]}
                                        <Detail.TaskCardTitle>
                                            {rotina.tipoCuidado.charAt(0).toUpperCase() + rotina.tipoCuidado.slice(1)}
                                        </Detail.TaskCardTitle>
                                    </Detail.TaskCardHeader>

                                    <Detail.TaskCardDetail>
                                        {rotina.frequencia}
                                    </Detail.TaskCardDetail>

                                    <Detail.TaskCardDetail>
                                        {rotina.observacao}
                                    </Detail.TaskCardDetail>
                                </Detail.TaskCard>
                            ))}
                    </Detail.RoutineGrid>

                    {/* --- SOBRE --- */}
                    <Detail.SectionTitle>Sobre a Espécie</Detail.SectionTitle>
                    <Detail.AboutText>{planta.especie.descricao}</Detail.AboutText>
                    <Detail.AboutText>{planta.especie.cuidados}</Detail.AboutText>

                    {/* --- SEÇÃO IA --- */}
                    <Detail.AiSection>
                        <Detail.AiTitle>Precisa de Ajuda?</Detail.AiTitle>
                        <Detail.AiText>
                            Tire dúvidas sobre sua {planta.especie.nome} com nosso assistente de IA.
                        </Detail.AiText>
                        <Detail.AiButton href="#">Perguntar à IA</Detail.AiButton>
                    </Detail.AiSection>

                </Detail.Container>
            </Detail.Body>
        </>
    );
}
