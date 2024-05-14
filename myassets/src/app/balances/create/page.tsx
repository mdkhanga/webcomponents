import styles from '@/app/ui/styles/Common.module.css';
import { getServerSession } from "next-auth";
import { useRouter } from 'next/navigation'
import CreateBalanceForm from "@/app/balances/create/createform"


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
	
	if (!res.ok) {
	  throw new Error('Failed to fetch data')
	}
   
	return await res.json()
}


export default async function CreateBalance() {

	// const router = useRouter();

	const session = await getServerSession() ;
	const username = session?.user?.name ;

	let  accounts: any[] = [];
	
	if (username !== "" && username !== undefined && username != null) {
		accounts = await getAccounts(username);
	}

	return (	
			 <CreateBalanceForm accounts={accounts}/> 
	)


}