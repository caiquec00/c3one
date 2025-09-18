import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <>
      <Head>
        <title>Serviços | C³ One</title>
        <meta
          name="description"
          content="Consultoria, Implantação e Suporte — C³ One: Três vezes mais inovação, tecnologia e confiança."
        />
      </Head>

      <section className={styles.page}>
        <header className={styles.header}>
          <h1>Nossos Serviços</h1>
          <p>
            Três pilares para acelerar a transformação do seu negócio:{" "}
            <strong>Consultoria</strong>, <strong>Implantação</strong> e{" "}
            <strong>Suporte</strong>.
          </p>
        </header>

        <section className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.emoji}>🧭</div>
            <h2>Consultoria</h2>
            <p>
              Diagnóstico estratégico, mapeamento de necessidades e um roteiro
              claro para evoluir com tecnologia — com foco em ROI e simplicidade.
            </p>
            <ul className={styles.list}>
              <li>Assessment de TI e processos</li>
              <li>Roadmap de inovação</li>
              <li>Arquitetura de soluções</li>
            </ul>
            <Link href="/contact" className={styles.cta}>
              Fale com um consultor
            </Link>
          </article>

          <article className={styles.card}>
            <div className={styles.emoji}>⚙️</div>
            <h2>Implantação</h2>
            <p>
              Da prova de conceito ao go-live. Entrega orientada a valor, prazos
              realistas e comunicação transparente.
            </p>
            <ul className={styles.list}>
              <li>Implementação ponta a ponta</li>
              <li>Integrações e migrações</li>
              <li>Treinamento e handover</li>
            </ul>
            <Link href="/contact" className={styles.cta}>
              Solicite uma proposta
            </Link>
          </article>

          <article className={styles.card}>
            <div className={styles.emoji}>🛡️</div>
            <h2>Suporte</h2>
            <p>
              Acompanhamento contínuo para garantir estabilidade, performance e
              evolução junto ao seu negócio.
            </p>
            <ul className={styles.list}>
              <li>Monitoramento e SLAs</li>
              <li>Manutenção preventiva</li>
              <li>Melhorias contínuas</li>
            </ul>
            <Link href="/contact" className={styles.ctaSecondary}>
              Falar com o suporte
            </Link>
          </article>
        </section>

        <section className={styles.finalCta}>
          <h2>Pronto para começar? 🚀</h2>
          <p>Conte pra gente seus objetivos — nós cuidamos do caminho.</p>
          <Link href="/contact" className={styles.ctaLarge}>
            Fale Conosco
          </Link>
        </section>
      </section>
    </>
  );
}