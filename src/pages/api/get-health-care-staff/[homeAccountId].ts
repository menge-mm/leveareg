import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  staff: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;
  const homeAccountId = req.query.homeAccountId as string;
  if (!db_url) {
    return res.status(400).json({ staff: null, message: 'Please provide db_url' });
  }

  if (!homeAccountId) {
    return res.status(400).json({ staff: null, message: 'Please provide homeAccountId' });
  }

  let response;
  try {
    response = await axios.get(`${db_url}/health-care-staff/${homeAccountId}`);

    if (response.data.id) {
      return res
        .status(response.status)
        .json({ staff: response.data, message: 'Health care staff retrieved successfully' });
    } else {
      return res.status(response.status).json({ staff: null, message: 'Health care staff not found' });
    }
  } catch (e: any) {
    return res.status(e.response?.status || 500).json({
      staff: null,
      message: e.response?.data?.error || 'Unable to retrieve health care staff.',
    });
  }
};

export default handler;
