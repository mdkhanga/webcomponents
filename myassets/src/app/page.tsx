'use client'
import React from 'react'
import Image from 'next/image'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/Home.module.css';


export default function Home() {

  
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



const handleSignoff = () => {
  Cookies.remove('username');
  setUsername('')
  router.push('/signin');
}

  console.log("redering the page");
  return (
    <main className={styles.myDiv}>
      <ul>
        <li><a className={styles.active} href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li style={{float : 'right'}}><a href="#about">About</a></li>
      </ul>
      <div className={styles.mydiv}> Welcome {username}</div>
      <button onClick={handleSignoff}> SignOff</button>
    </main>
  )
}
