// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Media } from '@/data/media';

type Data = Array<Media> | string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == "GET") {
    res.status(200).json([
      { 
        platform_name: 'naver', 
        is_using: true, 
      },
      { 
        platform_name: 'kakao', 
        is_using: false, 
      }
    ]);
  } else if (req.method == "PUT") {
      if (Object.hasOwn(req.body, "using")) {
        res.status(200).json("success");
      } else {
        res.status(200).json("success");
      }
  }
}
