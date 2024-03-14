'use server'

import { cache } from "react";

 
export async function createAccount(account: any, username: any)  {
	console.log(JSON.stringify(account));
	const response = await fetch(`http://localhost:8080/v1/accounts/${username}`,{
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(account),
		cache: "no-store"
	  });
	  return response.status

}