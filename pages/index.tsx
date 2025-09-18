import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>C³ One - Inovação, Tecnologia e Confiança</title>
        <meta
          name="description"
          content="C³ One - Três vezes mais inovação, tecnologia e confiança."
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            src="/images/C3OneLogo.png"
            alt="C³ One Logo"
            width={150}
            height={150}
            className={styles.logo}
          />
          <h1>
            C<span className={styles.sup}>³</span> One
          </h1>
          <p>Três vezes mais inovação, tecnologia e confiança.</p>
          <Link href="/contact" className={styles.cta}>
            Fale Conosco
          </Link>
        </div>
      </section>

      <section className={styles.about}>
        <h2>Quem Somos</h2>
        <p>
          Na <strong>C³ One</strong> acreditamos em três pilares fundamentais:
          <br />
          Confiança, Criatividade e Conectividade.
          <br />
          Somos movidos pela inovação, ajudando negócios a crescerem de forma
          inteligente e sustentável.
        </p>

        <div className={styles.aboutGrid}>
          <div className={styles.card}>
            <div className={styles.emoji}>🤝</div>
            <h3>Confiança</h3>
            <p>Relações sólidas e transparentes com nossos clientes.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.emoji}>🎨</div>
            <h3>Criatividade</h3>
            <p>Soluções inovadoras para cada desafio.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.emoji}>🌐</div>
            <h3>Conectividade</h3>
            <p>Tecnologia que liga pessoas, dados e resultados.</p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <h2>Nossos Serviços</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.card}>
            <h3>Consultoria</h3>
            <p>
              Analisamos sua realidade, mapeamos suas necessidades e mostramos
              o caminho da inovação.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Implantação</h3>
            <p>
              Colocamos soluções em prática, do planejamento à execução, sem
              complicação.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Suporte</h3>
            <p>
              Acompanhamento contínuo, garantindo que sua tecnologia evolua
              junto com o seu negócio.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <h2>Pronto para levar sua empresa a um novo nível? 🚀</h2>
        <Link href="/contact" className={styles.cta}>
          Solicite uma reunião
        </Link>
      </section>
    </>
  );
}
