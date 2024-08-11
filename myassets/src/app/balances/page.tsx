import styles from '@/app/ui/styles/Common.module.css';
import stylesHome from '@/app/ui/styles/Home.module.css';
import { getServerSession } from "next-auth";
import Link from 'next/link'

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
   
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data')
	}
   
	return await res.json()
  }

  async function getAccounts(username: string) {
	let url = `http://localhost:8080/v1/accounts/${username}`
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
	let accounts: any[] = [];
	
	if (username !== "" && username !== undefined && username != null) {
		bals = await getBalances(username);
	}

	if (username !== "" && username !== undefined && username != null) {
		accounts = await getAccounts(username);
	}

	return (
	  
	  <div className={stylesHome.mydiv}>
		
		<Link className={styles.link_button} href={`/balances/create?u=${username}`}> Create Balances </Link>

		<table className={styles.mtable}>
			<thead>
				<tr>
				<th className={styles.mth}> Action </th>		
				<th className={styles.mth}>Month</th>	
               <th className={styles.mth}>Year </th>
			   {
			   	accounts.map((a: any) => (
               		<th className={styles.mth}>{a.name}</th>
			    	))
			   }
				</tr>
			</thead>
			<tbody>
			{Array.from({ length: 12 }, (_, i) => i + 1).map(month => {
                        const listbal = bals[month];
                        if (!listbal) {
                            return null; // Continue to the next month if there are no balances
                        }

                        return (
                            <tr key={month}>
								<td className={styles.mtd}> <Link className={styles.link_button_cell} href={`/balances/edit?u=${username}&y=2024&m=${month}`}> Edit </Link></td>
                                <td>{month}</td>
								<td> 2024</td>
                                {listbal.map((balance, index) => (
                                    <td key={index}>{balance.balance}</td>
                                ))}
                            </tr>
                        );
                    })}

			</tbody>

		</table>

	  </div>
	  
	)
  
  }