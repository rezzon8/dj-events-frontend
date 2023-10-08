import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Header() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2023</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </footer>
  )
}
