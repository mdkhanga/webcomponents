export async function GET(request: Request, { params }) {
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
	console.log(params.slug)
	const response = await fetch("http://localhost:8080/v1/accounts/{params.slug}",{
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}	
	});
	const accounts = await response.json() 
	console.log(JSON.stringify(accounts))
	return Response.json(accounts);
  }