import { API_URL } from '@/config/index'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { DjEvents, DjEvent } from '@/types/dj-events'

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()
  return {
    props: { events }
  }
}

export default function EventsPage({ events }: DjEvents) {
  return (
    <Layout>
      <h1>Events Page</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt: DjEvent, index: number) => (
        <EventItem key={evt.id} evt={evt} index={index} />
      ))}
    </Layout>
  )
}
