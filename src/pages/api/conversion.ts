// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Conversion } from '@/data/conversion';
import { MemoryConversion } from '@/provider/ConversionProvider';

type Data = Array<Conversion> | Conversion

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method == "POST") {
        res.status(200).json({
            id: Math.trunc(Math.random() * 100 + 1),
            ...JSON.parse(req.body) as MemoryConversion
        });
    } else if (req.method == "GET") {

        res.status(200).json([
            { 
                id: 0,
                media: {
                    name: "kakao"
                },
                event: {
                    name: "장바구니 보기"
                },
                trigger: {
                    name: "광고 영역 클릭"
                }
            },
            {
                id: 1,
                media: {
                    name: "naver"
                },
                event: {
                    name: "장바구니 구매"
                },
                trigger: {
                    name: "구매하기 버튼 클릭"
                }
            }
        ]);
    }
}
