import { useNavigate } from "react-router-dom";
import './styles.css'
import animacao from '../../assets/animacao.svg'


export function LoginPage() {

  function handleLogin() {
    const navigate = useNavigate();
    navigate('/home');
  }

  function errorEnter() {
    alert("Usuário não encontrado, por favor cadastre-se!")
  }

  return (
    <div className="main-login">
      <div className="left-login">
        <h1>Fleeting Universidades</h1>
        <p>Sua lista completa aqui.</p>
        <img src={animacao} className="left-login-image" alt="Universitária" />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>Bem-vindo!</h1>
          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input type="text" name="usuario" placeholder="Usuário" />
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" />
          </div>
          <button onClick={errorEnter} className="button-login">Entrar</button>
          <p className="p-login">Ainda não possui um cadastro? &nbsp; <a href="/register">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  )
}
