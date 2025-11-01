
# App Jardinagem

Um sistema web completo para gerenciamento e cuidado de plantas, com **assistente de IA integrada**, rotinas de cuidados e banco de dados próprio de espécies.  
Desenvolvido com **React (frontend)** e **Node.js + Prisma (backend)**, utilizando **JWT para autenticação** e **SQLite** como banco de dados local.

---

## Funcionalidades Principais

### Assistente Virtual (IA)
- Chatbot integrado via [Typebot.io](https://typebot.io) com API Gemini.
- Responde dúvidas sobre **rotinas de cuidado**, **sintomas das plantas** e **boas práticas de jardinagem**.

### Gestão de Espécies
- Banco de dados com **plantas pré-cadastradas**, contendo:
  - Nome popular  
  - Resumo descritivo  
  - Características e recomendações de cuidado
  - 
### Autenticação Segura
- Sistema de login com **validação via token JWT**.  
- Gerenciamento completo de usuários com registro e sessão persistente ( 7 dias ).

### Backend Node.js
- Desenvolvido em **Express** com **Prisma ORM**.  
- API RESTful que gerencia plantas, usuários e rotinas.  
- Integração com **CORS**, **JWT**, e **dotenv** para variáveis de ambiente.

### Frontend React
- Componentização total com **React + Styled Components**.  
- Rotas gerenciadas via **React Router DOM**.  
- Interface responsiva e moderna, focada em UX.

---

## Estrutura do Projeto

```

App-Jardinagem/
├── backend/
│   ├── prisma/              # Schema do banco e migrations
│   ├── src/
│   │   ├── controllers/     # Lógica das rotas
│   │   ├── routes/          # Definição das rotas da API
│   │   ├── db.js            # Conexão Prisma + SQLite
│   │   └── index.js         # Ponto de entrada do servidor
│   ├── uploads/             # Arquivos e imagens
│   └── .env                 # Variáveis de ambiente
│
├── frontend/
│   ├── src/
│   │   ├── assets/          # Imagens e ícones
│   │   ├── components/      # Componentes React
│   │   ├── functions/       # Funções utilitárias
│   │   ├── routes/          # Páginas e rotas React
│   │   ├── sections/        # Páginas do site
│   │   └── services/        # Chamadas à API 
│   ├── index.html
│   └── vite.config.js
│
├── LICENSE
├── package.json
└── README.md

````

---

## Tecnologias Utilizadas

### Backend
- **Node.js**
- **Express**
- **Prisma ORM**
- **SQLite**
- **JWT (jsonwebtoken)**
- **CORS**
- **PATH**
- **Dotenv**

### Frontend
- **React**
- **React Router DOM**
- **Styled Components**
- **Vite**
- **Typebot.io** (integração IA)

---

## Como Executar Localmente

### Clonar o repositório
```bash
git clone https://github.com/seuusuario/App-Jardinagem-Muito-Brabo-2000.git
cd App-Jardinagem-Muito-Brabo-2000
````

### Instalar dependências

#### Backend

```
cd backend
npm install prisma
npx prisma migrate dev --name init
npm run dev
```

#### Frontend

```
cd ../frontend
npm install vite
npm run dev
```
---

## API Endpoints Principais

| Método     | Rota                                | Descrição                          |
| ---------- | ----------------------------------- | ---------------------------------- |
| **GET**    | `/users/:id`                        | Busca usuário pelo id              |
| **POST**   | `/users/register`                   | Criar usuário                      |
| **POST**   | `/users/login`                      | Login usuário                      |
| **GET**    | `/api/uploads`                      | Buscar arquivos e imagens          |
| **GET**    | `/api/especies/search`              | Rota para buscar planta por nome   |
| **POST**   | `/api/plantas`                      | Rota para criação de rotinas       |
| **GET**    | `/api/plantas/my-plants`            | Busca as plantas do usuário        |
| **DELETE** | `/api/plantas/my-plants/delete/:id` | Deleta plantas pelo id             |
| **PATCH**  | `/api/plantas/my-plants/update/:id` | Editar plantas pelo id             |

---

## Integração com IA (Typebot)

O assistente virtual é embutido no frontend via componente React:

```jsx
<Bubble
  typebot="open-ai-assistant-chat-c7sdlr9"
  apiHost="https://typebot.io"
  theme={{ button: { backgroundColor: "#1D1D1D" } }}
/>
```

Ele utiliza o modelo **Gemini API** com um prompt personalizado para responder apenas perguntas relacionadas a jardinagem.

---

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).

