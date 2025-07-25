import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';



async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    // If you get an error like "FetchError: invalid json response body at https://jsonplaceholder.typicode.com/posts reason: Unexpected token < in JSON at position 0"
    if(!res.ok){
      throw new Error("Failed to fetch data");
    }
    const postes = await res.json();

    return postes;
  }




const Blog = async () => {
  const data = await getData();

  return(
      <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imgContainer}>
            <Image
              src={`https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg`}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))} 
    </div>
    
  )
}

export default Blog