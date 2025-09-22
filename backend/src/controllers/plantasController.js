import prisma from "../db.js";

export const addPlantaUsuario = async (req, res) => {
  try {
    const { especieId, apelido, ambiente } = req.body;

    if (!especieId) {
      return res.status(400).json({ error: "Dados insuficientes" });
    }

    const planta = await prisma.planta.create({
      data: {
        apelido,
        ambiente,
        userId: req.user.id,  // vem do token via authMiddleware
        especieId: especieId, // usa direto
      },
    });

    res.json(planta);
  } catch (err) {
    console.error("Erro ao salvar planta:", err);
    res.status(500).json({ error: "Erro ao salvar planta", detalhes: err.message });
  }
};
