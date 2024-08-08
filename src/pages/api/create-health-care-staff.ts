import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

type Data = {
  staff: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;

  if (req.body.homeAccountId === undefined || req.body.username === undefined) {
    return res.status(400).json({
      staff: null,
      message: 'homeAccountId and username are required',
    });
  }

  const healthCareStaffData = {
    id: uuidv4(),
    providerId: '2f114618-2607-4802-ab9d-9586ef58fd04', // "A0CBCCF4-F045-4D5A-8ECC-921FA8867EAA",
    addressId: '6168303a-c695-42e2-a505-834da317da26', //"E03C6B35-C01E-4FB6-81E7-E8EC853BCC63",
    homeAccountId: req.body.homeAccountId,
    username: req.body.username,
  };

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  let response;
  try {
    response = await axios.post(`${db_url}/health-care-staff`, healthCareStaffData, {
      headers,
    });
    // console.log(response.data);

    return res.status(response.status).json({ staff: response.data, message: 'Your data saved successfully' });
  } catch (e: any) {
    return res.status(e.response?.status || 500).json({
      staff: null,
      message: e.response?.data?.error || 'Unable to complete create health care staff',
    });
  }
};

export default handler;
