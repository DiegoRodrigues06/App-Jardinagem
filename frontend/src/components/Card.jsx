import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api.js"; 

import * as Card from "../assets/styles/Card.js";


function Plant() {

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

      // Configura o header de autorização para as próximas requisições
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const response = await api.get("/api/plantas/my-plants");

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

    

  if (loading) {
    return <p>Carregando plantas...</p>; 
  }

  return (
    <>
      <Card.HomeHeader>
        <Card.HomeTitle>Minhas Plantas</Card.HomeTitle>
        <Link to="/add-plant"><Card.HomeButton>Adicionar Nova Planta</Card.HomeButton></Link>
      </Card.HomeHeader>
      <Card.HomeGrid>
        {plantas.map((planta) => (
          <PlantCard key={planta.nome} planta={planta} onClick={() => {}} />
        ))}
        <AddPlantCard />
      </Card.HomeGrid>
    </>
  );
}

export function PlantCard({ planta }) {

  return (
    <Card.Card>
      <Card.CardImage 
        src={`http://localhost:3001/api${planta.imagem}`}
        alt={`Imagem da planta ${planta.nome}`} 
      />
      <Card.CardContent>
        <Card.CardTitle>{planta.nome}</Card.CardTitle>
        <Card.CardDescription>{planta.descricao}</Card.CardDescription>
        <Card.CardButton Link to={`/plant/${planta.id}`}>Ver Detalhes</Card.CardButton>
      </Card.CardContent>
    </Card.Card>
  );
}

export function AddPlantCard() {
  return (
    <Link to="/add-plant" style={{ textDecoration: "none" }}>
      <Card.Card className="add">
        <div style={{ fontSize: "3rem" }}>+</div>
        <p style={{ marginTop: "0.5rem", fontWeight: "500" }}>Adicionar Planta</p>
      </Card.Card>
    </Link>
  );
}

// export function apiFetchPlantas() {

//   const [plantas, setPlantas] = useState([]); 
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   const fetchPlantas = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         console.warn("Token não encontrado.");
//         setLoading(false);
//         return;
//       }

//       // Configura o header de autorização para as próximas requisições
//       api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//       const response = await api.get("/api/plantas/my-plants");

//       setPlantas(response.data);
//       setLoading(false);

//       if (response.data.length === 0) {
//         console.log("Nenhuma planta encontrada.");
//         return;
//       }

//       console.log("Plantas encontradas:", response.data);
//     } catch (error) {
//       console.error("Erro ao buscar plantas:", error);
//       setLoading(false);
//     }
//   };

//   fetchPlantas();
// }, []);
// }

export default Plant;