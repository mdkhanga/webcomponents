import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import styles from '@/app/ui/styles/Signin.module.css';

export default function createAsset() {

	const handleSubmit = (e) =>{
		e.preventDefault();
	}

	return (
		<div className ={styles.signin}>
		  <h1>New Asset </h1>
		  <form className = {styles.signinform} onSubmit={handleSubmit}>
			<label>
			  Username:
			</label>
			<br/>
			  <input className={styles.textinput}
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			  />
			<br />
			<label>
			  Password:
			</label>
			<br/>  

			<input className={styles.textinput}
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			
			<br />
			<button className={styles.button} type="submit">Sign in</button>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		  </form>
		</div>
	  );


}