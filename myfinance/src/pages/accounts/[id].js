import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import {API_URL} from "@/config/index"

export default function AccountPage( {account} ) {
    const router = useRouter()
    console.log(router)
    return (
        <Layout>
            <h1> An Account </h1>
            <h3> {account.name}</h3>
            <h3> {account.type}</h3>
            <h3> {account.balance}</h3>
        </Layout>

    )
}

export async function getServerSideProps({ query: { id } }) {
    const res = await fetch(`${API_URL}/v1/accounts/manoj/${id}`)
    const account = await res.json()
  

    return {
      props: {account}
    }
  
  }