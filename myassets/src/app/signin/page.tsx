'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
// import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import styles from '@/app/ui/styles/Signin.module.css';
import { login } from '@/app/signin/login'

export default function signin() {

	const [username, setUsername] = useState('');
  	const [password, setPassword] = useState('');
  	const [error, setError] = useState('');
  	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();
	
		/* try {
		  
		   const response = await fetch("http://localhost:8080/v1/user/signon",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username,
				password 
			})
		  });
	
		  if (response.status == 200) { */

		  const ret = await login(username, password)
 
		if (ret == 200) {
			// On successful login, save username in a cookie
			Cookies.set('username', username);
	
			// Redirect to a different page (e.g., dashboard)
			// router.push('/dashboard');
			router.push('/');
		  } else {
			setError('Invalid username or password');
		  }
		/* } catch (error) {
		  setError('Error during login');
		} */
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