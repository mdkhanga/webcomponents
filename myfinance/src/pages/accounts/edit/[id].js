import { useRouter } from "next/router"
import { useState } from 'react'
import Layout from "@/components/Layout"
import {API_URL} from "@/config/index"
import Link from "next/link"
import styles from '@/styles/Form.module.css'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'

export default function EditPage( {account} ) {

    const [values, setValues] = useState({
        name: account.name,
        type: account.type,
        balance: account.balance
      })
    const router = useRouter()
    console.log(router)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }  

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/v1/accounts`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
          })


        if (!res.ok) {
            alert("something went wrong")

        }  else {

            router.push(`/accounts/${values.name}`)
        }

        console.log("Submitted form")

    }

    return (
        <Layout>
            <h1> Edit Account </h1>

        <form onSubmit={handleSubmit} className={styles.form}>  
            <div className={styles.grid}>

                <div>
                    <label htmlFor='name'>Account Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={values.name}
                        onChange={handleInputChange}/>
                </div>

                 <div>
                    <label htmlFor='type'>Account Type</label>
                    <input
                    type='text'
                    id='type'
                    name='type'
                    value={values.type}
                    onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor='balance'>Balance</label>
                    <input
                    type='text'
                    id='balance'
                    name='balance'
                    value={values.balance}
                    onChange={handleInputChange}/>
                </div>

    </div>

    <input type='submit' value='Update Event' className='btn' />
</form>

            
            <Link href = "/accounds/edit/${account.name}"> Edit </Link>
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