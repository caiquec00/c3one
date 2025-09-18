import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLInputElement).value,
    };

    setStatus("Enviando...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Mensagem enviada com sucesso ✅");
      form.reset();
    } else {
      setStatus("Erro ao enviar ❌");
    }
  };

  return (
    <>
      <Head>
        <title>Contato | C³ One</title>
        <meta
          name="description"
          content="Entre em contato com a C³ One - Três vezes mais inovação, tecnologia e confiança."
        />
      </Head>

      <main className={styles.contact}>
        <h1>Fale Conosco</h1>
        <p>
          Preencha o formulário abaixo ou envie um e-mail para{" "}
          <a href="mailto:contact@c3one.com">contact@c3one.com</a>.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            Nome:
            <input
              type="text"
              name="name"
              required
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel}>
            E-mail:
            <input
              type="email"
              name="email"
              required
              className={styles.formInput}
            />
          </label>
          <label className={styles.formLabel}>
            Mensagem:
            <textarea
              name="message"
              rows={5}
              required
              className={styles.formTextarea}
            ></textarea>
          </label>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>

        {status && <p className={styles.status}>{status}</p>}

        <div className={styles.extraContacts}>
          <p>
            📩 Suporte:{" "}
            <a href="mailto:support@c3one.com">support@c3one.com</a>
          </p>
        </div>
      </main>
    </>
  );
}