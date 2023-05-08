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
        name: 'naver', 
        using: true, 
        commonScript: '',
        trackingList: ['abc345asdf', 'serf234fa'],
      },
      { 
        name: 'kakao', 
        using: false, 
        commonScript: '<script src="//t1.daumcdn.net/adfit/static/kp.js"></script>',
        trackingList: ['her12ffdw', 'va59glwer']
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
