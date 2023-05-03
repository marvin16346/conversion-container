// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TrackingId } from '@/data/trackingId';

type Data = Array<TrackingId>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([{ name: '2fdsa2f' }, { name: 'f21eff' }]);
}
