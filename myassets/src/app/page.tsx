'use client'
import React from 'react'
import Link from 'next/link'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/Home.module.css';
import MenuBar from '@/app/ui/components/menubar';


export default function Home() {


  /*
  const router = useRouter();
 // Check if the username cookie exists
 
 const [username, setUsername] = useState('');
 
useEffect(() => {
  const val = Cookies.get('username');
  setUsername(val);
  if (val === '') {
    // If the username cookie doesn't exist, redirect to the login page
    router.push('/signin');
  }
}, [username, router]); 

const handleSignoff = (e) => {
  e.preventDefault();
  Cookies.remove('username');
  setUsername('')
  router.push('/signin');
} */

  console.log("redering the page");
  /* return (
    <main className={styles.myDiv}>
      <ul>
        <li><Link className={styles.active} href="/">Home</Link></li>
        <li><Link href="/assets">Assets</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li style={{float : 'right'}}><Link href="" onClick={handleSignoff}> Signoff </Link></li>
        <li style={{float : 'right'}}><Link href=""> Hi {username} </Link></li>
      </ul>
      <div className={styles.mydiv}> Welcome {username}</div>
      <button onClick={handleSignoff}> SignOff</button>
    </main>
  ) */

  return (
    <main className={styles.myDiv}>
      <MenuBar/>
      <div className={styles.mydiv}> Welcome </div>
    </main>
  )

}
