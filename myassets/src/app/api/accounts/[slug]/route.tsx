export async function GET(request: Request, { params }) {

	const headers = request.headers;

	console.log(params.slug)
	const { signal } = new AbortController()
	const response = await fetch(`http://localhost:8080/v1/accounts/${params.slug}`,{
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
		// , signal
	} );
	const accounts = await response.json() 
	console.log(JSON.stringify(accounts))
	return Response.json(accounts);
  }