import prisma from "../db.js";

export const getEspecies = async (req, res) => {
  try {
    const especies = await prisma.especie.findMany();
    res.json(especies);
  } catch (err) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};
