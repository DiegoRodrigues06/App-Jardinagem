import prisma from "../db.js";
import bcryptjs from "bcryptjs"; // para criptografar senha

// Criar usuário (registro)
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // já verifica se existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email já registrado." });
    }

    // criptografar senha
    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    res.status(500).json({ error: "Erro no servidor" });
  }
};

// Listar todos usuários
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    const valid = await bcryptjs.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Senha incorreta" });

    res.json({ message: "Login bem-sucedido", user });
  } catch (err) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};
