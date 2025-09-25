import express from "express";
import { addPlantaUsuario } from "../controllers/plantasController.js";
import { authMiddleware } from "../controllers/middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, addPlantaUsuario); // rota protegida, só acessível com token válido

export default router;