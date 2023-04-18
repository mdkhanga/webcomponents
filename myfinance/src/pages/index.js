import Layout from "@/components/Layout"
import Link from 'next/link'


export default function HomePage({users}) {
  console.log(users)
  return (
    <Layout> 
      <h1> My Users</h1>
     {
        users.map(user => (
          <h2 key={user.username}> hello {user.email}</h2>
        ))

      }
      
      <Link href="/about"> About</Link> <br/>
      <Link href="/accounts"> Accounts</Link>
    </Layout>

  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8080/v1/user/users')
  const users = await res.json()

  console.log(users)

  return {
    props: {users}
  }

}
