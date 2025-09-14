import { Link } from "react-router-dom";

import * as Card from "../assets/styles/Card.js";

function Plant() {
//   const plantData = [
//     { name: "Monstera Deliciosa", description: "Também conhecida como Costela-de-Adão, famosa por suas folhas grandes e recortadas.", imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80" },
//     { name: "Jiboia (Epipremnum)", description: "Uma planta trepadeira muito resistente e fácil de cuidar, ideal para iniciantes.", imageUrl: "https://images.unsplash.com/photo-1600478822695-17d46a83691b?auto=format&fit=crop&w=800&q=80" },
//     { name: "Zamioculca", description: "Extremamente durável e tolera pouca luz e pouca água. Suas folhas brilhantes são únicas.", imageUrl: "https://images.unsplash.com/photo-1614555138126-252d62550130?auto=format&fit=crop&w=800&q=80" },
//   ];

//essa parte será substituída por dados dinâmicos via minha propria API

  return (
    <>
      <Card.HomeHeader>
        <Card.HomeTitle>Minhas Plantas</Card.HomeTitle>
        <Link to="/add-plant"><Card.HomeButton>Adicionar Nova Planta</Card.HomeButton></Link>
      </Card.HomeHeader>
      <Card.HomeGrid>
        {/* {plantData.map((plant) => (
          <PlantCard key={plant.name} {...plant} />
        ))} */}
        <AddPlantCard />
      </Card.HomeGrid>
    </>
  );
}

export function PlantCard({ name, description, imageUrl }) {
  return (
    <Card.Card>
      <Card.CardImage src={imageUrl} alt={`Foto da planta ${name}`} />
      <Card.CardContent>
        <Card.CardTitle>{name}</Card.CardTitle>
        <Card.CardDescription>{description}</Card.CardDescription>
        <Card.CardButton>Ver Detalhes</Card.CardButton>
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