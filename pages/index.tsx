import { API_URL } from '@/config/index'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { DjEvents, DjEvent } from '@/types/dj-events'

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  return {
    props: { events: events.slice(0, 3) }
  }
}

export default function HomePage({ events }: DjEvents) {
  return (
    <Layout>
      <div>
        <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>No events to show</h3>}
        {events.map((evt: DjEvent, index: number) => (
          <EventItem key={evt.id} evt={evt} index={index} />
        ))}
      </div>
    </Layout>
  )
}
