import styles from '@/app/ui/styles/Common.module.css';

export default function Balances() {


	return (
	  
	  <div>
		
		Welcome to the balances page

		<table className={styles.mtable}>
			<thead>
			<th className={styles.mth}>Account</th>
               <th className={styles.mth}>Type</th>
               <th className={styles.mth}>Balance</th>
			</thead>
			<tbody>

			</tbody>

		</table>

	  </div>
	  
	)
  
  }