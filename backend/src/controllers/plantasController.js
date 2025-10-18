import prisma from "../db.js";

export const addPlantaUsuario = async (req, res) => {
  try {
    const { especieId, apelido, ambiente } = req.body; // dados da planta vindo do corpo da requisição

    if (!especieId || !ambiente) { // apelido é opcional
      return res.status(400).json({ error: "Dados insuficientes" });
    }

    const planta = await prisma.planta.create({ // cria uma nova "planta" no banco
      data: {
        apelido,
        ambiente,
        userId: req.user.id,  // vem do token pelo authMiddleware
        especieId: especieId,
      },
    });

    res.json(planta);
  } catch (err) {
    console.error("Erro ao salvar planta:", err);
    res.status(500).json({ error: "Erro ao salvar planta", detalhes: err.message });
  }
};


export const getPlantasUsuario = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    const plantas = await prisma.planta.findMany({
      where: {
        userId: req.user.id,
      },
      include: { // função do prisma, funciona como um join
        especie: { // vai trazer os dados da especie (nome, descricao, imagem, etc.)
          include: {
            rotinas: true,
          }
        } 
      },
    });

    res.json(plantas);
  } catch (err) {
    console.error("Erro ao buscar plantas:", err);
    res.status(500).json({ error: "Erro ao buscar plantas", detalhes: err.message });
  }
};
