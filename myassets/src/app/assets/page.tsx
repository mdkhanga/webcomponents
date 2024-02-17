'use client'
import React from 'react'
import Link from 'next/link'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Home.module.css';
import MenuBar from '@/app/ui/components/menubar';
import { get } from 'http';

export default function Assets() {

	const [username, setUsername] = useState('');	
	const [accounts, setAccounts] = useState([]);
	
	useEffect(() => {
		
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
		
	 }, [username]); 

	console.log("Username" + username)
  
	
  console.log("redering the page");
  console.log(JSON.stringify(accounts));
  return (
	<div className={styles.mydiv}>
	  <MenuBar/>
	  <Link href="/assets/create"> Create Account </Link>
	  <br/>
	  
		{
			accounts.map((a: any) => (
				<div>
					<Link href="#"> {a.name} </Link> {a.type} {a.balance}

				</div>
			)) 
		}

    </div> 
  )
}
