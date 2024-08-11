import styles from '@/app/ui/styles/Common.module.css';
import { getServerSession } from "next-auth";
import CreateBalanceForm from "@/app/balances/create/createform"

async function getBalances(username: string, year: string, month: number) {
	let url = `http://localhost:8080/v1/accounts/${username}`
	console.log(url)
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

export default function EditBalance() {



	return (

		<div>
			Edit monthly balances
		</div>

	)


}