import styles from "./project1.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project1() {
    return (
        <div className={styles.projectContainer}>
           <div className={styles.main}>
        <h1 style={{fontSize:45, color:"#bdbdbd"}}>SAMPLE</h1>
        <h1 style={{fontSize:50, marginTop:-30, fontWeight: 600}}>PROJECT 1</h1>
            </div>
            
            <div className={styles.projectContent}>
                <div className={styles.mainImage}>
                    <Image 
                        src="/project1img.jpg" 
                        alt="Project 1 Main Image" 
                        width={1000} 
                        height={500} 
                        layout="responsive"
                    />
                </div>
                
                <div className={styles.projectDescription}>
                <div className={styles.floorPlan}>
                            <Image 
                                src="/project1img2.jpg" 
                                alt="Floor Plan 1" 
                                width={400} 
                                height={300} 
                            />
                        </div>
                    <div className={styles.textContent}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className={styles.floorPlan}>
                            <Image 
                                src="/project1img3.jpg" 
                                alt="Floor Plan 2" 
                                width={1200} 
                                height={300} 
                            />
                        </div>
            </div>
        </div>
    );
}