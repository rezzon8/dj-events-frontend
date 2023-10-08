import Image from 'next/image'
import { API_URL } from '@/config/index'
import Layout from '@/components/Layout'
import { DjEvents, DjEvent } from '@/types/dj-events'

export default function EventsPage({ events }: DjEvents) {
  return (
    <Layout>
      <h1>Events Page</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt: DjEvent) => (
        <>
          <h3 key={evt.id}>{evt.name}</h3>
          <Image
            src={evt.image}
            width="240"
            height="180"
            alt={evt.description}
          />
        </>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events }
  }
}
