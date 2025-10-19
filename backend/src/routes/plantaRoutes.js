import express from "express";
import { addPlantaUsuario, delPlantaUsuario, getPlantasUsuario } from "../controllers/plantasController.js";
import { authMiddleware } from "../controllers/middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, addPlantaUsuario); // rota protegida, só acessível com token válido
router.get("/my-plants", authMiddleware, getPlantasUsuario); 
router.delete("/my-plants/delete/:id", authMiddleware, delPlantaUsuario)

export default router;