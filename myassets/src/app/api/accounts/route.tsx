export async function POST(request: Request, { params }) {

	console.log(params.slug)
	const response = await fetch("http://localhost:8080/v1/accounts/{params.slug}",{
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username,
			password 
		})
	});
	const accounts = await response.json() 
	console.log(JSON.stringify(accounts))
	return Response.json(accounts);
  }