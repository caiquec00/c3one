import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre | C³ One</title>
        <meta
          name="description"
          content="Conheça a C³ One - Três vezes mais inovação, tecnologia e confiança. Nossa missão, visão e valores."
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            src="/images/C3OneLogo.png"
            alt="C³ One Logo"
            width={120}
            height={120}
            className={styles.logo}
          />
          <h1>
            Sobre a C<span className={styles.sup}>³</span> One
          </h1>
          <p>
            Três vezes mais inovação, tecnologia e confiança para transformar
            seu negócio.
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <h2>Nossa Missão</h2>
        <p>
          Capacitar empresas através da tecnologia, oferecendo soluções
          inovadoras que geram valor real e crescimento sustentável.
        </p>
      </section>

      <section className={styles.pillars}>
        <h2>Nossos Três Pilares</h2>
        <div className={styles.pillarsGrid}>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon}>🤝</div>
            <h3>Confiança</h3>
            <p>
              Construímos relacionamentos duradouros baseados em transparência,
              ética e resultados consistentes. Cada projeto é tratado com o
              compromisso de entregar excelência.
            </p>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon}>🎨</div>
            <h3>Criatividade</h3>
            <p>
              Pensamos fora da caixa para encontrar soluções únicas e
              inovadoras. Cada desafio é uma oportunidade de criar algo
              extraordinário.
            </p>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon}>🌐</div>
            <h3>Conectividade</h3>
            <p>
              Integramos pessoas, processos e tecnologias para criar
              ecossistemas eficientes que impulsionam o crescimento do seu
              negócio.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Nossos Valores</h2>
        <div className={styles.valuesList}>
          <div className={styles.value}>
            <strong>Inovação Constante:</strong> Sempre buscamos as melhores
            tecnologias e metodologias do mercado.
          </div>
          <div className={styles.value}>
            <strong>Foco no Cliente:</strong> Suas necessidades e objetivos
            são nossa prioridade número um.
          </div>
          <div className={styles.value}>
            <strong>Qualidade:</strong> Entregamos soluções robustas,
            escaláveis e de alta performance.
          </div>
          <div className={styles.value}>
            <strong>Agilidade:</strong> Processos eficientes e entregas no
            prazo, sem comprometer a qualidade.
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Pronto para conhecer mais sobre nosso trabalho?</h2>
        <Link href="/services" className={styles.ctaButton}>
          Conheça nossos serviços
        </Link>
        <Link href="/contact" className={styles.ctaButtonSecondary}>
          Entre em contato
        </Link>
      </section>
    </>
  );
}