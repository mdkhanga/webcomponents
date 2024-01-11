'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Cookies from 'js-cookie';


export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
 // Check if the username cookie exists
 const username = Cookies.get('username');
useEffect(() => {
  if (!username) {
    // If the username cookie doesn't exist, redirect to the login page
    router.push('/signin');
  }
}, [username, router]);



const handleSignoff = () => {
  Cookies.remove('username');
  router.push('/signin');
}


 


  console.log("redering the page");
  return (
    <main>
      <button onClick={handleSignoff}> SignOff</button>
    </main>
  )
}
