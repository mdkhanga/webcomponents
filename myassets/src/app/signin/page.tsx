'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';

export default function signin() {

	const [username, setUsername] = useState('');
  	const [password, setPassword] = useState('');
  	const [error, setError] = useState('');
  	const router = useRouter();

	const handleLogin = async (e) => {
		e.preventDefault();
	
		// Pretend login API
		const fakeApiCall = new Promise((resolve) => {
		  // Simulating API call delay
		  setTimeout(() => {
			resolve({ success: true });
		  }, 1000);
		});
	
		try {
		  // Simulate API call
		  const response : any = await fakeApiCall;
	
		  if (response.success) {
			// On successful login, save username in a cookie
			Cookies.set('username', username);
	
			// Redirect to a different page (e.g., dashboard)
			// router.push('/dashboard');
			router.push('/');
		  } else {
			setError('Invalid username or password');
		  }
		} catch (error) {
		  setError('Error during login');
		}
	};

	return (
			<div>
			  <h1>Login</h1>
			  <form onSubmit={handleLogin}>
				<label>
				  Username:
				  <input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				  />
				</label>
				<br />
				<label>
				  Password:
				  <input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				  />
				</label>
				<br />
				<button type="submit">Login</button>
				{error && <p style={{ color: 'red' }}>{error}</p>}
			  </form>
			</div>
		  );

	


}