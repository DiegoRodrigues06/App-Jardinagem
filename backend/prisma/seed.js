// prisma/seed.js
console.log("iniciando execução do seed.js");

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Array com os dados das 20 plantas
const plantasData = [
    { nome: 'Samambaia (Nephrolepis exaltata)', descricao: 'Planta clássica de folhagem verde e exuberante, perfeita para ambientes internos com boa umidade.', cuidados: 'Mantenha o solo sempre úmido, mas não encharcado. Gosta de luz indireta e alta umidade. Borrife água nas folhas regularmente.', imagem: '/uploads/img_db/samambaia.jpg' },
    { nome: 'Margarida (Leucanthemum vulgare)', descricao: 'Flor campestre e delicada, famosa por suas pétalas brancas e miolo amarelo. Simboliza a pureza e o amor.', cuidados: 'Precisa de sol pleno por pelo menos 6 horas diárias. Gosta de solo bem drenado e regas regulares, sem encharcar.', imagem: '/uploads/img_db/margarida.jpg' },
    { nome: 'Rosa (Rosa sp.)', descricao: 'Uma das flores mais populares do mundo, conhecida por sua beleza e perfume. Existe em inúmeras cores e variedades.', cuidados: 'Requer sol pleno e solo rico em matéria orgânica. Faça podas anuais para estimular a floração e regue a base da planta, evitando as folhas.', imagem: '/uploads/img_db/rosa.jpg' },
    { nome: 'Orquídea (Phalaenopsis)', descricao: 'Flor elegante e exótica, muito apreciada como planta de interior. Suas flores podem durar meses.', cuidados: 'Gosta de luz indireta e brilhante. Regue apenas quando o substrato estiver quase seco. Evite pratinhos com água parada.', imagem: '/uploads/img_db/orquidea.jpg' },
    { nome: 'Suculenta (Echeveria)', descricao: 'Planta que armazena água em suas folhas carnudas, ideal para iniciantes por sua baixa manutenção.', cuidados: 'Precisa de muito sol direto. Regue somente quando o solo estiver completamente seco. Excesso de água pode apodrecer as raízes.', imagem: '/uploads/img_db/suculenta.jpg' },
    { nome: 'Cacto (Cactaceae)', descricao: 'Famosos por sua resistência à seca e seus espinhos, os cactos são perfeitos para ambientes ensolarados e secos.', cuidados: 'Regue muito pouco, apenas quando o solo estiver seco há vários dias. Precisam de sol pleno para prosperar.', imagem: '/uploads/img_db/cacto.jpg' },
    { nome: 'Girassol (Helianthus annuus)', descricao: 'Flor imponente que se move em direção ao sol, conhecida por sua grande flor amarela e sementes comestíveis.', cuidados: 'Necessita de sol pleno durante todo o dia. O solo deve ser bem drenado e mantido úmido, especialmente durante a floração.', imagem: '/uploads/img_db/girassol.jpg' },
    { nome: 'Jiboia (Epipremnum aureum)', descricao: 'Planta trepadeira muito versátil e fácil de cuidar, com folhas em formato de coração que podem ser verdes ou manchadas.', cuidados: 'Tolera bem ambientes com pouca luz, mas prefere luz indireta. Deixe o solo secar um pouco entre as regas.', imagem: '/uploads/img_db/jiboia.jpg' },
    { nome: 'Espada-de-São-Jorge (Dracaena trifasciata)', descricao: 'Planta escultural e extremamente resistente, conhecida por purificar o ar. Suas folhas são rígidas e verticais.', cuidados: 'Adapta-se a quase qualquer nível de luz, de baixa a alta. Regue muito pouco, é tolerante à seca.', imagem: '/uploads/img_db/espada-de-sao-jorge.jpg' },
    { nome: 'Zamioculca (Zamioculcas zamiifolia)', descricao: 'Planta de folhagem verde-escura e brilhante, quase artificial. É muito resistente à falta de água e de luz.', cuidados: 'Prefere luz indireta, mas tolera sombra. Deixe o solo secar completamente entre as regas.', imagem: '/uploads/img_db/zamioculca.jpg' },
    { nome: 'Costela-de-Adão (Monstera deliciosa)', descricao: 'Planta tropical com folhas grandes e recortadas que se tornaram um ícone de decoração de interiores.', cuidados: 'Gosta de luz indireta e brilhante. Mantenha o solo úmido, mas não encharcado. Adora umidade.', imagem: '/uploads/img_db/costela-de-adao.jpg' },
    { nome: 'Begônia (Begonia sp.)', descricao: 'Gênero com centenas de espécies, apreciadas tanto por suas flores coloridas quanto por suas folhas com texturas e padrões únicos.', cuidados: 'Prefere luz indireta e solo úmido. Evite molhar as folhas para prevenir fungos.', imagem: '/uploads/img_db/begonia.jpg' },
    { nome: 'Antúrio (Anthurium)', descricao: 'Conhecido por sua inflorescência brilhante em formato de coração, geralmente vermelha, que dura bastante tempo.', cuidados: 'Gosta de ambientes com boa luminosidade indireta e alta umidade. Mantenha o substrato sempre úmido.', imagem: '/uploads/img_db/anturio.jpg' },
    { nome: 'Lavanda (Lavandula)', descricao: 'Planta aromática com flores roxas, famosa por seu perfume relaxante usado em óleos essenciais e cosméticos.', cuidados: 'Precisa de sol pleno e solo bem drenado, de preferência arenoso. Gosta de pouca água.', imagem: '/uploads/img_db/lavanda.jpg' },
    { nome: 'Hortelã (Mentha sp.)', descricao: 'Erva aromática muito popular e de crescimento rápido, usada em chás, sucos, doces e salgados.', cuidados: 'Gosta de sol parcial e solo sempre úmido. É uma planta invasora, por isso é melhor cultivá-la em vasos.', imagem: '/uploads/img_db/hortela.jpg' },
    { nome: 'Manjericão (Ocimum basilicum)', descricao: 'Erva essencial na culinária, especialmente a italiana. Possui um aroma doce e picante.', cuidados: 'Precisa de pelo menos 6 horas de sol direto por dia. Gosta de solo úmido e bem drenado.', imagem: '/uploads/img_db/manjericao.jpg' },
    { nome: 'Violeta (Saintpaulia ionantha)', descricao: 'Pequena planta de interior que floresce o ano todo, com flores aveludadas em tons de roxo, rosa, azul e branco.', cuidados: 'Prefere luz indireta e brilhante. Regue por baixo, colocando água no pratinho, e descarte o excesso após 30 minutos.', imagem: '/uploads/img_db/violeta.jpg' },
    { nome: 'Lírio-da-paz (Spathiphyllum)', descricao: 'Planta elegante com folhas verde-escuras e flores brancas. É conhecida por ser uma ótima purificadora de ar.', cuidados: 'Gosta de sombra ou luz indireta. Suas folhas "murcham" para avisar que precisa de água.', imagem: '/uploads/img_db/lirio-da-paz.jpg' },
    { nome: 'Palmeira-areca (Dypsis lutescens)', descricao: 'Palmeira de interior muito popular, com folhas finas e arqueadas que dão um toque tropical à decoração.', cuidados: 'Gosta de luz indireta e brilhante. Mantenha o solo uniformemente úmido.', imagem: '/uploads/img_db/palmeira-areca.jpg' },
    { nome: 'Clorofito (Chlorophytum comosum)', descricao: 'Também conhecida como planta-aranha, é muito fácil de cuidar e se propaga através de "mudinhas" que nascem em longas hastes.', cuidados: 'Prefere luz indireta. É bem resistente à falta de água, mas prefere solo ligeiramente úmido.', imagem: '/uploads/img_db/clorofito.jpg' }
];

async function runSeed() {
  try {
    console.log("Inserindo espécies...");
    await prisma.especie.createMany({ data: plantasData });
    console.log("✅ Seed finalizado com sucesso!");
  } catch (err) {
    console.error("❌ Erro no seed:", err);
  } finally {
    await prisma.$disconnect();
  }
}

runSeed();