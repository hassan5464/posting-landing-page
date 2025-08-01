"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

const Login = () => {

const handleSubmit = async(e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials" , {email, password});
    }







  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>

      <form
        action={async () => {
          await signIn();
        }}
      >
        <button type="submit" style={{cursor: "pointer"}} onClick={() => signIn("google")}>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
