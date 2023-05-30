import type { NextApiRequest, NextApiResponse } from 'next'
import { Conversion } from '@/data/conversion';

type Data = Conversion | string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method == "POST") {
        res.status(200).json("success");
    } else if (req.method == "GET") {
        res.status(200).json({
            name: "now-fire",
            script: "fly();"
        });
    }
}
