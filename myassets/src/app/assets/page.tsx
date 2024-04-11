// 'use client'
import React from 'react'
import Link from 'next/link'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Home.module.css';
import styleAssets from '@/app/ui/styles/Assets.module.css';
import MenuBar from '@/app/ui/components/menubar';
import Assets from '@/app/ui/components/assets';
import { get } from 'http';
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"

export default async function AssetsPage() {


	// const [accounts, setAccounts] = useState([]);
	const session = await getServerSession() ;
	const username = session?.user?.name ;

	
	/* useEffect(() => {
		


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


	 }, []); */

		const response = await fetch(`${process.env.APPHOME}/api/accounts/${username}`,{	
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			cache: 'no-store' 
		});
		let accounts = await response.json() ;
		let totals = sum(accounts);
		const formattedTotals = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(totals);

		// Get the current month and year
		const currentDate = new Date();
		const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
		const currentYear = currentDate.getFullYear();
		
  return (
	<div className={styles.mydiv}>
	  
	  <Link className={styleAssets.link_button} href={`/assets/create?u=${username}`}> Create Account </Link>
	  <span className={styleAssets.text}> {currentMonth} {currentYear}</span>
	  <span className={styleAssets.text}>Total balance : {formattedTotals} </span>	
	  
	  <br/>
	  
		<Assets accounts={accounts} />

    </div> 
  )
}

function sum(accounts : any[]): number {

	let total = 0 ;
	accounts.map((a: any) => {
		total = total + a.balance;
	});

	return total ;
}
