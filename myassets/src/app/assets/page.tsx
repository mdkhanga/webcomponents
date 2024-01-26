'use client'
import React from 'react'
import Link from 'next/link'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Home.module.css';
import MenuBar from '@/app/ui/components/menubar';


export default function Assets() {

  

  console.log("redering the page");
  return (
    
	<div className={styles.mydiv}>
	  <MenuBar/>
    </div> 
  )
}
