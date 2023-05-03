// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TrackingId } from '@/data/trackingId';

type Data = Array<TrackingId> | {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method)
  if (req.method == "DELETE") {
    res.status(200).json({});
  }
  else if (req.method == "GET") {
    res.status(200).json([{ name: '2fdsa2f' }, { name: 'f21eff' }]);
  } else if (req.method == "POST") {
    res.status(200).json({});
  }
}
