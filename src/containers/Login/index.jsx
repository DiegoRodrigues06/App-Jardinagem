import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>

      {/* Link para voltar à Home */}
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default Login;
