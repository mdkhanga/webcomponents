'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {

// const router = useRouter();
let isLoggedIn = false;


function handleClick()  {

  console.log("signon called");
  isLoggedIn = true;
   // router.push('/');

}

const handleSignoff = () => {
  alert("signoff called");
  isLoggedIn = false;
  //  router.push('/');

}

 


  console.log("redering the page");
  return (
    <main className={styles.main}>
      <button onClick={() => {alert("hello")}}> Hello </button>
    </main>
  )
}
