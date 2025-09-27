import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import MyPlantsFetcher from "../functions/getMyPlants.jsx";
// import api from "../services/api.js"; 

import * as Card from "../assets/styles/Card.js";


function Plant() {

  const { plantas, loading } = MyPlantsFetcher();

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
        src={`http://localhost:3001/api${planta.especie.imagem}`} 
        alt={`Imagem da planta ${planta.especie.nome}`} 
      />
      <Card.CardContent>
        <Card.CardTitle>{`${planta.apelido} (${planta.especie.nome})`}</Card.CardTitle>
        <Card.CardDescription>{planta.especie.descricao}</Card.CardDescription>

        <Link to={`/plant/${planta.id}`}>
          <Card.CardButton>Ver Detalhes</Card.CardButton>
        </Link>
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

export default Plant;