import * as Reg from "./styles/Register.js";
import { useState } from "react";
import api from "../services/api.js";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
    setMessage("Por favor, preencha todos os campos.");
    return;
  }
    try {
      const res = await api.post("/users/register", {
        nome,
        email,
        senha,
      });
      setMessage("Usuário criado: " + res.data.nome);
    } catch (err) {
      setMessage(err.response?.data?.error || "Erro ao registrar");
    }
  };

  return (
    <Reg.PageContainer>
      <Reg.LoginBox>
        <Reg.Title>Sign Up</Reg.Title>

        {/* Formulário de registro */}
        <Reg.Form onSubmit={handleRegister}>
          <Reg.Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Reg.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Reg.Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Reg.Button type="submit">Registrar</Reg.Button>
        </Reg.Form>


        {/* Mensagem de resposta */}
        {message && <p style={{ marginTop: "15px" }}>{message}</p>}

        {/* Link para voltar à Início */}
        <Reg.StyledLink to="/">VOLTAR</Reg.StyledLink>
      </Reg.LoginBox>
    </Reg.PageContainer>
  );
}

export default Register;
