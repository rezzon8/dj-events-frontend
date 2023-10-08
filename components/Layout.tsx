import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Layout.module.css'
import { LAYOUT_TITLE, LAYOUT_DESCRIPTION, LAYOUT_KEYWORDS } from '@/constants'

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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.toString()} />
      </Head>

      <Header />

      <main className={styles.container}>{children}</main>

      <Footer />
    </>
  )
}
