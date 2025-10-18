// faz os inserts no banco de dados assim que eu der migrate no banco

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Inserindo espécies
  await prisma.especie.createMany({
    data: [
      {
        nome: "Rosa",
        resumo: "Flor ornamental clássica e símbolo do amor.",
        descricao: "A rosa é uma das flores mais populares do mundo, conhecida por sua beleza e perfume marcante. Existem diversas variedades e cores, cada uma com um significado simbólico próprio. É muito cultivada em jardins e usada para fins decorativos e medicinais.",
        cuidados: "Prefere sol pleno e solo bem drenado. Regue regularmente, evitando encharcar as raízes. Faça podas após a floração para estimular novos brotos e remova folhas secas ou doentes.",
        imagem: "/uploads/img_db/rosa.jpg",
      },
      {
        nome: "Girassol",
        resumo: "Planta solar de grande porte que segue o movimento do sol.",
        descricao: "O girassol é uma planta de crescimento rápido e flores vibrantes que giram em direção ao sol ao longo do dia. É símbolo de energia, vitalidade e alegria. Também é cultivado comercialmente para produção de sementes e óleo.",
        cuidados: "Necessita de sol pleno durante todo o dia e solo fértil, bem drenado. Regue com moderação e adube a cada duas semanas. Proteja de ventos fortes, pois suas hastes podem se partir.",
        imagem: "/uploads/img_db/girassol.jpg",
      },
      {
        nome: "Orquídea",
        resumo: "Flor delicada e sofisticada que cresce em ambientes úmidos.",
        descricao: "As orquídeas são plantas tropicais conhecidas pela beleza exótica e durabilidade de suas flores. Adaptam-se bem a ambientes internos e são amplamente cultivadas como plantas ornamentais.",
        cuidados: "Regue apenas quando o substrato estiver seco e evite deixar água acumulada no vaso. Mantenha em local bem iluminado, mas sem sol direto, e adube a cada 15 dias com fertilizante específico.",
        imagem: "/uploads/img_db/orquidea.jpg",
      },
      {
        nome: "Lírio",
        resumo: "Flor elegante com aroma intenso e pétalas delicadas.",
        descricao: "O lírio é uma planta ornamental muito apreciada pela beleza e perfume de suas flores, que podem ter diversas cores. É frequentemente associada à pureza e à renovação espiritual.",
        cuidados: "Prefere solos bem drenados e locais com sombra parcial. Regue regularmente, mantendo o solo úmido, e evite o acúmulo de água. Faça adubação leve no período de floração.",
        imagem: "/uploads/img_db/lirio.jpg",
      },
      {
        nome: "Hibisco",
        resumo: "Flor tropical de cores vibrantes e ampla floração.",
        descricao: "O hibisco é uma planta de clima quente que produz flores grandes e vistosas, muito usadas para ornamentação e chás medicinais. Suas cores variam do vermelho ao amarelo e rosa.",
        cuidados: "Requer sol pleno e regas diárias nos dias quentes. Pode ser podado para estimular a floração e o crescimento. Utilize adubo orgânico para manter as flores saudáveis.",
        imagem: "/uploads/img_db/hibisco.jpg",
      },
      {
        nome: "Tulipa",
        resumo: "Flor elegante típica de regiões frias, símbolo da primavera.",
        descricao: "As tulipas são amplamente cultivadas em países de clima temperado, especialmente na Holanda. Suas flores em formato de taça e cores variadas tornam-nas símbolo de elegância e romantismo.",
        cuidados: "Necessita de solo fértil e bem drenado. Mantenha em local fresco e com luz indireta. Após a floração, deixe as folhas secarem naturalmente antes de remover o bulbo.",
        imagem: "/uploads/img_db/tulipa.jpg",
      },
      {
        nome: "Cacto",
        resumo: "Planta resistente e de baixa manutenção, ideal para interiores.",
        descricao: "Os cactos são espécies adaptadas a ambientes áridos e quentes. Suas formas únicas e capacidade de armazenar água os tornam populares como plantas decorativas e de fácil cultivo.",
        cuidados: "Regue raramente, apenas quando o solo estiver completamente seco. Coloque em local bem iluminado, preferencialmente com sol direto. Evite excesso de umidade, que pode causar apodrecimento.",
        imagem: "/uploads/img_db/cacto.jpg",
      },
      {
        nome: "Samambaia",
        resumo: "Planta ornamental de folhagem longa e exuberante.",
        descricao: "A samambaia é uma planta tropical que se adapta bem a ambientes internos sombreados. Suas folhas delicadas e arqueadas trazem um toque natural e elegante à decoração.",
        cuidados: "Prefere sombra e ambientes úmidos. Regue com frequência, mantendo o substrato levemente úmido, e borrife água nas folhas para evitar o ressecamento.",
        imagem: "/uploads/img_db/samambaia.jpg",
      },
      {
        nome: "Suculenta",
        resumo: "Planta compacta e resistente que armazena água nas folhas.",
        descricao: "As suculentas são ideais para quem busca plantas de fácil manutenção. São extremamente resistentes à seca e possuem grande variedade de formas e cores.",
        cuidados: "Regue pouco, apenas quando o solo estiver seco. Mantenha em local com boa iluminação e evite o excesso de umidade. Utilize substrato arenoso e bem drenado.",
        imagem: "/uploads/img_db/suculenta.jpg",
      },
      {
        nome: "Violeta",
        resumo: "Flor pequena e delicada, ideal para ambientes internos.",
        descricao: "A violeta é uma planta ornamental muito popular, conhecida por suas flores coloridas e facilidade de cultivo em vasos. Floresce várias vezes ao ano quando bem cuidada.",
        cuidados: "Mantenha em local iluminado, mas sem sol direto. Regue pela base do vaso para evitar molhar as folhas e aplique adubo líquido quinzenalmente.",
        imagem: "/uploads/img_db/violeta.jpg",
      },
      {
        nome: "Jasmim",
        resumo: "Trepadeira aromática com flores brancas e perfumadas.",
        descricao: "O jasmim é uma planta ornamental de perfume intenso, muito usada em jardins e cercas vivas. Suas flores são pequenas, delicadas e altamente perfumadas.",
        cuidados: "Requer sol pleno e regas regulares. Faça podas após o período de floração e adube com fertilizante rico em fósforo para estimular novas flores.",
        imagem: "/uploads/img_db/jasmim.jpg",
      },
      {
        nome: "Lavanda",
        resumo: "Planta aromática e medicinal de flores roxas.",
        descricao: "A lavanda é amplamente utilizada em aromaterapia e perfumaria, além de ter propriedades calmantes. Suas flores exalam um perfume agradável e relaxante.",
        cuidados: "Prefere sol pleno e clima seco. Regue moderadamente e garanta boa drenagem do solo. Evite excesso de umidade nas raízes.",
        imagem: "/uploads/img_db/lavanda.jpg",
      },
      {
        nome: "Manjericão",
        resumo: "Erva aromática usada na culinária e na medicina natural.",
        descricao: "O manjericão é uma erva perfumada muito utilizada em pratos italianos. Possui folhas verdes e brilhantes e cresce bem em ambientes ensolarados.",
        cuidados: "Gosta de sol pleno e regas frequentes. Retire as flores assim que surgirem para prolongar a vida útil da planta e intensificar o sabor das folhas.",
        imagem: "/uploads/img_db/manjericao.jpg",
      },
      {
        nome: "Alecrim",
        resumo: "Erva aromática resistente e versátil.",
        descricao: "O alecrim é uma planta perene de folhas finas e aroma marcante, usada tanto na culinária quanto em produtos medicinais e cosméticos.",
        cuidados: "Prefere sol pleno e solo bem drenado. Regue com moderação e evite excesso de água. Pode ser cultivado em vasos ou diretamente no solo.",
        imagem: "/uploads/img_db/alecrim.jpg",
      },
      {
        nome: "Coentro",
        resumo: "Erva popular na culinária brasileira e internacional.",
        descricao: "O coentro é uma erva aromática de sabor marcante, usada fresca em saladas, molhos e pratos típicos. Cresce rapidamente e é fácil de cultivar.",
        cuidados: "Necessita de solo úmido e luz solar moderada. Regue regularmente e colha as folhas jovens para melhor sabor.",
        imagem: "/uploads/img_db/coentro.jpg",
      },
      {
        nome: "Tomateiro",
        resumo: "Planta frutífera amplamente cultivada em hortas caseiras.",
        descricao: "O tomateiro é uma planta de crescimento rápido e alta produtividade. Suas frutas são ricas em vitaminas e usadas em diversas receitas culinárias.",
        cuidados: "Precisa de sol pleno e regas constantes. Utilize estacas para sustentar os galhos e aplique adubo orgânico periodicamente.",
        imagem: "/uploads/img_db/tomateiro.jpg",
      },
      {
        nome: "Laranjeira",
        resumo: "Árvore cítrica que produz frutos doces e aromáticos.",
        descricao: "A laranjeira é uma das frutíferas mais cultivadas do mundo. Além dos frutos, suas flores brancas e perfumadas são muito apreciadas.",
        cuidados: "Gosta de sol pleno e solo fértil. Regue regularmente e faça podas leves para controlar o crescimento. Aplique adubo orgânico rico em potássio.",
        imagem: "/uploads/img_db/laranjeira.jpg",
      },
      {
        nome: "Bananeira",
        resumo: "Planta tropical de grande porte e crescimento rápido.",
        descricao: "A bananeira é uma planta típica de climas quentes e úmidos, cultivada tanto por sua folhagem ornamental quanto pelos frutos nutritivos.",
        cuidados: "Requer solo úmido, fértil e boa luminosidade. Regue com frequência e mantenha a área livre de ervas daninhas. Corte folhas secas regularmente.",
        imagem: "/uploads/img_db/bananeira.jpg",
      },
      {
        nome: "Palmeira",
        resumo: "Planta tropical de porte elegante e decorativo.",
        descricao: "As palmeiras são amplamente utilizadas no paisagismo por seu aspecto exótico e adaptabilidade a diferentes ambientes. Existem espécies de diversos tamanhos e formatos.",
        cuidados: "Prefere sol pleno e regas regulares. Evite o encharcamento do solo e mantenha a adubação equilibrada para um crescimento saudável.",
        imagem: "/uploads/img_db/palmeira.jpg",
      },
      {
        nome: "Bonsai",
        resumo: "Árvore em miniatura cultivada com técnicas milenares.",
        descricao: "O bonsai é uma arte de origem oriental que busca reproduzir a aparência natural de árvores em tamanho reduzido. Exige paciência e cuidados delicados para manter a forma e o equilíbrio estético.",
        cuidados: "Necessita de podas regulares, regas equilibradas e boa iluminação. Evite mudanças bruscas de temperatura e mantenha o substrato sempre levemente úmido.",
        imagem: "/uploads/img_db/bonsai.jpg",
      },
    ],
  });

  const especies = await prisma.especie.findMany();
  // Inserindo rotinas
  const rotinas = {
  Rosa: {
    interno: {
      regar: { frequencia: "3x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz indireta" },
      umidade: { frequencia: "2x por semana", observacao: "Borrifar leve" },
    },
    externo: {
      regar: { frequencia: "2x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno" },
      umidade: { frequencia: "1x por semana", observacao: "Evitar excesso de água" },
    },
    
  },
  Girassol: {
    interno: {
      regar: { frequencia: "3x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Ambiente bem iluminado" },
      umidade: { frequencia: "1x por semana", observacao: "Evitar encharcar o solo" },
    },
    externo: {
      regar: { frequencia: "1x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno o dia todo" },
      umidade: { frequencia: "Raramente", observacao: "Apenas em climas muito secos" },
    },
  },
  Orquídea: {
    interno: {
      regar: { frequencia: "1x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz filtrada ou indireta" },
      umidade: { frequencia: "3x por semana", observacao: "Borrifar raízes e folhas" },
    },
    externo: {
      regar: { frequencia: "2x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sombra parcial" },
      umidade: { frequencia: "2x por semana", observacao: "Evitar acúmulo de água" },
    },
  },
  Lírio: {
    interno: {
      regar: { frequencia: "2x por semana", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Luz indireta suave" },
      umidade: { frequencia: "3x por semana", observacao: "Borrifar folhas levemente" },
    },
    externo: {
      regar: { frequencia: "1x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol parcial" },
      umidade: { frequencia: "1x por semana", observacao: "Ambiente naturalmente úmido" },
    },
  },
  Hibisco: {
    interno: {
      regar: { frequencia: "3x por semana", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Ambiente claro com sol filtrado" },
      umidade: { frequencia: "2x por semana", observacao: "Borrifar leve" },
    },
    externo: {
      regar: { frequencia: "2x por semana", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Sol direto por várias horas" },
      umidade: { frequencia: "1x por semana", observacao: "Evitar clima muito seco" },
    },
  },
  Tulipa: {
    interno: {
      regar: { frequencia: "2x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz indireta intensa" },
      umidade: { frequencia: "1x por semana", observacao: "Ambiente fresco e ventilado" },
    },
    externo: {
      regar: { frequencia: "1x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno em clima frio" },
      umidade: { frequencia: "Raramente", observacao: "Evitar solo encharcado" },
    },
  },
  Cacto: {
    interno: {
      regar: { frequencia: "1x por mês", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol direto" },
      umidade: { frequencia: "Nunca", observacao: "Não tolera borrifadas" },
    },
    externo: {
      regar: { frequencia: "1x a cada 2 meses", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol intenso e seco" },
      umidade: { frequencia: "Nunca", observacao: "Evitar ambientes úmidos" },
    },
  },
  Samambaia: {
    interno: {
      regar: { frequencia: "4x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sombra com boa luminosidade" },
      umidade: { frequencia: "Diariamente", observacao: "Borrifar generosamente" },
    },
    externo: {
      regar: { frequencia: "3x por semana", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Ambiente sombreado e úmido" },
      umidade: { frequencia: "Diariamente", observacao: "Evitar vento seco" },
    },
  },
  Suculenta: {
    interno: {
      regar: { frequencia: "2x por mês", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol direto ou janela iluminada" },
      umidade: { frequencia: "Nunca", observacao: "Evitar borrifar" },
    },
    externo: {
      regar: { frequencia: "1x por mês", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno" },
      umidade: { frequencia: "Nunca", observacao: "Ambiente seco ideal" },
    },
  },
  Violeta: {
    interno: {
      regar: { frequencia: "3x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz indireta e suave" },
      umidade: { frequencia: "2x por semana", observacao: "Evitar molhar as folhas" },
    },
    externo: {
      regar: { frequencia: "2x por semana", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Sombra parcial" },
      umidade: { frequencia: "1x por semana", observacao: "Ambiente úmido e leve" },
    },
  },
  Jasmim: {
    interno: {
      regar: { frequencia: "2x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz indireta intensa" },
      umidade: { frequencia: "2x por semana", observacao: "Borrifar nas folhas" },
    },
    externo: {
      regar: { frequencia: "2x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno" },
      umidade: { frequencia: "1x por semana", observacao: "Evitar vento seco" },
    },
  },
  Lavanda: {
    interno: {
      regar: { frequencia: "1x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz solar direta" },
      umidade: { frequencia: "Raramente", observacao: "Evitar umidade excessiva" },
    },
    externo: {
      regar: { frequencia: "2x por mês", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno e seco" },
      umidade: { frequencia: "Nunca", observacao: "Ambiente seco ideal" },
    },
  },
  Manjericão: {
    interno: {
      regar: { frequencia: "4x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol direto parcial" },
      umidade: { frequencia: "3x por semana", observacao: "Manter o solo levemente úmido" },
    },
    externo: {
      regar: { frequencia: "3x por semana", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno" },
      umidade: { frequencia: "2x por semana", observacao: "Evitar solo seco por muito tempo" },
    },
  },
  Alecrim: {
    interno: {
      regar: { frequencia: "1x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol direto e ventilação" },
      umidade: { frequencia: "Raramente", observacao: "Evitar borrifar" },
    },
    externo: {
      regar: { frequencia: "2x por mês", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno" },
      umidade: { frequencia: "Nunca", observacao: "Ambiente seco ideal" },
    },
  },
  Coentro: {
    interno: {
      regar: { frequencia: "3x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Ambiente bem iluminado" },
      umidade: { frequencia: "2x por semana", observacao: "Evitar ressecar o solo" },
    },
    externo: {
      regar: { frequencia: "2x por semana", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Sol direto parcial" },
      umidade: { frequencia: "1x por semana", observacao: "Manter o solo fresco" },
    },
  },
  Tomateiro: {
    interno: {
      regar: { frequencia: "4x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol direto ou luz forte" },
      umidade: { frequencia: "2x por semana", observacao: "Evitar umidade nas folhas" },
    },
    externo: {
      regar: { frequencia: "3x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno" },
      umidade: { frequencia: "1x por semana", observacao: "Ambiente ventilado" },
    },
  },
  Laranjeira: {
    interno: {
      regar: { frequencia: "2x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Ambiente claro e ventilado" },
      umidade: { frequencia: "2x por semana", observacao: "Borrifar leve" },
    },
    externo: {
      regar: { frequencia: "1x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno e constante" },
      umidade: { frequencia: "Raramente", observacao: "Ambiente naturalmente úmido" },
    },
  },
  Bananeira: {
    interno: {
      regar: { frequencia: "3x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz forte e calor constante" },
      umidade: { frequencia: "3x por semana", observacao: "Borrifar folhas largas" },
    },
    externo: {
      regar: { frequencia: "2x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno" },
      umidade: { frequencia: "2x por semana", observacao: "Ambiente tropical ideal" },
    },
  },
  Palmeira: {
    interno: {
      regar: { frequencia: "1x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz difusa e sombra parcial" },
      umidade: { frequencia: "2x por semana", observacao: "Borrifar folhas" },
    },
    externo: {
      regar: { frequencia: "2x por mês", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Sol pleno" },
      umidade: { frequencia: "1x por semana", observacao: "Evitar clima seco" },
    },
  },
  Bonsai: {
    interno: {
      regar: { frequencia: "2x por semana", observacao: "Manhã" },
      luz: { frequencia: "Diariamente", observacao: "Luz indireta moderada" },
      umidade: { frequencia: "3x por semana", observacao: "Borrifar o tronco e folhas" },
    },
    externo: {
      regar: { frequencia: "1x por semana", observacao: "Tarde" },
      luz: { frequencia: "Diariamente", observacao: "Sol parcial" },
      umidade: { frequencia: "2x por semana", observacao: "Ambiente equilibrado e úmido" },
    },
  },
};

  async function seedRotinas(especies) {
  const rotinasParaCriar = [];

  for (const especie of especies) {
    const dadosRotina = rotinas[especie.nome];

    if (!dadosRotina) {
      console.warn(`⚠️ Rotina não encontrada para a espécie: ${especie.nome}`);
      continue;
    }

    for (const ambiente of ['interno', 'externo']) {
      const cuidadosPorAmbiente = dadosRotina[ambiente];

      if (!cuidadosPorAmbiente) continue;

      for (const [tipoCuidado, dados] of Object.entries(cuidadosPorAmbiente)) {
        rotinasParaCriar.push({
          tipoCuidado,
          frequencia: dados.frequencia,
          observacao: dados.observacao,
          ambiente,
          especieId: especie.id,
        });
      }
    }
  }

  await prisma.rotina.createMany({
    data: rotinasParaCriar
  });
}

  // Chama a função para inserir as rotinas
  await seedRotinas(especies);
}

main()
  .then(() => console.log("✅ Seed executado com sucesso!"))
  .catch((e) => console.error("❌ Erro no seed:", e))
  .finally(async () => {
    await prisma.$disconnect();
  });
