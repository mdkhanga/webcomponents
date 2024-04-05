'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import styles from '@/app/ui/styles/Signin.module.css';
import { createAccount } from '@/app/assets/create/create'

export default function createAsset() {

	const [name, setName] = useState('');
  	const [type, setType] = useState('');
	const [balance, setBalance] = useState('');
  	const [error, setError] = useState('');
  	const router = useRouter();
	const searchParams = useSearchParams();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const username = searchParams.get("u") ;

		await createAccount({"name" : name, "type" : type, "balance" : balance}, username);

		// router.push("/assets");
	}

	const handleCancel = async (e) => {
		e.preventDefault();

		router.push("/assets");
	}

	return (
		<div className ={styles.signin}>
		  <h1>New Asset </h1>
		  <form className = {styles.signinform} onSubmit={handleSubmit}>
			<label>
			  AccountName:
			</label>
			<br/>
			  <input className={styles.textinput}
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			  />
			<br />
			
			<label>
			  Type:
			</label>
			<br/>  

			<input className={styles.textinput}
				type="text"
				value={type}
				onChange={(e) => setType(e.target.value)}
			/>
			<br />

			<label>
			  Balance:
			</label>
			<br/>  

			<input className={styles.textinput}
				type="text"
				value={balance}
				onChange={(e) => setBalance(e.target.value)}
			/>
			<br />

			<div className={styles.btncontainer}>

				<button className={styles.button} type="button" onClick={handleCancel}>Cancel</button>
				<button className={styles.button} type="submit">Submit</button>
				{error && <p style={{ color: 'red' }}>{error}</p>}

			</div>
		  </form>
		</div>
	  );


}