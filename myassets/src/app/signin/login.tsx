'use server'
 
export async function login(username: string, password: string)  {
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

	  return response.status

}