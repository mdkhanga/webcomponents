"use server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createMonthlyBalances(formData: FormData) {

	console.log("Create Monthly balances called")
	const formDataEntries = Array.from(formData.entries());
	console.log(formDataEntries)

	revalidatePath("/");
	redirect(`${process.env.APPHOME}/balances`);
}

export async function handleCancel() {
	redirect(`${process.env.APPHOME}/balances`);

}