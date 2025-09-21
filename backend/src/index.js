import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import especieRoutes from "./routes/especieRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// rotas 
app.use("/", userRoutes);
app.use("/users", userRoutes);

app.use("/api/especies", especieRoutes);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
