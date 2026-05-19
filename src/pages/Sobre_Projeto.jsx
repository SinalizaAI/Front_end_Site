import styles from "../css/Sobre_Projeto.module.css";

import { Link } from "react-router-dom";
import Imagem_cultura from "../assets/Sobre_Projeto/Cultura.png";
import Imagem_linha_preta from "../assets/Sobre_Projeto/Linha_preta.png";
import Imagem_inclusao from "../assets/Sobre_Projeto/Inclusao.png";
import Imagem_empatia from "../assets/Sobre_Projeto/Empatia.png";
import Imagem_respeito from "../assets/Sobre_Projeto/Respeito.png";
import Imagem_etica from "../assets/Sobre_Projeto/Etica.png";
import Imagem_inovacao from "../assets/Sobre_Projeto/Inovacao.png";
import Imagem_por_que_existe from "../assets/Sobre_Projeto/Por_que_existe.png";
import Imagem_diferencial from "../assets/Sobre_Projeto/Diferencial.png";

function Sobre_Projeto() {
  return (
    <main className={styles.main}>
      <section className={styles.origem}>
        <h1>A origem do SinalizaAI</h1>

        <div>
          <p>
            O SinalizaAI nasceu para transformar acessibilidade em algo natural,
            humano e presente no cotidiano.
            <br />
            Unindo inteligência artificial, inclusão e inovação, criamos uma
            nova forma de aproximar pessoas surdas e ouvintes em qualquer
            ambiente.
            <br />
            Desenvolvemos experiências capazes de reduzir barreiras de
            comunicação e promover autonomia através da inovação. Acreditamos
            que acessibilidade não deve ser adaptação. Deve ser padrão.
          </p>
        </div>

        <img src={Imagem_linha_preta} alt="Linha decorativa" />
      </section>

      <section className={styles.cultura}>
        <div className={styles.divisoes_cultura}>
          <h2>Nossa Missão</h2>

          <p>
            Ser a ponte entre a comunicação inclusiva e eficiente para pessoas
            que se comunicam através da linguagem de sinais, dando mais
            autonomia para tarefas cotidianas, utilizando tecnologia inovadora
            com IA integrada através de uma plataforma digital.
          </p>
        </div>

        <div className={styles.image_cultura}>
          <img src={Imagem_cultura} alt="Cultura do SinalizaAI" />
        </div>

        <div className={styles.divisoes_cultura}>
          <h2>Nossa Visão</h2>

          <p>
            Gerar mais oportunidades para a comunidade surda nacional e
            internacional, quebrando barreiras na comunicação interpessoal,
            tornando-se a melhor plataforma de inclusão digital para a
            comunidade surda.
          </p>
        </div>

        <div className={`${styles.divisoes_cultura} ${styles.valores}`}>
          <h2>Nossos Valores</h2>

          <div className={styles.valores_icones}>

            <div className={styles.valor_item}>
              <img
                src={Imagem_inclusao}
                className={styles.icon_valores}
                alt="Inclusão"
              />
              <span>Inclusão</span>
            </div>

            <div className={styles.valor_item}>
              <img
                src={Imagem_empatia}
                className={styles.icon_valores}
                alt="Empatia"
              />
              <span>Empatia</span>
            </div>

            <div className={styles.valor_item}>
              <img
                src={Imagem_respeito}
                className={styles.icon_valores}
                alt="Respeito"
              />
              <span>Respeito</span>
            </div>

            <div className={styles.valor_item}>
              <img
                src={Imagem_etica}
                className={styles.icon_valores}
                alt="Ética"
              />
              <span>Ética</span>
            </div>

            <div className={styles.valor_item}>
              <img
                src={Imagem_inovacao}
                className={styles.icon_valores}
                alt="Inovação"
              />
              <span>Inovação</span>
            </div>

          </div>
        </div>
      </section>

      <img src={Imagem_linha_preta} alt="Linha decorativa" />

      <section className={styles.por_que_existe}>
        <div className={styles.texto_por_que}>
          <h2>Por que o SinalizaAI existe?</h2>

          <p>
            Milhões de pessoas surdas enfrentam barreiras de comunicação todos os dias.
            <br />
            Em muitos ambientes, a acessibilidade ainda depende de adaptações limitadas, atendimento despreparado ou da ausência de recursos realmente inclusivos.
            <br />
            O resultado é uma experiência marcada por dependência, dificuldade de expressão e exclusão silenciosa em espaços que deveriam acolher todos igualmente.
            <br />
            O SinalizaAI surge para transformar essa realidade através da tecnologia, criando uma comunicação mais acessível, intuitiva e humana entre pessoas surdas e ouvintes.
          </p>
        </div>

        <div className={styles.imagem_por_que}>
          <img
            src={Imagem_por_que_existe}
            alt="Motivação do projeto SinalizaAI"
          />
        </div>
      </section>

      <img src={Imagem_linha_preta} alt="Linha decorativa" />

      <section className={styles.queremos_ir}>
        <h2> Para onde queremos ir? </h2>

      </section>

      <img src={Imagem_linha_preta} alt="Linha decorativa" />

      <section className={styles.diferencial}>
        <h2>Qual o diferencial do SinalizaAI?</h2>

        <p>
          O grande diferencial do SinalizaAI está na união entre inteligência artificial e um totem interativo desenvolvido para tornar a comunicação mais acessível no cotidiano.
          A solução é capaz de converter sinais em Libras para texto e voz em tempo real, permitindo interações mais naturais entre pessoas surdas e ouvintes em diferentes ambientes.
        </p>

        <img
          src={Imagem_diferencial}
          alt="Diferencial do SinalizaAI"
        />

        <p>
          Além da tecnologia de tradução, o SinalizaAI se destaca pela experiência física e acessível proporcionada pelo totem, criado para integrar inclusão, praticidade e inovação em um único ecossistema.
          Mais do que uma ferramenta tecnológica, o SinalizaAI busca transformar acessibilidade em presença, autonomia e conexão humana.
        </p>

        <img src={Imagem_linha_preta} alt="Linha decorativa" />
      </section>

      <section className={styles.equipe}>
        <h2>Conheça nossa equipe</h2>
        <Link to="/pages/Sobre_Equipe" className={styles.btn}>
          Saiba mais
        </Link>
      </section>
    </main>
  );
}

export default Sobre_Projeto;