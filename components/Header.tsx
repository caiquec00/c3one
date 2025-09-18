// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo à esquerda */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/C3OneLogo.png"
            alt="C³ One Logo"
            width={50}
            height={50}
          />
          <span className={styles.brand}>
            C<span className={styles.sup}>³</span> One
          </span>
        </Link>

        {/* Navegação */}
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/services">Serviços</Link>
          <Link href="/contact">Contato</Link>
          <Link href="/contact" className={styles.cta}>
            Fale Conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}