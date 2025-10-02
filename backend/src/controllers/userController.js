import prisma from "../db.js";
import bcryptjs from "bcryptjs"; // para criptografar senha
import validator from "validator"; // para validar ( email )
import jwt from "jsonwebtoken"; // para criar tokens


// Criar usuário (registro)
export const createUser = async (req, res) => {
  try {
    const { nome, email, senha} = req.body;

    // verifica se o email tem formato válido
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }

    // verifica se o email ja foi cadastrado no banco
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email já registrado." });
    }

    // criptografa a senha
    const hashedPassword = await bcryptjs.hash(senha, 10);

    const newUser = await prisma.user.create({
      data: { nome, email, senha: hashedPassword },
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};

// Listar todos usuários
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params; // passa o id como parametro
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
     // o number faz a conversao de string para numero, seja inteiro ou decimal
     
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);

  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuário" });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const SECRET_KEY = process.env.JWT_SECRET;
    const { email, senha } = req.body;
    const user = await prisma.user.findUnique({ where: { email } }); //tenta achar o usuário pelo email

    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    const valid = await bcryptjs.compare(senha, user.senha); // compara a senha dada com a criptografada
    if (!valid) return res.status(401).json({ error: "Senha incorreta" });

    const token = jwt.sign({id: user.id, email: user.email}, SECRET_KEY, { expiresIn: '7d' })
     // cria o token com id e email do usuário no local storage, valido por 7 dias

    res.json({
      message: "Login bem-sucedido", 
      token, 
      user: { id: user.id, nome: user.nome, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
};
