import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import styles from '@/app/ui/styles/Signin.module.css';

export default function createAsset() {

	const [name, setName] = useState('');
  	const [type, setType] = useState('');
	const [balance, setBalance] = useState('');
  	const [error, setError] = useState('');
  	const router = useRouter();

	const handleSubmit = (e) =>{
		e.preventDefault();
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
				onChange={(e) => setType(e.target.value)}
			/>
			<br />


			<button className={styles.button} type="submit">Sign in</button>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		  </form>
		</div>
	  );


}