import { useRouter } from "next/router";
import styles from "@/components/styles/Header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.logoContainer} onClick={() => router.push("/")}>
        <img src="/images/logo.svg" alt="Logo" className={styles.logo} />
        <span className={styles.brand}>CyberSense</span>
      </div>

      {/* Navigation Section */}
      <nav className={styles.nav}>
        <a href="#about" className={styles.navLink}>
          About Us
        </a>
        <a href="#info" className={styles.navLink}>
          Info
        </a>
      </nav>
    </header>
  );
}
