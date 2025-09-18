// components/Footer.tsx
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Marca e slogan */}
        <div className={styles.brand}>
          <h3>
            C<span className={styles.sup}>³</span> One
          </h3>
          <p className={styles.tagline}>
            Três vezes mais inovação, tecnologia e confiança.
          </p>
        </div>

        {/* Navegação */}
        <nav className={styles.links}>
          <Link href="/about">Sobre</Link>
          <Link href="/services">Serviços</Link>
          <Link href="/contact">Contato</Link>
        </nav>

        {/* Emails */}
        <div className={styles.emails}>
          <p>
            📩{" "}
            <a href="mailto:contact@c3one.com">
              contact@c3one.com
            </a>
          </p>
          <p>
            🛠{" "}
            <a href="mailto:support@c3one.com">
              support@c3one.com
            </a>
          </p>
        </div>

        {/* Direitos autorais */}
        <div className={styles.copy}>
          <p>© {new Date().getFullYear()} C³ One. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}