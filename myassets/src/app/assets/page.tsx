// 'use client'
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

export default async function AssetsPage() {

	// const [username, setUsername] = useState('');	
	// const [accounts, setAccounts] = useState([]);

	const session = await getServerSession();

	const username = session?.user?.name ;

	const response = await fetch(`${process.env.APPHOME}/api/accounts/${username}`,{	
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		next: { revalidate: 1 }		
	});

	let accounts = await response.json() ;
	
	/* useEffect(() => {
		
		const val = Cookies.get('username');
		setUsername(val);
		console.log("Username val " + val)

		let fetchAccounts = async () => {
			
			const response = await fetch(`/api/accounts/${username}`,{	
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},
				next: { revalidate: 1 }		
			});
			let a = await response.json() ;
			console.log(a);
			setAccounts(a);
		
		}
		
		
		if (username != "" && username != undefined) {
			fetchAccounts();
		} 


	 }, [username]); */

	 

	console.log("Username" + username)
  
	
  console.log("redering the page");
  console.log(JSON.stringify(accounts));
  return (
	<div className={styles.mydiv}>
	  
	  <Link href={`/assets/create?u=${username}`}> Create Account </Link>
	  <br/>
	  
		<Assets accounts={accounts}/>

    </div> 
  )
}
