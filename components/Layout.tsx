import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Showcase from '@/components/Showcase'
import styles from '@/styles/Layout.module.css'
import {
  LAYOUT_TITLE,
  LAYOUT_DESCRIPTION,
  LAYOUT_KEYWORDS,
  URL_PATH_HOME
} from '@/constants'

export interface LayoutProps {
  title?: string
  description?: string
  keywords?: string[]
  children?: React.ReactNode
}

export default function Layout({
  title = LAYOUT_TITLE,
  description = LAYOUT_DESCRIPTION,
  keywords = LAYOUT_KEYWORDS,
  children
}: LayoutProps): JSX.Element {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.toString()} />
      </Head>

      <Header />

      {router.pathname == URL_PATH_HOME && <Showcase />}

      <main className={styles.container}>{children}</main>

      <Footer />
    </>
  )
}
