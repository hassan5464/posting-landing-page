"use client"
import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'


const Dashboard = () => {
  const fetcher = (...args)=> fetch(...args).then(res=> res.json())
  const {data, error, isloading} = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
  const session = useSession()
  console.log("session", session)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard