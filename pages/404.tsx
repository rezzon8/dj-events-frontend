import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'
import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import { URL_PATH_HOME } from '@/constants'

export default function NotFoundPage() {
  return (
    <Layout description="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href={URL_PATH_HOME}>Go Home</Link>
      </div>
    </Layout>
  )
}
