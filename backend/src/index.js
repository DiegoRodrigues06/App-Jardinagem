import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import especieRoutes from "./routes/especieRoutes.js";
import plantaRoutes from "./routes/plantaRoutes.js";

import { dirname } from "path"; // serve para servir imagens estáticas
import { fileURLToPath } from "url"; // serve para encontrar o diretório atual


dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json());

// rotas 
app.use("/", userRoutes);
app.use("/users", userRoutes);

app.use("/api/especies", especieRoutes);
app.use('/api/uploads', express.static(path.join(__dirname, '../uploads'))); // entra no diretório uploads e puxa os arquivos de imagem

app.use("/api/plantas", plantaRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
