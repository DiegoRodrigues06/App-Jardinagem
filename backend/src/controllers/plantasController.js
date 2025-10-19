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


export const delPlantaUsuario = async (req, res) => {
  try {
    const { id } = req.params; // id da planta passada na rota
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    // Verifica se a planta pertence ao usuário
    const planta = await prisma.planta.findUnique({
      where: { id: Number(id) },
    });

    if (!planta) {
      return res.status(404).json({ error: "Planta não encontrada" });
    }

    if (planta.userId !== userId) {
      return res.status(403).json({ error: "Você não tem permissão para deletar esta planta" });
    }

    // Deleta a planta
    await prisma.planta.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: "Planta deletada com sucesso!" });
  } catch (err) {
    console.error("Erro ao deletar planta:", err);
    return res.status(500).json({ error: "Erro interno ao tentar deletar planta." });
  }
};


