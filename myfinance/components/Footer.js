import Link from 'next/link'
import styles from '../src/styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &Copy; My Finance 2023</p>

            <p> <Link href='/about'> About My Finance  </Link></p>
            

        </footer>
    )
}