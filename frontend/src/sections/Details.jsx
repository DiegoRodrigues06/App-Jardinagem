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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);
const WindIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
);
const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);
const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);


// --- DADOS DE EXEMPLO  ---
const plantaEx = {
    apelido: "Samambaia da Sala",
    criadoEm: "2024-08-15T10:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1597910037242-3539dde9a439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    especie: {
        nome: "Nephrolepis exaltata",
        descricao: "A samambaia é uma planta clássica de folhagem verde e exuberante, perfeita para ambientes internos com boa umidade. Suas folhas longas e arqueadas trazem um toque de natureza e frescor para qualquer espaço.",
        cuidados: "Além da umidade, a samambaia aprecia solo rico em matéria orgânica e boa drenagem. Evite expô-la a ventos fortes ou luz solar direta, que podem queimar suas folhas delicadas."
    },
    rotina: {
        id: 1,
        descricao: "Rotina principal de cuidados para a Samambaia.",
        tarefas: [
            { id: 101, icone: "WaterDrop", nome: "Regar", frequencia: "2x por semana", horario: "Manhã" },
            { id: 102, icone: "Sun", nome: "Luz", frequencia: "Diariamente", horario: "Luz indireta" },
            { id: 103, icone: "Wind", nome: "Umidade", frequencia: "3x por semana", horario: "Borrifar água" }
        ]
    }
};

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
            return <p>Carregando plantas...</p>; 
        }

        const planta = plantas.find((p) => String(p.id) === id);

        if (!planta) return <p>Planta não encontrada.</p>;

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
                    <Detail.HeaderImage src={`http://localhost:3001/api${planta.especie.imagem}`}  alt={`Foto de ${planta.apelido}`} />
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
                    <Detail.SectionTitle>Sua Rotina de Cuidados</Detail.SectionTitle>
                    <Detail.RoutineGrid>
                    {plantaEx.rotina.tarefas.map(tarefa => (
                        <Detail.TaskCard key={tarefa.id}>
                        <Detail.TaskCardHeader>
                            {iconMap[tarefa.icone]}
                            <Detail.TaskCardTitle>{tarefa.nome}</Detail.TaskCardTitle>
                        </Detail.TaskCardHeader>
                        <Detail.TaskCardDetail>{tarefa.frequencia}</Detail.TaskCardDetail>
                        <Detail.TaskCardDetail>{tarefa.horario}</Detail.TaskCardDetail>
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
                        Tire dúvidas sobre sua {planta.apelido} com nosso assistente de IA.
                    </Detail.AiText>
                    <Detail.AiButton href="#">Perguntar à IA</Detail.AiButton>
                    </Detail.AiSection>

                </Detail.Container>
            </Detail.Body>
        </>
    );
}
