// src/pages/AddPlant.jsx
import * as Add from "./styles/Add-Plant"
import { useState, useEffect } from "react"
import api from "../services/api.js"

import Navbar from "../components/Navbar"
import SearchBar, { ResultsBox, ResultItem } from "../components/SearchBar.jsx"

export default function AddPlant() {
  const [busca, setBusca] = useState("");
  const [apelido, setApelido] = useState("");
  const [ambiente, setAmbiente] = useState("interno");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [plantas, setPlantas] = useState([]); 
  const [especieId, setEspecieId] = useState(null); // 👈 guarda id da espécie selecionada

  // --- BUSCA COM DEBOUNCE ---
  const debouncedSearch = (busca) => {
    setLoading(true);
    api
      .get(`/api/especies/search?nome=${busca}`)
      .then((response) => {
        setPlantas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar plantas:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (busca.trim().length > 0) {
      const timeoutId = setTimeout(() => {
        debouncedSearch(busca);
      }, 500);
      return () => clearTimeout(timeoutId);
    } else {
      setPlantas([]);
      setEspecieId(null); // limpa se apagar
    }
  }, [busca]);

  // --- ENVIO DO FORM ---
  const handleGenerateRoutine = async (event) => {
    event.preventDefault();

    if (!apelido || !ambiente || !especieId) {
      setMessage("Preencha todos os campos e selecione uma planta.");
      return;
    }

    const formData = {
      apelido,
      ambiente,
      especieId, // 👈 backend espera esse campo
    };

    try {
      const token = localStorage.getItem("token"); // pega token salvo no login
      const res = await api.post("/api/plantas", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
  setMessage("Erro ao salvar planta.");
}

  };

  // --- SELEÇÃO DE PLANTA ---
  const handleSelect = (planta) => {
    setBusca(planta.nome);
    setEspecieId(planta.id); // salva id da espécie
  };

  return (
    <Add.PageContainer>
      <Navbar />
      <Add.FormContainer onSubmit={handleGenerateRoutine}>
        <Add.Header>
          <Add.Title>O que você gostaria de plantar?</Add.Title>
        </Add.Header>

        {/* Barra de busca */}
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

        {/* Campo Apelido */}
        <Add.Label>
          <Add.RadioInput type="radio" name="nickname" value="nickname" />
          Apelido
        </Add.Label>
        <Add.TextField
          type="text"
          placeholder="Digite o apelido da planta"
          value={apelido}
          onChange={(e) => setApelido(e.target.value)}
        />

        {/* Ambiente */}
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

        {/* Botão */}
        <Add.EndContainer>
          <Add.ImageContainer> Img </Add.ImageContainer>
          <Add.ButtonContainer
            type="submit"
            style={{ alignItems: "right", justifyContent: "right" }}
          >
            Gerar Rotina
          </Add.ButtonContainer>

          {/* Mensagem */}
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
