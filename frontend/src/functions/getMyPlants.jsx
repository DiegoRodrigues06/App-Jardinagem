import { useState, useEffect } from "react";
import api from "../services/api.js";


// ---- Função para buscar plantas do Usuario ----

export default function MyPlantsFetcher() {
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlantas = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("Token não encontrado.");
          setLoading(false);
          return;
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await api.get("/api/plantas/my-plants");

        console.log("Resposta da API:", response);

        setPlantas(response.data);
        setLoading(false);

        if (response.data.length === 0) {
          console.log("Nenhuma planta encontrada.");
          return;
        }

        console.log("Plantas encontradas:", response.data);
      } catch (error) {
        console.error("Erro ao buscar plantas:", error);
        setLoading(false);
      }
    };

    fetchPlantas();
  }, []);

  return { plantas, loading };
}
