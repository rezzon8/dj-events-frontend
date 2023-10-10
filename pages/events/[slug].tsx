import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { DjEvent } from '@/types/dj-events'
import { API_PATH_EVENTS } from '@/constants'

export default function EventPage({ evt }: any) {
  return (
    <Layout>
      <h1>Event Page</h1>
      <h3>{evt.name}</h3>
      <h3>{evt.performers}</h3>
    </Layout>
  )
}

interface StaticPropsParams {
  params: { slug: string }
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}${API_PATH_EVENTS}`)
  const events = await res.json()

  const paths = events.map((event: DjEvent) => ({
    params: { slug: event.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }: StaticPropsParams) {
  const res = await fetch(`${API_URL}${API_PATH_EVENTS}/${slug}`)
  const events = await res.json()

  return {
    props: { evt: events[0] },
    revalidate: 1
  }
}
