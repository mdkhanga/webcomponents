import Layout from "@/components/Layout"
import Link from 'next/link'
import {API_URL} from "@/config/index"
import AccountItem from "@/components/AccountItem"


export default function HomePage({accounts}) {
  return (
    <Layout> 
      <h1> My Accounts</h1>
      {
        accounts.map(account => (
          <AccountItem key={account.name} account={account}/>
        ))
      }
      
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
