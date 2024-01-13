'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


export default function Assets() {

  
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
    <main>
      <div> Assets for {username}</div>
      <button onClick={handleSignoff}> SignOff</button>
    </main>
  )
}
