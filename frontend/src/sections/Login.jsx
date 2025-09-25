import * as Log from "./styles/Login.js";
import { useState } from "react";
import api from "../services/api.js";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault(); // previne o reload da pag sempre que clico no botao
  if (!email || !senha) {
    setMessage("Por favor, preencha todos os campos.");
    return;
  }
  try {
    const res = await api.post("/users/login", { email, senha });

    // salvar token no localStorage
    localStorage.setItem("token", res.data.token);

    // opcional: salvar também os dados do user
    localStorage.setItem("user", JSON.stringify(res.data.user));

    setMessage("Login OK! Bem-vindo " + res.data.user.nome);
  } catch (err) {
    setMessage(err.response?.data?.error || "Erro ao logar");
  }
};
  
  return (
    <Log.PageContainer>
      <Log.LoginBox>
        <Log.Title>Login</Log.Title>

        {/* Formulário de login */}
        <Log.Form onSubmit={handleLogin}>
          <Log.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Log.Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Log.Button type="submit">Entrar</Log.Button>
        </Log.Form>


        {/* Mensagem de resposta */}
        {message && <p style={{ marginTop: "15px" }}>{message}</p>}

        {/* Link para voltar à Início */}
        <Log.StyledLink to="/">VOLTAR</Log.StyledLink>
      </Log.LoginBox>
    </Log.PageContainer>
  );
}

export default Login;
