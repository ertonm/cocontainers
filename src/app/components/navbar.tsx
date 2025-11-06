import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href="./" className={styles.logo}>
          CO/co
        </Link>

        <nav className={styles.nav}>
          <Link href="/shop">Shop</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}