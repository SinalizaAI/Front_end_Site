import styles from "../css/Como_Funciona.module.css";
import Video from "../assets/Como_funciona/video_ex.mp4";
import { Link } from "react-router-dom";

function Como_Funciona() {
  return (
    <section className={styles.funciona_sec} id="funciona">
      <div className={styles.container}>
        <h1>Como funciona na prática?</h1>
        <video autoPlay loop>
          <source src={Video} />
        </video>
        <Link to={"/Tradutor"} className={styles.btn}>
          Teste agora
        </Link>
      </div>
    </section>
  );
}

export default Como_Funciona;
