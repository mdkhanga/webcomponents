import styles from '@/app/ui/styles/Common.module.css';
import {createMonthlyBalances} from '@/app/balances/create/createbalance';
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';




export default function CreateBalanceForm({names}: {names: string[]}) {

	let error = ""


	return (

		<div className = {styles.formcontainer}>
			
			<h1>New Asset </h1>
			<form className = {styles.form} action={createMonthlyBalances}>
			
			{
			
			names.map((name: string) => (

			<div>
			<label>
			  {name}:
			</label>
			<br/>
			  <input className={styles.textinput} name={name}
				type="text"
				// onChange={(e) => setName(e.target.value)}
			  />
			  <input name={name+"_id"}
				type="hidden" value="12"
				
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