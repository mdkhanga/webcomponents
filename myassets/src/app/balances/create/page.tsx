import styles from '@/app/ui/styles/Common.module.css';
import { getServerSession } from "next-auth";
import { useRouter } from 'next/navigation'
import CreateBalanceForm from "@/app/balances/create/createform"


async function getAccountNames(username: string) {
	let url = `http://localhost:8080/v1/accounts/names/${username}`
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

	let  names: any[] = [];
	
	if (username !== "" && username !== undefined && username != null) {
		names = await getAccountNames(username);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
	
	}
	
	const handleCancel = async (e) => {
		e.preventDefault();
	
		// router.push("/assets");
	}

	return (

			
				
			 <CreateBalanceForm names={names}/> 
		

	)


}