import styles from "../css/Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailIcon from "../assets/Cadastro/email.png";
import senhaIcon from "../assets/Cadastro/lock.png";

function Login() {
  const [aceitou, setAceitou] = useState(false);
  const navigate = useNavigate();
  const handleCadastro = (e) => {
  e.preventDefault();

  if (!aceitou) {
    alert("Você não aceitou os termos de uso.");
    return;
  }

  navigate("/Login");
};

  return (
      <main className={styles.main}>
        <h1> Olá, só mais uma Etapa </h1>
        <p className={styles.p1}> Faça seu login de forma rápida e segura para ter acesso completo a sua conta e a nossos produtos. </p>
        <section className={styles.section}>
          <div className={styles.bem_vindo}>
            <h2> Seja Bem-vindo! </h2>
            <p> Crie sua conta agora </p>
            <Link to={"/pages/Cadastro"} className={styles.btn}> Cadastrar </Link>
          </div>
                  <div className={styles.entrar_conta}>
                    <h2> Entre em sua conta </h2>
                    <p className={styles.entrar}> Tenha acesso a seu plano </p>
          
                    <form onSubmit={handleCadastro}>
          
                      <div className={styles.escrever}>
                        <img src={emailIcon} alt="Ícone Email" />
                        <input type="email" placeholder="Email" required />
                      </div>
          
                      <div className={styles.escrever}>
                        <img src={senhaIcon} alt="Ícone Senha" />
                        <input type="password" placeholder="Senha" required />
                      </div>
          
                      <div className={styles.manter_conectado}>
                        <label>
                          <input
                            type="checkbox"
                            checked={aceitou}
                            onChange={(e) => setAceitou(e.target.checked)}
                          />
                          <span className={styles.manter}>
                            Manter-se {" "}
                            <a href="#" className={styles.conectado}>conectado.</a>
                          </span>
                        </label>
                      </div>
          
                      <button type="submit" className={styles.btn2}>
                        Login
                      </button>

                    </form>
                  </div>
        </section>
      </main>
    )
}

export default Login;
