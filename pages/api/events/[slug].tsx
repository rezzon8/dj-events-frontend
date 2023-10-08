// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { events } = require('./data.json')

export interface Events {
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

export interface Error {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Events | Error>
) {
  const djEvent = events.filter((ev: DjEvent) => ev.slug === req.query.slug)

  if (req.method === 'GET') {
    res.status(200).json(djEvent)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
