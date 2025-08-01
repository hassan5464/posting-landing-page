import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/public/hero.png"
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digidal products.</h1>
        <p className={styles.dsec}>
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.button}><Link href="/portfolio">See Our Works</Link></button>
      </div>
      <div className={styles.item}>  
            <Image src={Hero}  alt='hero image' className={styles.img} />
      </div>
      
    </div>
  );
}
