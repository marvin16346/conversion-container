// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Event } from '@/data/event';
import { fstat } from 'fs';

type Data = Array<Event>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json([
        { 
            name: '장바구니 보기',
            eventListener: '',
            regUrl: ''
        }, 
        { 
            name: '페이지뷰',
            eventListener: '',
            regUrl: ''
        }
    ]);
}
