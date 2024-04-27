import styles from '@/app/ui/styles/Common.module.css';
import stylesHome from '@/app/ui/styles/Home.module.css';
import { getServerSession } from "next-auth";

async function getBalances(username: string) {
	let url = `http://localhost:8080/v1/mbalances/${username}/2024`
	console.log(url)
	const res = await fetch(url,{	
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
		cache: 'no-store' 
	})
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.
   
	console.log(res)
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data')
	}
   
	return await res.json()
  }

export default async function Balances() {

	const session = await getServerSession() ;
	const username = session?.user?.name ;

	let  bals: any[] = [];
	
	if (username !== "" && username !== undefined && username != null) {
		bals = await getBalances(username);
	}

	return (
	  
	  <div className={stylesHome.mydiv}>
		
		Welcome to the balances page

		<table className={styles.mtable}>
			<thead>
				<tr>
			   <th className={styles.mth}>Month</th>
               <th className={styles.mth}>Year </th>
			   {
			   	bals.map((b: any) => (
               		<th className={styles.mth}>{b.accountname}</th>
			    	))
			   }
				</tr>
			</thead>
			<tbody>
			<tr>
               <td className={styles.mtd}> 4</td>
               <td className={styles.mtd}> 2024</td>

			   {
				bals.map((b: any) => (
               <td className={styles.mtd}> {b.balance} </td>
			   ))
				}
               </tr>

			</tbody>

		</table>

	  </div>
	  
	)
  
  }