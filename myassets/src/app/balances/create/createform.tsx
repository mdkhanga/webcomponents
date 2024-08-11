"use client"
import styles from '@/app/ui/styles/Common.module.css';
import {createMonthlyBalances} from '@/app/balances/create/createbalance';
import React from 'react'
import Link from 'next/link';





export default function CreateBalanceForm({accounts}: {accounts: any[]}) {

	let error = ""

	const createMonthlyBalancesWithAccounts = createMonthlyBalances.bind(null, accounts)

	return (

		<div className = {styles.formcontainer}>
			
			<h1>New Monthly Balance</h1>
			<form className = {styles.form} action={createMonthlyBalancesWithAccounts}>

			<div>
			<label>
			  Year:
			</label>
			<br/>
			  <input className={styles.textinput} name='year'
				type="text" placeholder='2024' required
			  />
			<br />
			</div>

			<div>
			<label>
			  Month:
			</label>
			<br/>
			  <input className={styles.textinput} name='month'
				type="text" placeholder='1' required
			  />
			<br />
			</div>

			
			{
			
			accounts.map((account: any) => (

			<div>
			<label>
			  {account.name}:
			</label>
			<br/>
			  <input className={styles.textinput} name={account.name}
				type="text" placeholder={account.balance}
			  />
			  <input name={account.name+"_id"}
				type="hidden" value={account.id}
				
			  />
			<br />
			
	
			</div>

			))
			}

			<div className={styles.btncontainer}>

				<Link className={styles.link_button_cancel} href="/balances"> Cancel </Link>
				<button className={styles.button} type="submit">Submit</button>
				
				{error && <p style={{ color: 'red' }}>{error}</p>}

			</div>
		  </form>
		</div>


	)


}