import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Tradutor.module.css";
import Imagem1 from "../assets/Tradutor/frame_1.png";
import { useWebSocket } from "../hooks/useWebSocket";

function Tradutor() {
  const [modoCamera, setModoCamera] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Hook que conecta ao Python via WebSocket — só ativa quando modoCamera = true
  const { fraseReconhecida, historico, conectado } = useWebSocket(
    "ws://localhost:8765",
    modoCamera
  );

  // Liga/desliga a câmera do browser conforme o modo
  useEffect(() => {
    if (modoCamera) {
      // Pede acesso à câmera do usuário
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Erro ao acessar a câmera:", err);
        });
    } else {
      // Desliga a câmera ao sair do modo
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    }
  }, [modoCamera]);

  return (
    <section className={styles.sec}>
      <h1>Seja bem vindo!</h1>
      <h2>Aqui você poderá realizar um teste gratuito da nossa ferramenta</h2>

      <div className={styles.container}>
        <button onClick={() => setModoCamera(!modoCamera)}>
          {modoCamera
            ? "Câmera (Libras para Texto)"
            : "Áudio/Texto para Libras"}
        </button>

        {/* ── MODO CÂMERA ── */}
        {modoCamera ? (
          <div className={styles.demo_container}>

            {/* Câmera ao vivo */}
            <div className={styles.camera_wrapper}>
              <div className={styles.status_badge} data-conectado={conectado}>
                {conectado ? "● Conectado ao Python" : "○ Aguardando conexão..."}
              </div>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={styles.video}
              />
            </div>

            {/* Painel de reconhecimento */}
            <div className={styles.reconhecimento_wrapper}>

              {/* Frase atual — destaque principal */}
              <div className={styles.frase_principal}>
                {fraseReconhecida ? (
                  <p className={styles.frase_texto}>{fraseReconhecida}</p>
                ) : (
                  <p className={styles.frase_placeholder}>
                    Sinalize em Libras para começar...
                  </p>
                )}
              </div>

              {/* Histórico dos últimos sinais */}
              {historico.length > 0 && (
                <div className={styles.historico}>
                  <span className={styles.historico_titulo}>Histórico</span>
                  <ul className={styles.historico_lista}>
                    {historico.map((item, i) => (
                      <li key={i} className={styles.historico_item}>
                        <span className={styles.historico_hora}>{item.hora}</span>
                        <span>{item.texto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

        ) : (
          /* ── MODO IMAGEM (original) ── */
          <div className={styles.imagem_cont}>
            <img src={Imagem1} alt="Modo do tradutor" />
          </div>
        )}

        <Link to={"/pages/Planos"} className={styles.btn}>
          Conheça nossos planos
        </Link>
      </div>
    </section>
  );
}

export default Tradutor;