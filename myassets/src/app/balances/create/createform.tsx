"use client"
import styles from '@/app/ui/styles/Common.module.css';
import {createMonthlyBalances} from '@/app/balances/create/createbalance';
import React from 'react'
import { useRouter } from 'next/navigation'




export default function CreateBalanceForm({names}: {names: string[]}) {

	let error = ""

	const router = useRouter();

	const handleCancel = async (e) => {
		e.preventDefault();

		router.push("/balances");
	}

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
			<br />
			
	
			</div>

			))
			}

			<div className={styles.btncontainer}>

				<button className={styles.button} type="button" onClick={handleCancel}>Cancel</button>
				<button className={styles.button} type="submit">Submit</button>
				{error && <p style={{ color: 'red' }}>{error}</p>}

			</div>
		  </form>
		</div>


	)




}