import express from "express"; // framework web, para criar o servidor
import path from "path"; // para lidar com caminhos de arquivos
import cors from "cors"; // para permitir requisições de outros domínios
import dotenv from "dotenv"; // para criar variáveis de ambiente
dotenv.config(); // carrega as variáveis de ambiente do arquivo .env

import userRoutes from "./routes/userRoutes.js";
import especieRoutes from "./routes/especieRoutes.js";
import plantaRoutes from "./routes/plantaRoutes.js";

import { dirname } from "path"; // serve para servir imagens estáticas
import { fileURLToPath } from "url"; // serve para encontrar o diretório atual


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json());

// rotas 
app.use("/users", userRoutes);

app.use("/api/especies", especieRoutes);
app.use('/api/uploads', express.static(path.join(__dirname, '../uploads'))); // entra no diretório uploads e puxa os arquivos de imagem

app.use("/api/plantas", plantaRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
