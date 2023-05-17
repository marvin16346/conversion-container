import type { NextApiRequest, NextApiResponse } from 'next'
import { TrackingId } from '@/data/trackingId';
import { Platform } from '@/data/platform';

type Data = Array<Platform> | {}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json([
        {
            name: "kakao"
        },
        {
            name: "naver",
        },
        {
            name: "meta"
        }
    ]);
}
