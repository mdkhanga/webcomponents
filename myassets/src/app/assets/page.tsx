'use client'
import React from 'react'
import Image from 'next/image'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/Home.module.css';


export default function Assets() {

  
  const router = useRouter();
 // Check if the username cookie exists
 
 const [username, setUsername] = useState('');
 
useEffect(() => {
  
  const val = Cookies.get('username');
  setUsername(val);
  if (val == undefined || val === '') {
    // If the username cookie doesn't exist, redirect to the login page
    router.push('/signin');
  }
}, [username, router]); 



const handleSignoff = (e) => {
  e.preventDefault();	
  Cookies.remove('username');
  setUsername('')
  router.push('/signin');
}

  console.log("redering the page");
  return (
    <main>
		<ul>
        <li><a className={styles.active} href="/">Home</a></li>
        <li><a href="/assets">Assets</a></li>
        <li><a href="#contact">Contact</a></li>
        <li style={{float : 'right'}}><a href="" onClick={handleSignoff}> Signoff </a></li>
        <li style={{float : 'right'}}><a href=""> Hi {username} </a></li>
      </ul>
      <div> Assets for {username}</div>
      <button onClick={handleSignoff}> SignOff</button>
    </main>
  )
}
