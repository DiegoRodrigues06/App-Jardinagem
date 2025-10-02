// src/pages/AddPlant.jsx
import * as Add from "./styles/Add-Plant"
import { useState, useEffect, useRef } from "react"
import api from "../services/api.js"
import { Navigate, useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar"
import SearchBar, { ResultsBox, ResultItem } from "../components/SearchBar.jsx"

export default function AddPlant() {
  const [busca, setBusca] = useState("");
  const [apelido, setApelido] = useState("");
  const [ambiente, setAmbiente] = useState("interno"); // padrão sendo interno
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [plantas, setPlantas] = useState([]); 
  const [plantaSelecionada, setPlantaSelecionada] = useState(null);
  const [especieId, setEspecieId] = useState(null); // guarda id da espécie selecionada

  const navigate = useNavigate(); // direcionar para outras paginas
  const ignorarBuscaInit = useRef(false); 
  const ignorarBuscaEnd = () => {
    ignorarBuscaInit.current = true;
  };
  // função para ignorar ignorar a chamada a api apos uma planta ser selecionada


  // --- função de busca com debounce ---
  // faz busca na api com um pequeno delay pra não sobrecarregar o servidor
  const debouncedSearch = (busca) => {
    if (ignorarBuscaInit.current) {
      ignorarBuscaInit.current = false; // reseta depois de ignorar uma vez
      return;
  
    }
    setLoading(true);
    api
      .get(`/api/especies/search?nome=${busca}`)
      .then((response) => {
        setPlantas(response.data);
        setLoading(false);
        console.log("Plantas encontradas:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar plantas:", error); // vai retornar erro se der problema na api
        setLoading(false);
      });
  };

  useEffect(() => {
    if (busca.trim().length > 0) {
      const timeoutId = setTimeout(() => { // aplica o delay (500ms) se tiver algum caractere em busca
        debouncedSearch(busca);
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setPlantas([]);
      setEspecieId(null); // limpa o id se apagar
    }

    // ---- função que redireciona para a pagina principal em caso de sucesso ----
    if (message === "Planta cadastrada com sucesso!") {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 2000); // 2 segundos de delay

    return () => clearTimeout(timeout); // limpeza
  }
  }, [busca, message, navigate]);


  // --- função de formulário ---
  const handleGenerateRoutine = async (event) => {
    event.preventDefault(); // previne o reload da página

    const camposFaltando = [];

    if (!ambiente) camposFaltando.push("Ambiente");
    if (!especieId) camposFaltando.push("Espécie");
    if (camposFaltando.length > 0) { // se tiver algum campo obrigatorio em branco ele vai dizer qual é
      setMessage(`Preencha os campos obrigatórios: ${camposFaltando.join(", ")}`);
      return;
    }

    const formData = {
      apelido,
      ambiente,
      especieId,
    };

    try {
      const token = localStorage.getItem("token"); // pega token que foi salvo na função login
      
      if (!token) {
        setMessage("Você precisa estar logado.");
        console.error("Token não encontrado.");
        return; // se n tiver token, n faz a requisição
      }

      const res = await api.post("/api/plantas", formData, {
        headers: {
          Authorization: `Bearer ${token}`, 
          // envia o token no cabeçalho da requisição para que seja analizada primeiro antes de salvar a planta
        }
      });

      setMessage("Planta cadastrada com sucesso!");
      console.log("Resposta:", res.data);

      // resetar formulário
      setApelido("");
      setBusca("");
      setEspecieId(null);

    } catch (err) {
      console.error("Erro ao gerar rotina:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message
      });
      setMessage("Erro ao gerar rotina.");
    }

  };


  // --- função ao selecionar planta ---
  const handleSelect = (planta) => {
    ignorarBuscaEnd(); // ignora a próxima busca automática
    setBusca(planta.nome); // mostra nome da planta no campo de busca
    setEspecieId(planta.id); // salva id da espécie
    setPlantas([]); // limpa resultados
    setPlantaSelecionada(planta); 
    // sos dados da planta (to usando pra salvar qual imagem deve ser mostrada)
  };

  return (
    <Add.PageContainer>
      <Navbar />
      <Add.FormContainer onSubmit={handleGenerateRoutine}>
        <Add.Header>
          <Add.Title>O que você gostaria de plantar?</Add.Title>
        </Add.Header>

        
        <SearchBar value={busca} onChange={(e) => setBusca(e.target.value)} />
        {busca.trim() !== "" && plantas.length > 0 && !loading && (
          <ResultsBox>
            {plantas.map((planta) => (
              <ResultItem
                key={planta.id}
                onClick={() => handleSelect(planta)}
              >
                {planta.nome}
              </ResultItem>
            ))}
          </ResultsBox>
        )}

        
        <Add.TextField
          type="text"
          placeholder="Como vai se chamar sua planta?"
          value={apelido}
          onChange={(e) => setApelido(e.target.value)}
        />

        
        <Add.Title
          style={{ marginTop: "1rem", fontSize: "1.25rem", textAlign: "left" }}
        >
          em que ambiente pretende plantar?
          <Add.Options
            value={ambiente}
            onChange={(e) => setAmbiente(e.target.value)}
          >
            <option value="interno">dentro de casa</option>
            <option value="externo">jardim externo</option>
          </Add.Options>
        </Add.Title>

        
        <Add.EndContainer>
            {plantaSelecionada &&(
              <Add.ImageContainer> 
                <img
                  src={`http://localhost:3001/api${plantaSelecionada.imagem}`}
                  alt={`Imagem da planta ${plantaSelecionada.nome}`}
                  style={{ maxWidth: "198px", minWidth: "198px", maxHeight: "223px", minHeight: "223px", borderRadius: "2px"}}
                />
              </Add.ImageContainer>
            )} 
          <Add.ButtonContainer
            type="submit"
            style={{ alignItems: "right", justifyContent: "right" }}
          >
            Gerar Rotina
          </Add.ButtonContainer>

          
          {message && (
            <p
              style={{
                marginTop: "4rem",
                position: "absolute",
                right: "6.3rem",
                textAlign: "center",
              }}
            >
              {message}
            </p>
          )}
        </Add.EndContainer>
      </Add.FormContainer>
    </Add.PageContainer>
  );
}
