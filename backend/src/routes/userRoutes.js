import { Router } from "express";
import { createUser, getUsers, loginUser } from "../controllers/userController.js";

const router = Router();

router.post("/register", createUser); // criar usuário
router.post("/login", loginUser);     // login
router.get("/", getUsers);            // listar usuários

export default router;
