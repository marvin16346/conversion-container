import type { NextApiRequest, NextApiResponse } from 'next'
import { MediaDetail } from '@/data/media';

type Data = MediaDetail | string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method == "GET") {
        res.status(200).json(
        { 
            platform_name: 'naver', 
            is_using: true, 
            tracking_list: [
                "G123456"
            ],
            base_code: "!function(f,b,e,v,n,t,s) ...",
        })
    }
    else if (req.method == "PUT") {
      if (Object.hasOwn(req.body, "using")) {
        res.status(200).json("success");
      } else {
        res.status(200).json("success");
      }
    }
}
