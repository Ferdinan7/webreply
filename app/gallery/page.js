import styles from "./gallery.module.css"
import Image from "next/image"
import { Divider } from "@nextui-org/divider";

export default function Home() {
    return (
        <div className={styles.main}>
        <h1 style={{fontSize:45, color:"#bdbdbd"}}>Photo</h1>
        <h1 style={{fontSize:50, marginTop:-30}}>Gallery</h1>
        <Divider style={{color:"#bdbdbd", marginTop:-15}}/>
        <div className={styles.gallery}>
            <div className={styles.galleryItem}>
                <Image src="/gallery1.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery2.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery3.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery4.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery5.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery6.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery7.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery8.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery9.jpg" width={210} height={260} alt='imgGallery' />
            </div>
            <div className={styles.galleryItem}>
                <Image src="/gallery10.jpg" width={210} height={260} alt='imgGallery' />
            </div>
        </div>
        </div>
    );
}