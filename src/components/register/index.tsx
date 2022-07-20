import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import './styles.css'

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
    <div id="container">
      <h1 className="h1-register">Universities List</h1>
      <main>
        <form>
          <div className="register-div">
            <input {...register('email', { required: true })} type="email" name="email" placeholder="E-mail" />
            <input {...register('password', { required: true })} type="password" name="password" placeholder="Senha" />
            <div className="button-div">
              <button onClick={handleSubmit(onSubmit)} className="enter-button-style">Registrar</button>
            </div>
            <p>Já possui um cadastro? &nbsp; <a className="a-register" href="/">Voltar ao ínicio</a></p>
          </div>
        </form>
      </main>
    </div>
  )
}
