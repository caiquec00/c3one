import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function OptInPage() {
  return (
    <>
      <Head>
        <title>Consentimento para Mensagens SMS - C³ One</title>
        <meta
          name="description"
          content="Consentimento para recebimento de mensagens SMS do sistema de atendimento C³ One"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className={styles.hero} style={{ minHeight: "auto", padding: "60px 20px" }}>
        <div className={styles.heroContent} style={{ maxWidth: "800px" }}>
          <h1 style={{ marginBottom: "30px" }}>
            Consentimento para Mensagens SMS
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
            Informações sobre recebimento de mensagens de texto do sistema de atendimento
          </p>
        </div>
      </section>

      <section className={styles.about} style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        {/* O que você receberá */}
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "var(--logo-blue)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            ✓ O que você receberá
          </h2>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li style={{ marginBottom: "10px", paddingLeft: "25px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem" }}>•</span>
              Confirmações de agendamentos e consultas
            </li>
            <li style={{ marginBottom: "10px", paddingLeft: "25px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem" }}>•</span>
              Lembretes de compromissos
            </li>
            <li style={{ marginBottom: "10px", paddingLeft: "25px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem" }}>•</span>
              Notificações de status de tickets de suporte
            </li>
            <li style={{ marginBottom: "10px", paddingLeft: "25px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem" }}>•</span>
              Respostas automáticas do atendimento ao cliente
            </li>
            <li style={{ marginBottom: "10px", paddingLeft: "25px", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem" }}>•</span>
              Atualizações sobre pedidos e serviços
            </li>
          </ul>
        </div>

        {/* Como funciona */}
        <div style={{ marginBottom: "40px", backgroundColor: "#f0f7ff", padding: "25px", borderRadius: "8px", border: "1px solid #d0e7ff" }}>
          <h2 style={{ color: "var(--logo-blue)", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            🔒 Como funciona
          </h2>
          <div style={{ lineHeight: "1.8" }}>
            <p style={{ marginBottom: "15px" }}>
              <strong>Opt-In:</strong> Ao fornecer seu número de telefone durante o cadastro ou atendimento, você concorda em receber mensagens SMS relacionadas ao seu atendimento e serviços.
            </p>
            <p style={{ marginBottom: "15px" }}>
              <strong>Opt-Out:</strong> Você pode cancelar o recebimento de mensagens a qualquer momento respondendo <strong style={{ color: "var(--logo-blue)" }}>STOP</strong> para qualquer mensagem.
            </p>
            <p>
              <strong>Ajuda:</strong> Para obter ajuda, responda <strong style={{ color: "var(--logo-blue)" }}>HELP</strong> para qualquer mensagem.
            </p>
          </div>
        </div>

        {/* Taxas e informações */}
        <div style={{ marginBottom: "40px", backgroundColor: "#f8f9fa", padding: "25px", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
          <h2 style={{ color: "var(--logo-blue)", marginBottom: "20px" }}>
            💰 Taxas e Informações
          </h2>
          <div style={{ lineHeight: "1.8" }}>
            <p style={{ marginBottom: "10px" }}>
              <strong>Taxas de mensagem podem aplicar</strong> conforme seu plano de telefonia.
            </p>
            <p style={{ marginBottom: "10px" }}>
              As mensagens são enviadas apenas para fins de suporte ao cliente e gestão de relacionamento.
            </p>
            <p>
              Não enviamos mensagens promocionais ou de marketing através deste serviço.
            </p>
          </div>
        </div>

        {/* Consentimento */}
        <div style={{ 
          backgroundColor: "#e8f5e9", 
          padding: "25px", 
          borderRadius: "8px", 
          border: "2px solid var(--logo-green)",
          marginBottom: "40px"
        }}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#2e7d32" }}>
            <strong>✓ Ao fornecer seu número de telefone e confirmar, você concorda em receber mensagens SMS conforme descrito acima.</strong>
          </p>
        </div>

        {/* Links úteis */}
        <div style={{ 
          borderTop: "2px solid #e0e0e0", 
          paddingTop: "30px", 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "20px",
          justifyContent: "center"
        }}>
          <Link href="/contact" style={{ color: "var(--logo-blue)", textDecoration: "underline" }}>
            Contato
          </Link>
          <Link href="/about" style={{ color: "var(--logo-blue)", textDecoration: "underline" }}>
            Sobre Nós
          </Link>
          <Link href="/services" style={{ color: "var(--logo-blue)", textDecoration: "underline" }}>
            Serviços
          </Link>
        </div>

        {/* Footer info */}
        <div style={{ 
          textAlign: "center", 
          marginTop: "40px", 
          paddingTop: "20px", 
          borderTop: "1px solid #e0e0e0",
          color: "var(--logo-gray)",
          fontSize: "0.9rem"
        }}>
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          <p style={{ marginTop: "10px" }}>© {new Date().getFullYear()} C³ One - Sistema de Gestão</p>
        </div>
      </section>
    </>
  );
}

