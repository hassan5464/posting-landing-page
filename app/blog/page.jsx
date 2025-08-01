import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';



async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
  
    const postes = await res.json();
    return postes;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}



const Blog = async () => {
  const data = await getData();

  return(
      <div className={styles.mainContainer}>
        
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt="image"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))} 
    </div>
    
  )
}

export default Blog