import { Platform } from '@/data/platform';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<Platform> | {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json([
      {
        name: "meta" 
      },
      {
        name: "adobe" 
      },
    ]);
}
