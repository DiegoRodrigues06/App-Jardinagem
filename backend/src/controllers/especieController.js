import prisma from "../db.js";

export const getEspecies = async (req, res) => {
  try {
    const especies = await prisma.especie.findMany();
    res.json(especies);
  } catch (err) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};

// listar todas ou buscar por nome via query.
export const getEspeciesByName = async (req, res) => {
  console.log("Parametros de pesquisa:", req.query); // log dos parâmetros de consulta

  const { nome } = req.query; 
  try {
    let especies;

    if (nome && nome.trim() !== "") { // se o nome foi fornecido e n for vazio volta todos os resultados que contenham o nome
      especies = await prisma.especie.findMany({
        where: {
          nome: {
            contains: nome,      
          },
        },
      });
    } else { // se n for fornecido nome, volta todas as espécies
      especies = await prisma.especie.findMany();
    }

    res.json(especies);
  } catch (err) {
    console.error("Erro ao buscar espécies:", err);
    res.status(500).json({ error: "Erro ao buscar espécies" });
  }
};
