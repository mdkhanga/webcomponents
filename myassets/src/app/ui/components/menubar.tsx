'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Home.module.css';

export default function MenuBar() {


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

	return (
		<ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/assets">Assets</Link></li>
        <li><Link href="/flex">Contact</Link></li>
        <li style={{float : 'right'}}><Link href="" onClick={handleSignoff}> Signoff </Link></li>
        <li style={{float : 'right'}}><Link href=""> Hi {username} </Link></li>
      </ul>
	)
}