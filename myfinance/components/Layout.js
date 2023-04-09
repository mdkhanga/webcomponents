import Head from 'next/head'
import styles from '../src/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'


export default function Layout({title, keywords, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>

            <Header/>
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </div>
    )
} 

Layout.defaultProps = {
    title: "My Finances",
    Description: "Complete picture of my finances",
    keywords: "finance accounts"
}