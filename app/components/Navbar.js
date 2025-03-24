import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Image src="/logo1.png" alt="Logo" width={150} height={50} />
      </div>
      <ul className={styles.navLinks}>
         <li>
          <Link href="/">MAIN</Link>
        </li>
        <li>
          <Link href="/gallery">GALLERY</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/certifications">CERTIFICATIONS</Link>
        </li>
        <li>
          <Link href="/contacts">CONTACTS</Link>
        </li>
      </ul>
    </nav>
  );
}