import styles from "./projects.module.css";
import { Divider } from "@nextui-org/divider";
import Link from "next/link"

export default function Home() {
    return (
<div className={styles.main}>
    <h1 style={{fontSize:45,color:"#bdbdbd"}}>Our</h1>
    <h1 style={{fontSize:50, marginTop:-30}}>Projects</h1>
    <Divider style={{color:"#fbfbfb", marginTop:-15}}/>
    <div className={styles.container}>
        <div className={styles.project}>
            <img src="/projects1.jpg" alt="Project 1" width={670} height={435}/>
            <div className={styles.description}>
                <h2>Sample Project</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href="/projects/project1">
                <button className={styles.viewMore}>VIEW MORE
                <span className={styles.arrow}>→</span>
                </button>
                </Link>
            </div>
        </div>
        <div className={styles.project}>
            <img src="/projects2.jpg" alt="Project 2" width={670} height={435}/>
            <div className={styles.description}>
                <h2>Sample Project 2</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className={styles.viewMore}>VIEW MORE
                <span className={styles.arrow}>→</span>
                </button>
            </div>
        </div>
        <div className={styles.project}>
            <img src="/projects3.jpg" alt="Project 3" width={670} height={435}/>
            <div className={styles.description}>
                <h2>Sample Project 3</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className={styles.viewMore}>VIEW MORE
                <span className={styles.arrow}>→</span>
                </button>
            </div>
        </div>
    </div>
</div>
    );
  }