import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
import { URL_PATH_ABOUT } from '@/constants'

export default function Header() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2023</p>
      <p>
        <Link href={URL_PATH_ABOUT}>About Us</Link>
      </p>
    </footer>
  )
}
