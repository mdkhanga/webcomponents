import Link from 'next/link'
import styles from '@/app/ui/styles/Assets.module.css';
import React from 'react'

export default function Assets({accounts} : {accounts: any[]}) {


   return (
       <div >
           <table className={styles.asset_table}>
           <thead>
           <tr>
               <th className={styles.asset_th}>Account</th>
               <th className={styles.asset_th}>Type</th>
               <th className={styles.asset_th}>Balance</th>
           </tr>
       	  </thead>


		<tbody>
       {
           accounts.map((a: any) => (
              
               <tr>
               <td className={styles.asset_td}><Link href="#"> {a.name} </Link></td>
               <td className={styles.asset_td}>{a.type}</td>
               <td className={styles.asset_td}> {a.balance}</td>
               </tr>
          
              
           ))
       }

		</tbody>

		</table>
       </div>


   )
}
