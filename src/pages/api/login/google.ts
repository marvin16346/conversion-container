import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    access_token: string,
    refresh_token: string,
    code: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({
        access_token: "eyJhbGciOiJIUzI1NiIsI...",
        refresh_token: "eyJhbGciOiJIUzI1NiIsI...",
        code: "A1B2C3D4"
    });
}
