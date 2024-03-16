'use client'
import React from 'react'
import Link from 'next/link'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Home.module.css';
import MenuBar from '@/app/ui/components/menubar';
import Assets from '@/app/ui/components/assets';
import { get } from 'http';
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"

export default function AssetsPage() {

	// const [username, setUsername] = useState('');	

	const [accounts, setAccounts] = useState([]);

	// const session = await getServerSession();

	const { data: session, status } = useSession() ;

	const username = session?.user?.name ;

	
	useEffect(() => {
		


		let fetchAccounts = async () => {
			
			const response = await fetch(`/api/accounts/${username}`,{	
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
				next: { revalidate: 1 }		
			});
			let a = await response.json() ;
			setAccounts(a);
	
		}
		
		// if (username != "" && username != undefined) {
			fetchAccounts();
		// } 


	 }, []); 

	 
  return (
	<div className={styles.mydiv}>
	  
	  <Link href={`/assets/create?u=${username}`}> Create Account </Link>
	  <br/>
	  
		<Assets accounts={accounts}/>

    </div> 
  )
}
