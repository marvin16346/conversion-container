import type { NextApiRequest, NextApiResponse } from 'next'
import { Container } from '@/data/container';

type Data = Array<Container>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { 
        name: 'samsung',
        domain: 'samsung.com',
        description: 'samsung',
    },
]);
}
