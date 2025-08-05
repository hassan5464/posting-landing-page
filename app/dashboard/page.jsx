"use client"
import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const Dashboard = () => {
  
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args)=> fetch(...args).then(res=> res.json())
  const {data, mutate,  error, isloading} = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  console.log(data)
  console.log("session", session)
  if(session.status === "loading"){
    return <p>loading...</p>
  }
  if(session.status === "unauthenticated"){
    router?.push('/dashboard/login')
  }
  const handleDelete = async (id) =>{
    try{
      await fetch(`/api/posts/${id}`,{
        method: "DELETE",
      });
      mutate();
      
    }catch(err){
      console.log(err)
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try{
      await fetch("api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          userName: session.data.user.name,
        })
      });
      mutate();
      e.target.reset()
    }catch(error){
      console.log("database error")
    }
  }



  if(session.status === "authenticated"){
  
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isloading ? "loadin" : data?.map((post) =>(<div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image src={post.image} width={200} height={100} alt={post.title} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.delete} onClick={()=> handleDelete(post._id)}>X</span>
              </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1 className={styles}>Add New Post</h1>
          <input type='text' placeholder="Title" className={styles.input} />
          <input type='text' placeholder="Desc" className={styles.input} />
          <input type='text' placeholder="Image" className={styles.input} />
          <textarea placeholder="Content" className={styles.textArea} cols="30" rows="10" ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    )
}
}

export default Dashboard