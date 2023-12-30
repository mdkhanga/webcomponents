import Layout from "@/components/Layout"
import Link from 'next/link'
import {API_URL} from "@/config/index"
import AccountItem from "@/components/AccountItem"


export default function HomePage({accounts}) {
  const t = Date();
  var total = accounts.reduce((total, account) => total +account.balance,0);
  return (
    <Layout> 
      <h1> My Accounts</h1>
      {
        accounts.map(account => (
          <AccountItem key={account.name} account={account}/>
    
        ))
      }
      <h2> Total : {total}</h2>
    </Layout>

  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/v1/accounts/manoj`)
  const accounts = await res.json()


  return {
    props: {accounts}
  }

}
