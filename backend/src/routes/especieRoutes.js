import { Router } from "express";
import { getEspecies, getEspeciesByName } from "../controllers/especieController.js";

const router = Router();

router.get("/", getEspecies);   
// listar espécies
router.get("/search", getEspeciesByName);   
// buscar espécies por nome
export default router;