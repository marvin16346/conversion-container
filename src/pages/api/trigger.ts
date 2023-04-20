// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Media } from '@/data/media';

type Data = Array<Media>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([{ name: '광고 영역 클릭' }, { name: '유튜브 재생 시작' }]);
}
