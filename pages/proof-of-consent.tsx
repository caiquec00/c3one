import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

/**
 * Proof of Consent Page - Twilio Toll-Free Verification
 * 
 * Esta página atende aos requisitos do Twilio para verificação de números toll-free:
 * - Linguagem explícita sobre SMS/text messaging
 * - Consentimento separado de outros acordos
 * - Declaração clara do que o usuário está concordando
 * - Descrição dos tipos de mensagens
 * - Exibição proeminente
 * 
 * URL: https://c3one.com/proof-of-consent
 */

export default function ProofOfConsentPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [consented, setConsented] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || !consented) {
      alert('Por favor, preencha o número de telefone e aceite o consentimento.');
      return;
    }

    // TODO: Salvar consentimento no banco de dados
    // TODO: Enviar para API de consentimento
    
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Consentimento para Mensagens SMS/Texto - C³ One</title>
        <meta
          name="description"
          content="Consentimento explícito para recebimento de mensagens SMS/texto do sistema de atendimento C³ One - TCPA Compliance"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section className={styles.hero} style={{ minHeight: "auto", padding: "60px 20px" }}>
        <div className={styles.heroContent} style={{ maxWidth: "900px" }}>
          <h1 style={{ marginBottom: "20px" }}>
            Consentimento para Mensagens SMS/Texto
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
            C³ One - Sistema de Gestão
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--logo-gray)" }}>
            Três vezes mais inovação, tecnologia e confiança.
          </p>
        </div>
      </section>

      <section className={styles.about} style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* SEÇÃO 1: O QUE VOCÊ RECEBERÁ - EXPLÍCITO E CLARO */}
            <div style={{ 
              marginBottom: "40px", 
              backgroundColor: "#ffffff", 
              padding: "30px", 
              borderRadius: "8px", 
              border: "2px solid var(--logo-blue)" 
            }}>
              <h2 style={{ 
                color: "var(--logo-blue)", 
                marginBottom: "25px", 
                fontSize: "1.8rem",
                display: "flex", 
                alignItems: "center", 
                gap: "10px" 
              }}>
                ✓ Informações sobre recebimento de mensagens de texto do sistema de atendimento
              </h2>
              
              <h3 style={{ 
                color: "var(--logo-blue)", 
                marginBottom: "20px", 
                fontSize: "1.4rem",
                display: "flex", 
                alignItems: "center", 
                gap: "10px" 
              }}>
                ✓ O que você receberá
              </h3>
              
              <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
                <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem", fontWeight: "bold" }}>•</span>
                  <strong>Confirmações de agendamentos e consultas</strong>
                </li>
                <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem", fontWeight: "bold" }}>•</span>
                  <strong>Lembretes de compromissos</strong>
                </li>
                <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem", fontWeight: "bold" }}>•</span>
                  <strong>Notificações de status de tickets de suporte</strong>
                </li>
                <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem", fontWeight: "bold" }}>•</span>
                  <strong>Respostas automáticas do atendimento ao cliente</strong>
                </li>
                <li style={{ marginBottom: "12px", paddingLeft: "25px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--logo-blue)", fontSize: "1.2rem", fontWeight: "bold" }}>•</span>
                  <strong>Atualizações sobre pedidos e serviços</strong>
                </li>
              </ul>
            </div>

            {/* SEÇÃO 2: COMO FUNCIONA - EXPLÍCITO E CLARO */}
            <div style={{ 
              marginBottom: "40px", 
              backgroundColor: "#e3f2fd", 
              padding: "30px", 
              borderRadius: "8px", 
              border: "2px solid var(--logo-blue)" 
            }}>
              <h2 style={{ 
                color: "var(--logo-blue)", 
                marginBottom: "25px", 
                fontSize: "1.6rem",
                display: "flex", 
                alignItems: "center", 
                gap: "10px" 
              }}>
                🔒 Como funciona
              </h2>
              
              <div style={{ lineHeight: "1.8" }}>
                <div style={{ 
                  backgroundColor: "#ffffff", 
                  padding: "20px", 
                  borderRadius: "6px", 
                  marginBottom: "15px",
                  border: "1px solid #b3d9ff"
                }}>
                  <p style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "1.1rem" }}>
                    <strong>Opt-In:</strong>
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    Ao fornecer seu número de telefone durante o cadastro ou atendimento, <strong style={{ color: "var(--logo-blue)" }}>você concorda em receber mensagens SMS relacionadas ao seu atendimento e serviços</strong>.
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic" }}>
                    Este consentimento é específico para mensagens de texto (SMS) e é separado de outros acordos, como Política de Privacidade ou Termos de Serviço.
                  </p>
                </div>
                
                <div style={{ 
                  backgroundColor: "#ffffff", 
                  padding: "20px", 
                  borderRadius: "6px", 
                  marginBottom: "15px",
                  border: "1px solid #b3d9ff"
                }}>
                  <p style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "1.1rem" }}>
                    <strong>Opt-Out:</strong>
                  </p>
                  <p>
                    Você pode cancelar o recebimento de mensagens a qualquer momento respondendo <strong style={{ color: "#d32f2f" }}>STOP</strong> para qualquer mensagem.
                  </p>
                </div>
                
                <div style={{ 
                  backgroundColor: "#ffffff", 
                  padding: "20px", 
                  borderRadius: "6px",
                  border: "1px solid #b3d9ff"
                }}>
                  <p style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "1.1rem" }}>
                    <strong>Ajuda:</strong>
                  </p>
                  <p>
                    Para obter ajuda, responda <strong style={{ color: "var(--logo-blue)" }}>HELP</strong> para qualquer mensagem.
                  </p>
                </div>
              </div>
            </div>

            {/* SEÇÃO 3: TAXAS E INFORMAÇÕES - EXPLÍCITO E CLARO */}
            <div style={{ 
              marginBottom: "40px", 
              backgroundColor: "#f5f5f5", 
              padding: "30px", 
              borderRadius: "8px", 
              border: "2px solid #e0e0e0" 
            }}>
              <h2 style={{ 
                color: "var(--logo-blue)", 
                marginBottom: "20px", 
                fontSize: "1.6rem"
              }}>
                💰 Taxas e Informações
              </h2>
              
              <div style={{ lineHeight: "1.8" }}>
                <p style={{ marginBottom: "10px" }}>
                  <strong>Taxas de mensagem podem aplicar</strong> conforme seu plano de telefonia.
                </p>
                <p style={{ marginBottom: "10px" }}>
                  As mensagens são enviadas apenas para fins de suporte ao cliente e gestão de relacionamento.
                </p>
                <p style={{ fontWeight: "bold", color: "#333" }}>
                  Não enviamos mensagens promocionais ou de marketing através deste serviço.
                </p>
              </div>
            </div>

            {/* SEÇÃO 4: DECLARAÇÃO DE CONSENTIMENTO EXPLÍCITO - PROEMINENTE */}
            <div style={{ 
              backgroundColor: "#fff3cd", 
              padding: "30px", 
              borderRadius: "8px", 
              border: "4px solid #ffc107",
              marginBottom: "40px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}>
              <h2 style={{ 
                color: "#333", 
                marginBottom: "20px", 
                fontSize: "1.8rem",
                textAlign: "center",
                fontWeight: "bold"
              }}>
                DECLARAÇÃO DE CONSENTIMENTO EXPLÍCITO PARA MENSAGENS SMS/TEXTO
              </h2>
              
              <div style={{ 
                backgroundColor: "#ffffff", 
                padding: "25px", 
                borderRadius: "6px",
                border: "2px solid #ffc107"
              }}>
                <p style={{ 
                  fontSize: "1.3rem", 
                  lineHeight: "1.8", 
                  color: "var(--logo-blue)",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "20px"
                }}>
                  ✓ Ao fornecer seu número de telefone e confirmar, você concorda em receber mensagens SMS conforme descrito acima.
                </p>
                
                <div style={{ 
                  backgroundColor: "#e3f2fd", 
                  padding: "20px", 
                  borderRadius: "6px",
                  borderLeft: "4px solid var(--logo-blue)"
                }}>
                  <p style={{ 
                    fontSize: "1.2rem", 
                    fontWeight: "bold", 
                    color: "var(--logo-blue)",
                    marginBottom: "15px"
                  }}>
                    EU CONCORDO EM RECEBER MENSAGENS DE TEXTO (SMS) DA C³ ONE
                  </p>
                  <p style={{ lineHeight: "1.8" }}>
                    Ao marcar a caixa de consentimento abaixo e fornecer meu número de telefone, <strong style={{ color: "var(--logo-blue)" }}>eu explicitamente concordo e autorizo a C³ One a enviar mensagens de texto (SMS)</strong> para o número fornecido.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulário de Consentimento */}
            <div style={{ 
              backgroundColor: "#ffffff", 
              padding: "30px", 
              borderRadius: "8px", 
              border: "2px solid #e0e0e0",
              marginBottom: "30px"
            }}>
              <h2 style={{ 
                color: "var(--logo-blue)", 
                marginBottom: "25px", 
                fontSize: "1.6rem"
              }}>
                Formulário de Consentimento
              </h2>
              
              {/* Número de Telefone */}
              <div style={{ marginBottom: "25px" }}>
                <label style={{ 
                  display: "block", 
                  marginBottom: "10px", 
                  fontWeight: "bold",
                  color: "#333"
                }}>
                  Número de Telefone (com código do país) *
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  placeholder="+1 404 819 9612"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    fontSize: "1rem"
                  }}
                />
                <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "5px" }}>
                  Exemplo: +1 404 819 9612 (formato internacional)
                </p>
              </div>

              {/* Checkbox de Consentimento - EXPLÍCITO E PROEMINENTE */}
              <div style={{ 
                backgroundColor: "#fff3cd", 
                padding: "25px", 
                borderRadius: "8px", 
                border: "4px solid #ffc107",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                  <input
                    type="checkbox"
                    id="sms-consent-explicit"
                    required
                    checked={consented}
                    onChange={(e) => setConsented(e.target.checked)}
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "5px",
                      flexShrink: 0
                    }}
                  />
                  <label htmlFor="sms-consent-explicit" style={{ flex: 1 }}>
                    <span style={{ 
                      fontSize: "1.8rem", 
                      fontWeight: "bold", 
                      color: "var(--logo-blue)",
                      display: "block",
                      marginBottom: "15px"
                    }}>
                      ✓ EU CONCORDO EM RECEBER MENSAGENS DE TEXTO (SMS) DA C³ ONE
                    </span>
                    <p style={{ 
                      fontSize: "1.1rem", 
                      fontWeight: "bold", 
                      marginBottom: "15px",
                      color: "#333"
                    }}>
                      Ao marcar esta caixa, eu confirmo explicitamente que:
                    </p>
                    <ul style={{ 
                      listStyle: "disc", 
                      paddingLeft: "25px", 
                      lineHeight: "2",
                      marginBottom: "15px"
                    }}>
                      <li><strong>Li e entendi completamente</strong> a declaração de consentimento acima</li>
                      <li><strong>Concordo explicitamente</strong> em receber mensagens de texto (SMS) da C³ One</li>
                      <li><strong>Entendo que posso cancelar</strong> a qualquer momento respondendo <strong>STOP</strong> para qualquer mensagem</li>
                      <li><strong>Reconheço que podem aplicar-se taxas</strong> de mensagem conforme meu plano de telefonia</li>
                      <li><strong>Este consentimento é específico para SMS</strong> e é separado de outros acordos (Política de Privacidade, Termos de Serviço)</li>
                    </ul>
                    <p style={{ 
                      fontSize: "0.9rem", 
                      color: "#666", 
                      fontStyle: "italic",
                      marginTop: "15px"
                    }}>
                      Este consentimento é obrigatório para receber mensagens SMS da C³ One e está em conformidade com as leis federais dos EUA (TCPA - Telephone Consumer Protection Act).
                    </p>
                  </label>
                </div>
              </div>

              {/* Informações da Empresa */}
              <div style={{ 
                backgroundColor: "#f5f5f5", 
                padding: "20px", 
                borderRadius: "6px", 
                marginTop: "25px",
                fontSize: "0.9rem",
                color: "#666"
              }}>
                <p><strong>Empresa:</strong> C³ One LLC</p>
                <p><strong>Website:</strong> <Link href="https://c3one.com" style={{ color: "var(--logo-blue)", textDecoration: "underline" }}>https://c3one.com</Link></p>
                <p><strong>Email:</strong> caique@c3one.com</p>
                <p><strong>Telefone:</strong> +1 404 819 9612</p>
              </div>
            </div>

            {/* Botão de Envio */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <button
                type="submit"
                disabled={!phoneNumber || !consented}
                style={{
                  padding: "15px 40px",
                  backgroundColor: "var(--logo-blue)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  cursor: !phoneNumber || !consented ? "not-allowed" : "pointer",
                  opacity: !phoneNumber || !consented ? 0.5 : 1,
                  transition: "background-color 0.3s"
                }}
                onMouseOver={(e) => {
                  if (!(!phoneNumber || !consented)) {
                    e.currentTarget.style.backgroundColor = "#0056b3";
                  }
                }}
                onMouseOut={(e) => {
                  if (!(!phoneNumber || !consented)) {
                    e.currentTarget.style.backgroundColor = "var(--logo-blue)";
                  }
                }}
              >
                Confirmar Consentimento para SMS
              </button>
            </div>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <div style={{ 
              width: "80px", 
              height: "80px", 
              backgroundColor: "#e8f5e9", 
              borderRadius: "50%", 
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}>
              <span style={{ fontSize: "3rem", color: "#4caf50" }}>✓</span>
            </div>
            <h2 style={{ 
              fontSize: "2rem", 
              fontWeight: "bold", 
              marginBottom: "15px",
              color: "#333"
            }}>
              Consentimento Registrado com Sucesso!
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "10px" }}>
              Seu consentimento para receber mensagens SMS foi registrado. 
              Você receberá mensagens de texto da C³ One conforme descrito acima.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#999", marginTop: "20px" }}>
              Lembre-se: você pode cancelar a qualquer momento respondendo <strong>STOP</strong> para qualquer mensagem.
            </p>
          </div>
        )}

        {/* Links úteis */}
        <div style={{ 
          borderTop: "2px solid #e0e0e0", 
          paddingTop: "30px", 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px"
        }}>
          <Link href="/privacy-policy" style={{ color: "var(--logo-blue)", textDecoration: "underline" }}>
            Política de Privacidade
          </Link>
          <Link href="/terms-of-service" style={{ color: "var(--logo-blue)", textDecoration: "underline" }}>
            Termos de Serviço
          </Link>
          <Link href="/contact" style={{ color: "var(--logo-blue)", textDecoration: "underline" }}>
            Contato
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
          <p><strong>Contato</strong></p>
          <p><strong>Sobre Nós</strong></p>
          <p><strong>Serviços</strong></p>
          <p style={{ marginTop: "20px" }}>Última atualização: 03/12/2025</p>
          <p style={{ marginTop: "10px" }}>© {new Date().getFullYear()} C³ One - Sistema de Gestão</p>
          <p style={{ marginTop: "10px", fontSize: "0.8rem" }}>
            Esta página atende aos requisitos do Twilio para verificação de números toll-free (TCPA Compliance)
          </p>
          <p style={{ marginTop: "15px", fontSize: "0.85rem", color: "#999" }}>
            C³ One - Três vezes mais inovação, tecnologia e confiança.
          </p>
        </div>
      </section>
    </>
  );
}

