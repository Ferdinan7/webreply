import styles from "./certi.css";

export default function Home() {
    return (
        <div className={styles.main}>
        <h1 style={{fontSize:45,color:"#bdbdbd"}}>COMPANY</h1>
        <h1 style={{fontSize:50, marginTop:-30, fontWeight: "bold"}}>Certifications</h1>
        </div>
    );
}