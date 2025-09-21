import prisma from "../db.js";

export const getEspecies = async (req, res) => {
  try {
    const especies = await prisma.especie.findMany();
    res.json(especies);
  } catch (err) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};

// listar todas ou buscar por nome via query
export const getEspeciesByName = async (req, res) => {
  console.log("Query parameters:", req.query); // log dos parâmetros de consulta

  const { nome } = req.query; // pega ?nome=xxx da URL
  try {
    let especies;

    if (nome && nome.trim() !== "") {
      especies = await prisma.especie.findMany({
        where: {
          nome: {
            contains: nome,       // busca parcial
          },
        },
      });
    } else {
      especies = await prisma.especie.findMany();
    }

    res.json(especies);
  } catch (err) {
    console.error("Erro ao buscar espécies:", err);
    res.status(500).json({ error: "Erro ao buscar espécies" });
  }
};
