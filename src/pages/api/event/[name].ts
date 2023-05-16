import type { NextApiRequest, NextApiResponse } from 'next'
import { Event } from '@/data/event';

type Data = Array<Event> | string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json("ok");
}
