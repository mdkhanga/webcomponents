import Layout from "@/components/Layout"
import Link from 'next/link'


export default function HomePage({accounts}) {
  console.log(accounts)
  return (
    <Layout> 
      <h1> My Accounts</h1>
     {
        accounts.map(account => (
          <div>
          {account.name} <br/>
          {account.type} <br/>
          {account.balance} <br/> 
          <br/>
          </div>
        ))

      }
      
      <Link href="/about"> About</Link> <br/>
      <Link href="/accounts"> Accounts</Link>
    </Layout>

  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8080/v1/accounts/manoj')
  const accounts = await res.json()

  console.log(accounts)

  return {
    props: {accounts}
  }

}
