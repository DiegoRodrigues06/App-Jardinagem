import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { use } from "react";

const app = express();
app.use(cors());
app.use(express.json());

// rotas de usuário
app.use("/", userRoutes);
app.use("/users", userRoutes);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
