import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import './styles.css'
import animacaoregistro from '../../assets/animacaoregistro.svg'

type FormData = {
  email: string;
  password: string;
}

export function RegisterPage() {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate()

  function onSubmit(e: FormData) {
    signIn(e)
    navigate('/home')
  }

  return (
    <div className="main-register">
      <div className="left-register">
        <h1>Fleeting Universidades</h1>
        <p>Sua lista completa aqui.</p>
        <img src={animacaoregistro} className="left-login-image" alt="Universitária" />
      </div>
      <div className="right-register">
        <div className="card-register">
          <h1>Criar nova conta!</h1>
          <div className="textfield-register">
            <label htmlFor="usuario">Usuário</label>
            <input {...register('email', { required: true })} type="email" name="email" placeholder="Usuário" />
          </div>
          <div className="textfield-register">
            <label htmlFor="usuario">E-mail</label>
            <input {...register('email', { required: true })} type="email" name="email" placeholder="E-mail" />
          </div>
          <div className="textfield-register">
            <label htmlFor="senha">Senha</label>
            <input {...register('password', { required: true })} type="password" name="password" placeholder="Senha" />
          </div>
          <button onClick={handleSubmit(onSubmit)} className="button-register">Cadastre-se</button>
          <p className="p-register">Já possui um cadastro? &nbsp; <a href="/">Voltar ao ínicio.</a></p>
        </div>
      </div>
    </div>
  )
}
