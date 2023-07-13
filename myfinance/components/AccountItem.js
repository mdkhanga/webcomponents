
import Link from 'next/link'
import styles from '@/styles/AccountItem.module.css'

export default function AccountItem({account}) {
	return (
		<div className={styles.account}>
			<div className={styles.info}>
				<h3> {account.name}</h3>
				<h4> {account.type}</h4>
				
			</div>
			<div className={styles.link}>
				<Link className='btn' href={`/accounts/${account.name}`}>
					 Details
				</Link>
			</div>
		</div>
		
	)

}