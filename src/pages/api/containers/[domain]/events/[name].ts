import type { NextApiRequest, NextApiResponse } from 'next'
import { EventDetail } from '@/data/event';

type Data = EventDetail | string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({
      name: "test-event-1",
      func_code: "button1.addEventListener(\"click\", (ev)=> ...)",
      url_reg: "/^https?:\\/\\/(?:www\\.)?[-a-zA-Z ..."
    });
}
