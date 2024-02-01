export async function GET(request: Request) {
	/* const { searchParams } = new URL(request.url)
	const id = searchParams.get('id')
	const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
	  headers: {
		'Content-Type': 'application/json',
		'API-Key': process.env.DATA_API_KEY!,
	  },
	})
	const product = await res.json() 
   
	return Response.json({ product }) */
	const response = await fetch("http://localhost:8080/v1/accounts/account/manoj",{
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}	
	});
	const accounts = response.json() 
	return Response.json(accounts);
  }