import styles from '@/app/ui/styles/Common.module.css';
import {createMonthlyBalances} from '@/app/balances/create/createbalance';
import React from 'react'
import Link from 'next/link';




export default function CreateBalanceForm({accounts}: {accounts: any[]}) {

	let error = ""

	


	return (

		<div className = {styles.formcontainer}>
			
			<h1>New Asset </h1>
			<form className = {styles.form} action={createMonthlyBalances}>
			
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