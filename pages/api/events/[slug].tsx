// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DjEvent } from '@/types/dj-events'
import { Error } from '@/types/error'

const { events: djEvents } = require('./data.json')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DjEvent | Error>
) {
  const djEvent = djEvents.filter(
    (event: DjEvent) => event.slug === req.query.slug
  )

  if (req.method === 'GET') {
    res.status(200).json(djEvent)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
