import styles from '@/app/ui/styles/Common.module.css';
import { getServerSession } from "next-auth";
import { useRouter } from 'next/navigation'


async function getAccountNames(username: string) {
	let url = `http://localhost:8080/v1/accounts/names/${username}`
	const res = await fetch(url,{	
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		cache: 'no-store' 
	})
	
	if (!res.ok) {
	  throw new Error('Failed to fetch data')
	}
   
	return await res.json()
}


export default async function CreateBalance() {

	const router = useRouter();

	const session = await getServerSession() ;
	const username = session?.user?.name ;

	let  names: any[] = [];
	
	if (username !== "" && username !== undefined && username != null) {
		names = await getAccountNames(username);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
	
		// const username = searchParams.get("u") ;
	
		// await createAccount({"name" : name, "type" : type, "balance" : balance}, username);
	
		// router.push("/assets");
	}
	
	const handleCancel = async (e) => {
		e.preventDefault();
	
		router.push("/assets");
	}

	return (

		<div>
			 <h1>New Asset </h1>
		  <form className = {styles.signinform} onSubmit={handleSubmit}>
			
			{
			
			names.map((name: string) => (

			<div>
			<label>
			  {name}:
			</label>
			<br/>
			  <input className={styles.textinput}
				type="text"
				value={name}
				// onChange={(e) => setName(e.target.value)}
			  />
			<br />
			
			<label>
			  Type:
			</label>
			<br/>  

			</div>

			))
			}

			<div className={styles.btncontainer}>

				<button className={styles.button} type="button" onClick={handleCancel}>Cancel</button>
				<button className={styles.button} type="submit">Submit</button>
				{error && <p style={{ color: 'red' }}>{error}</p>}

			</div>
		  </form>
		</div>

	)


}