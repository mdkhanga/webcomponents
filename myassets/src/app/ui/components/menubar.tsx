'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Home.module.css';
import { signOut, useSession } from 'next-auth/react';

export default function MenuBar() {


	const router = useRouter();
	// Check if the username cookie exists

	const { data: session, status } = useSession();
	
	const [username, setUsername] = useState('');


	 console.log(session)
	
   useEffect(() => {
	 /* const val = Cookies.get('username');
	 setUsername(val);
	 if (val == undefined || val === '') {
	   // If the username cookie doesn't exist, redirect to the login page
	   router.push('/signin');
	 } */
	 
	 if (status === "authenticated" && session.user?.name != null ) {
		setUsername(session.user?.name) ;
	 } else {
		router.push("/api/auth/signin")
	 }

   }, [username, router]); 
   
   const handleSignoff = (e) => {
	 e.preventDefault();
	 Cookies.remove('username');
	 setUsername('')
	 signOut();
	 router.push('/');
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