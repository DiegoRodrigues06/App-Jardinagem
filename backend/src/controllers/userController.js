import prisma from "../db.js";
import bcryptjs from "bcryptjs"; // para criptografar senha
import jwt from "jsonwebtoken"; // para criar tokens

const SECRET_KEY = process.env.JWT_SECRET;

// Criar usuário (registro)
export const createUser = async (req, res) => {
  try {
    const { nome, email, senha} = req.body;

    // já verifica se existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email já registrado." });
    }

    // criptografar senha
    const hashedPassword = await bcryptjs.hash(senha, 10);

    const newUser = await prisma.user.create({
      data: { nome, email, senha: hashedPassword },
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
    const { email, senha } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    const valid = await bcryptjs.compare(senha, user.senha);
    if (!valid) return res.status(401).json({ error: "Senha incorreta" });

    const token = jwt.sign({id: user.id, email: user.email}, SECRET_KEY, { expiresIn: '7d' })

    res.json({
      message: "Login bem-sucedido", 
      token, 
      user: { id: user.id, nome: user.nome, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};
