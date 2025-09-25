// faz a conexão com o banco de dados

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;

