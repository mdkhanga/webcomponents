import Link from 'next/link'

export default function Assets({accounts} : {accounts: any[]}) {

	return (
		<div>

		{
			accounts.map((a: any) => (
				<div>
					<Link href="#"> {a.name} </Link> {a.type} {a.balance}

				</div>
			)) 
		}

		</div>

	)
}