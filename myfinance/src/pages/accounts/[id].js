import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import {API_URL} from "@/config/index"
import Link from "next/link"
import { FaPencilAlt, FaTimes } from 'react-icons/fa'

export default function AccountPage( {account} ) {
    const router = useRouter()
    console.log(router)

    const deleteEvent = async (e, id) => {

        e.preventDefault()


        if (confirm('Are you sure?')) {
            const res = await fetch(`${API_URL}/v1/accounts/manoj/${id}`, {
            method: 'DELETE',
         })

         router.push('/accounts')
    
          if (!res.ok) {
            alert("An error occured deleting the account")
          } 
          
          router.push('/accounts')
          

        }  
    }
      

    return (
        <Layout>
            <h1> An Account </h1>
            <h3> {account.name}</h3>
            <h3> {account.type}</h3>
            <h3> {account.balance}</h3>

            
            <Link href = {`/accounts/edit/${account.name}`}> Edit </Link>
            <a href = "#" onClick = {(e, id) => deleteEvent(e, account.name)} > Delete </a>
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