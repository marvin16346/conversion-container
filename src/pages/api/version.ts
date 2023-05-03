// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Version } from '@/data/version';

type Data = Array<Version>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([{ name: 'v1' }, { name: 'v2' }]);
}
