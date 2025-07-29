"use client"
import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className={styles.container}>
      
      <form
          action={async () => {
            
            await signIn()
          }}
        >
          <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login