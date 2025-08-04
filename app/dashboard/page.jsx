"use client"
import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Dashboard = () => {
  
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args)=> fetch(...args).then(res=> res.json())
  const {data, error, isloading} = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  console.log(data)
  console.log("session", session)
  if(session.status === "loading"){
    return <p>loading...</p>
  }
  if(session.status === "unauthenticated"){
    router?.push('/dashboard/login')
  }
 if(session.status === "authenticated"){
  
    return (
      <div>Dashboard</div>
    )
}
}

export default Dashboard