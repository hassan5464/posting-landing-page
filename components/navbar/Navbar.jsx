"use client"
import React from 'react'
import {links} from "@/constants/index.js";
import Link from 'next/link';
import styles from "./nav.module.css"
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut } from 'next-auth/react';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>lamamia</Link>
      <div className={styles.link}>
        <DarkModeToggle />
        {links.map((link) =>(
          <Link href={link.url} key={link.id}
            >{link.title}</Link>
        ))}
        <button className={styles.logout} onClick={signOut}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar