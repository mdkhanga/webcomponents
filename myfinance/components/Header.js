import Link from 'next/link'
import styles from '../src/styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    My Finance
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/accounts">
                            Accounts
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )

}