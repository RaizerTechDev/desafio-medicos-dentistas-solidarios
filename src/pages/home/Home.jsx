import { Link } from "react-router-dom";
import S from "./home.module.scss";
import heroImg from "../../assets/home/medico-dentista.png";
import heroBadge from "../../assets/home/telescopio.png";

export default function Home() {
  return (
    <main>
      <section className={S.heroSection}>
        <div className={S.textArea}>
          <div className={S.badgeBox}>
            <img src={heroBadge} alt="imagem telescópio" />
            <span className={S.badge}>Saúde para todos</span>
          </div>

          <h1>Saúde e cuidado sem barreiras</h1>
          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>
          <div className={S.buttons}>
            <Link to="/voluntario">
              <button className={S.primaryBtn}>Seja Voluntário</button>
            </Link>
            <a href="">
              <button className={S.secondaryBtn}>Como Ajudar</button>
            </a>
          </div>
        </div>

        <div className={S.imageArea}>
          <img src={heroImg} alt="Profissional voluntário da saúde" />
        </div>
      </section>

      <section className={S.missao}>
        <h2>Nossa Missão</h2>
        <p className={S.missao_text}>
          Transformar vidas através do acesso universal a saúde de qualidade
        </p>

        <div className={S.missao_cards}>
          <article className={S.missao_card}>
            <h3>Acesso Equitativo</h3>
            <p>
              Garantir que todos tenham acesso a cuidados de saúde de qualidade,
              independentemente de sua condição financeira.
            </p>
          </article>

          <article className={S.missao_card}>
            <h3>Comunidade Forte</h3>
            <p>
              Construir uma rede de profissionais de saúde dedicados a servir
              com compaixão e profissionalismo.
            </p>
          </article>

          <article className={S.missao_card}>
            <h3>Bem-estar Total</h3>
            <p>
              Oferecer atendimento integral em medicina geral e odontologia para
              melhorar a qualidade de vida.
            </p>
          </article>
        </div>
      </section>

      <section className={S.impacto}>
        <h2>Nosso Impacto</h2>
        <p className={S.impacto_text}>
          Transformando a saúde de nossa comunidade, um paciente de cada vez!
        </p>

        <div className={S.impacto__cards}>
          <article className={S.impacto__card}>
            <h3>2,500+</h3>
            <p>Pessoas Atendidas</p>
          </article>

          <article className={S.impacto__card}>
            <h3>150+</h3>
            <p>Profissionais Voluntários</p>
          </article>

          <article className={S.impacto__card}>
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
          </article>

          <article className={S.impacto__card}>
            <h3>5+</h3>
            <p>Anos de Dedicação</p>
          </article>
        </div>
      </section>
    </main>
  );
}
