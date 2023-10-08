import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import { URL_PATH_EVENTS, URL_PATH_HOME } from '@/constants'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={URL_PATH_HOME}>DJ Events</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href={URL_PATH_EVENTS}>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
