"use client"
import React from 'react'
import {links} from "@/constants/index.js";
import Link from 'next/link';
import styles from "./nav.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>lamamaia</Link>
      <div className={styles.link}>
        {links.map((link) =>(
          <Link href={link.url} key={link.id}
            >{link.title}</Link>
        ))}
        <button className={styles.logout} onClick={() => console.log("Logout")}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar