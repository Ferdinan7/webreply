"use client";
import styles from "./contact.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactInfo}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Contact</h1>
          <h1 className={styles.infoTitle}>Information</h1>
        </div>
        
        <div className={styles.contactDetails}>
          <h3 className={styles.companyName}>Company Name</h3>
          <p className={styles.address}>1234 Sample Street Austin Texas 76401</p>
          
          <div className={styles.spacer}></div>
          
          <p className={styles.phone}>512.333.2222</p>
          
          <div className={styles.spacer}></div>
          
          <p className={styles.email}>sampleemail@gmail.com</p>
          
          <div className={styles.contactButton}>
            <Link href="mailto:sampleemail@gmail.com">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
      
      <div className={styles.mapContainer}>
        <Image src="/map.jpg" width={800} height={500} alt="map"/>
      </div>
    </div>
  );
}