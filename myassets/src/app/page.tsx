'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Home.module.css';
import MenuBar from '@/app/ui/components/menubar';
import { statSync } from 'fs';


export default function Home() {



  return (
    
    <div className={styles.mydiv}>
      <MenuBar/>
      <div> 
          
      </div>
    </div>
    
  )

}
