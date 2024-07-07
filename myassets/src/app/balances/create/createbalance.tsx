"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createMonthlyBalances(formData: FormData) {

	console.log("Create Monthly balances called")
	const formDataEntries = Array.from(formData.entries());
	console.log(formDataEntries)


	const balances = [];

    // Create a map to store the balances
    const balanceMap = new Map();

  	// Iterate over the formData to construct the balance objects
  	for (const [key, value] of formData) {
    	if (key.endsWith('_id')) {
      		const accountName = key.replace('_id', '');
      		const balance = balanceMap.get(accountName);

      		if (balance) {
        		balance.accountid = value;
      		}
    	} else {
      		const accountName = key;
      		balanceMap.set(accountName, {
        	accountname: accountName,
        	balance: value,
        	year: 2024,
        	month: 5,
      		});
    		}
  	}

// Convert the map to an array of balance objects
	for (const balance of balanceMap.values()) {
    	if (balance.accountid) {
      		balances.push(balance);
    	}
  	}

  // Post the balances to the specified endpoint
  	try {
    	const response = await fetch('http://localhost:8080/v1/mbalances/manoj',
			{method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(balances),
			cache: "no-store"
			});

		console.log(response.status)	
    
  	} catch (error) {
    	console.error('Error posting balances:', error);
    	throw new Error('Failed to post balances');
  	}


	revalidatePath("/");
	redirect(`${process.env.APPHOME}/balances`);
}

export async function handleCancel() {
	redirect(`${process.env.APPHOME}/balances`);

}