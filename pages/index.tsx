import Image from 'next/image'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import { DjEvents, DjEvent } from '@/types/dj-events'

export default function HomePage({ events }: DjEvents) {
  return (
    <Layout>
      <div>
        <h1>Upcoming Events</h1>
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
      </div>
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
