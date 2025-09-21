import { Router } from "express";
import { getEspecies } from "../controllers/especieController.js";

const router = Router();

router.get("/", getEspecies);  
router.get("/:id", getEspecies);    
// listar espécies     
export default router;