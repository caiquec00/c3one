// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const isActive = (path: string) => (router.pathname === path ? styles.active : "");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/C3OneLogo.png"
              alt="C3 One Logo"
              width={40}
              height={40}
              priority
            />
            <span className={styles.brandText}>
              C<span className={styles.sup}>3</span> One
            </span>
          </Link>
        </div>

        <button
          className={styles.burger}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          <Link href="/" className={`${styles.link} ${isActive("/")}`} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={`${styles.link} ${isActive("/about")}`} onClick={() => setOpen(false)}>
            Sobre
          </Link>
          <Link href="/services" className={`${styles.link} ${isActive("/services")}`} onClick={() => setOpen(false)}>
            Serviços
          </Link>
          <Link href="/contact" className={`${styles.link} ${isActive("/contact")}`} onClick={() => setOpen(false)}>
            Contato
          </Link>

          <Link href="/contact" className={styles.cta} onClick={() => setOpen(false)}>
            Fale Conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}