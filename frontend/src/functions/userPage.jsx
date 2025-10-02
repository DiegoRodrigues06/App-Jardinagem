import api from "../services/api";
import { useState, useEffect} from "react";
import { jwtDecode } from "jwt-decode";

// ---- Função para saber se o usuario esta logado ----

export function UserPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchUserData = async () => {

      if (ignore) return;

      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("Token não encontrado.");
          return;
        }

        const decodedToken = jwtDecode(token);
        const id = decodedToken?.id; // decodifica o token e compara o id do usuario pra saber se ele esta logado

        if (!id) {
          console.warn("userId não encontrado no token.");
          return;
        }

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const response = await api.get(`/users/${id}`);

        if (!response.data) {
          console.log("Nenhum dado do usuário logado.");
          return;
        }

        setUserData(response.data);
        console.log("Dados do usuário logado:", response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();

    return () => { ignore = true; };
  }, []);

  return userData;
}
