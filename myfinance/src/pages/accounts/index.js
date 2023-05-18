import Link from "next/link"
import Layout from "@/components/Layout"
import {API_URL} from "@/config/index"
import AccountItem from "@/components/AccountItem"

export default function AccountsPage({accounts}) {
    return (

    <Layout> 
      <h1> My Accounts</h1>

      {accounts.length === 0 && <h3>You have no accounts. Please create your accounts </h3> }

      {
        accounts.map(account => (
          <AccountItem key={account.name} account={account}/>
        ))

      }
      
      <Link href="/about"> About</Link> <br/>
      <Link href="/accounts"> Accounts</Link>
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
  