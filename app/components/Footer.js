import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Image src="/logo1.png" alt="Digital Project Logo" width={150} height={60} />
          <p className={styles.logoText}>DIGITAL PROJECT</p>
        </div>

        {/* Information Section */}
        <div className={styles.infoSection}>
          <h3>Information</h3>
          <ul>
            <li><Link href="/">Main</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/certifications">Certifications</Link></li>
            <li><Link href="/contacts">Contacts</Link></li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div className={styles.contactSection}>
          <h3>Contacts</h3>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📍</span>
            <p>1234 Sample Street<br />Austin Texas 78704</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>📞</span>
            <p>512.333.2222</p>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>✉️</span>
            <p>sampleemail@gmail.com</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className={styles.socialSection}>
          <h3>Social Media</h3>
          <div className={styles.socialIcons}>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn />
            </Link>
            <Link href="https://pinterest.com" aria-label="Pinterest">
              <FaPinterestP />
            </Link>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
}