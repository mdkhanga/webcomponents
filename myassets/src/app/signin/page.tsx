'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Signin.module.css';
import { login } from '@/app/signin/login'
import { signIn} from "next-auth/react";


export default function signin() {

	const [username, setUsername] = useState('');
  	const [password, setPassword] = useState('');
  	const [error, setError] = useState('');
  	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();

		/* const ret = await login(username, password)
 
		if (ret == 200) {
			// On successful login, save username in a cookie
			Cookies.set('username', username);
	
			// Redirect to a different page (e.g., dashboard)
			// router.push('/dashboard');
			router.push('/');
		  } else {
			setError('Invalid username or password');
		  }
		  */
		 let ret = await signIn('credentials', { redirect: false, username: username, password: password })
		 // router.push('/');
		 // router.refresh();
		 // window.location.href = "http://localhost:3000";
		 if (ret != undefined && ret.ok) {
		  const url: string = `${process.env.NEXT_PUBLIC_APPHOME}`;
		  window.location.href = url ; 
		 } else {
			setError("Invalid username or password !!!")
		 }
		 
	};

	return (
			<div className ={styles.signin}>
			  <h1>Please Sign in</h1>
			  <form className = {styles.signinform} onSubmit={handleLogin}>
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