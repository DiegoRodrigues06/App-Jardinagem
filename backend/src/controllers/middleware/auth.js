import jwt from "jsonwebtoken";


/**
 * Middleware para proteger rotas, verificando a validade do token JWT.
 * Colocado antes das rotas que precisam de autenticação.
 */
export const authMiddleware = (req, res, next) => {
  // Pega o cabeçalho de autorização da requisição.
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  // O token vem no formato "Bearer <token>", aqui separo para pegar só o token.
  const token = authHeader.split(" ")[1];

  try {
    // Chave para assinar e verificar os tokens JWT, vinda das variáveis de ambiente.
    const SECRET_KEY = process.env.JWT_SECRET;
    
    // Tenta verificar se o token é válido usando a chave.
    const decoded = jwt.verify(token, SECRET_KEY);
    
    // Se for válido, anexa os dados do usuário (ex: id) na própria requisição.
    // Assim, as próximas rotas terão acesso a `req.user`.
    req.user = decoded;
    
    // Chama a próxima função (o controller da rota) para continuar o fluxo.
    next();
  } catch (err) {
    // Se a verificação falhar (token expirado, inválido, etc.), retorna um erro.
    return res.status(401).json({ error: "Token inválido" });
  }
};
