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

async function getAccounts() {

	const username = Cookies.get('username');
	console.log("Username" + username)
	const response = await fetch("api/accounts/manoj",{
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}	
	});
	return await response.json() 
}

export default function Assets() {

	const [username, setUsername] = useState('');	
	const [accounts, setAccounts] = useState([]);
	
	useEffect(() => {
		
		const val = Cookies.get('username');
		setUsername(val);
		console.log("Username val " + val)

		let fetchAccounts = async () => {
			// const response = await fetch("http://localhost:8080/v1/accounts/manoj",{
			const response = await fetch("/api/accounts/manoj",{	
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}	
			});
			let a = await response.json() ;
			console.log(a);
			setAccounts(a);
		
		}
		
		fetchAccounts();
		
	  }, [username]); 

	console.log("Username" + username)
  
	let url = "http://localhost:8080/v1/accounts/"+username;


	
  console.log("redering the page");
  console.log(JSON.stringify(accounts));
  return (
	<div className={styles.mydiv}>
	  <MenuBar/>
	  
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
