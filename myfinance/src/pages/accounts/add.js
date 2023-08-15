import Layout from "@/components/Layout"
import { useState } from 'react'
import styles from '@/styles/Form.module.css'
import { API_URL } from '@/config/index'
import { useRouter } from 'next/router'

export default function AddAccountsPage() {

    const [values, setValues] = useState({
        name: '',
        type: '',
        balance: ''
      })
    
      const router = useRouter()  

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`${API_URL}/v1/accounts`, {
            method: 'POST',
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

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }


    return (

        <Layout>
            <h1> Add Accounts </h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>

                <div>
                    <label htmlFor='name'>Account Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor='type'>Account Type</label>
                    <input
                        type='text'
                        id='type'
                        name='type'
                        value={values.type}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label htmlFor='balance'>Balance</label>
                    <input
                        type='text'
                        id='balance'
                        name='balance'
                        value={values.balance}
                        onChange={handleInputChange}
                    />
                </div>

                </div>

                <input type='submit' value='Add Event' className='btn' />
            </form>


        </Layout>

    )
}