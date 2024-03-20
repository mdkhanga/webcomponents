'use server'

import { cache } from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";


 
// export async function createAccount(account: any, username: any)  {
export async function createAccount(formData: FormData)  {
	// console.log(JSON.stringify(account));
	const session = await getServerSession() ;
	const username = session?.user?.name ;

	let account = formData;

	const response = await fetch(`http://localhost:8080/v1/accounts/${username}`,{
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(account),
		cache: "no-store"
	  });
	  // revalidatePath(`${process.env.APPHOME}/assets`, "page") ;
	  revalidatePath("/");
      redirect(`${process.env.APPHOME}/assets`);

	  // return response.status

}