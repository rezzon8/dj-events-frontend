export interface DjEvents {
  events: Array<DjEvent>
}

export interface DjEvent {
  id: number
  name: string
  slug: string
  venue: string
  address: string
  performers: string
  date: string
  time: string
  description: string
  image: string
}
