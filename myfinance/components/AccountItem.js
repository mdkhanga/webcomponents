
import Link from 'next/link'
import styles from '@/styles/AccountItem.module.css'

export default function AccountItem({account}) {
	return (
		<div className={styles.account}>
			<div className={styles.info}>
				<Link href={`/accounts/${account.name}`}> <h3> {account.name}</h3> </Link>
			</div>

			<div className={styles.info}>
				<h3> $ {account.balance}</h3>
			</div>

			
		</div>
		
	)

}