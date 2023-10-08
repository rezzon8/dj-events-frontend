import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

export default function EventPage() {
  const router = useRouter()

  return (
    <Layout>
      <h1>Event Page</h1>
      <h3>slug: {router.query.slug}</h3>
    </Layout>
  )
}
