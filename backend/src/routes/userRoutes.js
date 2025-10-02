import { Router } from "express";
import { createUser, getUsers, getUsersById, loginUser } from "../controllers/userController.js";

const router = Router();

router.post("/register", createUser); // criar usuário
router.post("/login", loginUser);     // login
router.get("/", getUsers);            // listar usuários
router.get("/:id", getUsersById);         // pegar usuário por id

export default router;
