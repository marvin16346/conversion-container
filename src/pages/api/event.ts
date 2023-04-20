// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Event } from '@/data/event';
import { fstat } from 'fs';

type Data = Array<Event>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    switch (req.query['media']) {
        case "naver":
            res.status(200).json([{ name: '장바구니 보기' }, { name: '페이지뷰' }]);
            break;
        case "kakao":
            res.status(200).json([{ name: '구매 전환' }, { name: '유튜브 뷰' }]);
        default:
            break;
    }
}
