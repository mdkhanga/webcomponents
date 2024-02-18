'use server'
 
export async function create(account: any)  {
	const response = await fetch("http://localhost:8080/v1/accounts",{
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(account)
	  });

	  return response.status

}