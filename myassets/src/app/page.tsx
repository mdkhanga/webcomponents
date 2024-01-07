'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false);
// const router = useRouter();



function handleSignon()  {

  console.log("signon called");
  setLoggedIn(true);
   // router.push('/');

}

const handleSignoff = () => {
  console.log("signoff called");
  setLoggedIn(false);
  //  router.push('/');
}

let but ;

if (loggedIn) {
  but = <button onClick={handleSignoff}> SignOff</button>
} else {
  but = <button onClick={handleSignon}> Signon</button>
}
 


  console.log("redering the page");
  return (
    <main className={styles.main}>
      <button onClick={() => {alert("hello")}}> Hello </button>
      <br></br>
      {but}
    </main>
  )
}
