import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'

export function LoginPage() {


  function handleLogin() {
    const navigate = useNavigate();
    navigate('/home');
  }


  return (
    <div id="container">
      <h1>Universities List</h1>
      <main>
        <form>
          <div className="information-div">
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="senha" placeholder="Senha" />
            <div className="button-div">
              <button>Entrar</button>
            </div>
            <p>Ainda não tem um cadastro? &nbsp; <a href="/register">Cadastre-se</a></p>
          </div>
        </form>
      </main>
    </div>
  )
}
