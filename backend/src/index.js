import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());


// exemplo de rota para pegar dados de plantas
app.get("/plantas", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM plantas");
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar plantas:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
