import styles from '@/app/ui/styles/Common.module.css';
import {createMonthlyBalances, handleCancel} from '@/app/balances/create/createbalance';
import React from 'react'

export default function CreateBalanceForm({names}: {names: string[]}) {

	let error = ""

	return (

		<div className = {styles.formcontainer}>

			<form className = {styles.form} action={createMonthlyBalances}>
			
			{
			
			names.map((name: string) => (

			<div>
			<label>
			  {name}:
			</label>
			<br/>
			  <input className={styles.textinput}
				type="text"
				value={name}
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