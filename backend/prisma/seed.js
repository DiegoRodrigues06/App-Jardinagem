// faz os inserts no banco de dados assim que eu der migrate no banco

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Inserindo espécies
  await prisma.especie.createMany({
    data: [
      { nome: "Rosa", descricao: "Flor ornamental muito cultivada.", cuidados: "Necessita de sol pleno e regas regulares.", imagem: "/uploads/img_db/rosa.jpg" },
      { nome: "Girassol", descricao: "Planta de grande porte que segue o sol.", cuidados: "Necessita de muito sol e solo fértil.", imagem: "/uploads/img_db/girassol.jpg" },
      { nome: "Orquídea", descricao: "Flor delicada que cresce em ambientes úmidos.", cuidados: "Regar com pouca água e manter em local arejado.", imagem: "/uploads/img_db/orquidea.jpg" },
      { nome: "Lírio", descricao: "Flor perfumada e ornamental.", cuidados: "Prefere solos bem drenados e sombra parcial.", imagem: "/uploads/img_db/lirio.jpg" },
      { nome: "Hibisco", descricao: "Flor tropical colorida.", cuidados: "Regar frequentemente e manter em sol pleno.", imagem: "/uploads/img_db/hibisco.jpg" },
      { nome: "Tulipa", descricao: "Flor típica de clima frio.", cuidados: "Necessita de solo rico e frio para florescer.", imagem: "/uploads/img_db/tulipa.jpg" },
      { nome: "Cacto", descricao: "Planta adaptada a regiões áridas.", cuidados: "Regar raramente, gosta de sol intenso.", imagem: "/uploads/img_db/cacto.jpg" },
      { nome: "Samambaia", descricao: "Planta ornamental de folhas longas.", cuidados: "Prefere sombra e rega constante.", imagem: "/uploads/img_db/samambaia.jpg" },
      { nome: "Suculenta", descricao: "Planta de fácil cultivo que armazena água.", cuidados: "Regar pouco e expor ao sol direto.", imagem: "/uploads/img_db/suculenta.jpg" },
      { nome: "Violeta", descricao: "Flor pequena e colorida.", cuidados: "Manter em local iluminado mas sem sol direto.", imagem: "/uploads/img_db/violeta.jpg" },
      { nome: "Jasmim", descricao: "Planta trepadeira com flores perfumadas.", cuidados: "Requer sol pleno e regas frequentes.", imagem: "/uploads/img_db/jasmim.jpg" },
      { nome: "Lavanda", descricao: "Planta aromática com flores roxas.", cuidados: "Precisa de sol pleno e pouca água.", imagem: "/uploads/img_db/lavanda.jpg" },
      { nome: "Manjericão", descricao: "Erva aromática muito usada na culinária.", cuidados: "Gosta de sol e regas frequentes.", imagem: "/uploads/img_db/manjericao.jpg" },
      { nome: "Alecrim", descricao: "Erva aromática resistente.", cuidados: "Prefere sol pleno e pouca água.", imagem: "/uploads/img_db/alecrim.jpg" },
      { nome: "Coentro", descricao: "Erva usada na culinária.", cuidados: "Precisa de solo úmido e luz moderada.", imagem: "/uploads/img_db/coentro.jpg" },
      { nome: "Tomateiro", descricao: "Planta que produz tomates.", cuidados: "Necessita de sol pleno e adubação frequente.", imagem: "/uploads/img_db/tomateiro.jpg" },
      { nome: "Laranjeira", descricao: "Árvore frutífera cítrica.", cuidados: "Gosta de muito sol e solo fértil.", imagem: "/uploads/img_db/laranjeira.jpg" },
      { nome: "Bananeira", descricao: "Planta tropical que produz bananas.", cuidados: "Requer solo úmido e clima quente.", imagem: "/uploads/img_db/bananeira.jpg" },
      { nome: "Palmeira", descricao: "Planta ornamental tropical.", cuidados: "Gosta de sol pleno e rega moderada.", imagem: "/uploads/img_db/palmeira.jpg" },
      { nome: "Bonsai", descricao: "Árvore em miniatura cultivada em vasos.", cuidados: "Necessita de podas regulares e rega equilibrada.", imagem: "/uploads/img_db/bonsai.jpg" },
    ],
  });

  const especies = await prisma.especie.findMany();
  // Inserindo rotinas
  const rotinas = {
    Rosa: {
      interno: { frequencia: "3x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por semana", horario: "Manhã" },
    },
    Girassol: {
      interno: { frequencia: "3x por semana", horario: "Tarde" },
      externo: { frequencia: "1x por semana", horario: "Manhã" },
    },
    Orquídea: {
      interno: { frequencia: "1x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por semana", horario: "Manhã" },
    },
    Lírio: {
      interno: { frequencia: "2x por semana", horario: "Tarde" },
      externo: { frequencia: "1x por semana", horario: "Manhã" },
    },
    Hibisco: {
      interno: { frequencia: "3x por semana", horario: "Tarde" },
      externo: { frequencia: "2x por semana", horario: "Tarde" },
    },
    Tulipa: {
      interno: { frequencia: "2x por semana", horario: "Manhã" },
      externo: { frequencia: "1x por semana", horario: "Manhã" },
    },
    Cacto: {
      interno: { frequencia: "1x por mês", horario: "Manhã" },
      externo: { frequencia: "1x a cada 2 meses", horario: "Manhã" },
    },
    Samambaia: {
      interno: { frequencia: "4x por semana", horario: "Manhã" },
      externo: { frequencia: "3x por semana", horario: "Tarde" },
    },
    Suculenta: {
      interno: { frequencia: "2x por mês", horario: "Manhã" },
      externo: { frequencia: "1x por mês", horario: "Manhã" },
    },
    Violeta: {
      interno: { frequencia: "3x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por semana", horario: "Tarde" },
    },
    Jasmim: {
      interno: { frequencia: "2x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por semana", horario: "Manhã" },
    },
    Lavanda: {
      interno: { frequencia: "1x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por mês", horario: "Tarde" },
    },
    Manjericão: {
      interno: { frequencia: "4x por semana", horario: "Manhã" },
      externo: { frequencia: "3x por semana", horario: "Tarde" },
    },
    Alecrim: {
      interno: { frequencia: "1x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por mês", horario: "Manhã" },
    },
    Coentro: {
      interno: { frequencia: "3x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por semana", horario: "Tarde" },
    },
    Tomateiro: {
      interno: { frequencia: "4x por semana", horario: "Manhã" },
      externo: { frequencia: "3x por semana", horario: "Manhã" },
    },
    Laranjeira: {
      interno: { frequencia: "2x por semana", horario: "Manhã" },
      externo: { frequencia: "1x por semana", horario: "Manhã" },
    },
    Bananeira: {
      interno: { frequencia: "3x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por semana", horario: "Manhã" },
    },
    Palmeira: {
      interno: { frequencia: "1x por semana", horario: "Manhã" },
      externo: { frequencia: "2x por mês", horario: "Tarde" },
    },
    Bonsai: {
      interno: { frequencia: "2x por semana", horario: "Manhã" },
      externo: { frequencia: "1x por semana", horario: "Tarde" },
    },
  };

  for (const especie of especies) {
    await prisma.rotina.createMany({
      data: [
        {
          descricao: `Rotina para ${especie.nome} em ambiente interno`,
          ambiente: "interno",
          especieId: especie.id,
          ...rotinas[especie.nome].interno,
        },
        {
          descricao: `Rotina para ${especie.nome} em ambiente externo`,
          ambiente: "externo",
          especieId: especie.id,
          ...rotinas[especie.nome].externo,
        },
      ],
    });
  }
}

main()
  .then(() => console.log("✅ Seed executado com sucesso!"))
  .catch((e) => console.error("❌ Erro no seed:", e))
  .finally(async () => {
    await prisma.$disconnect();
  });
