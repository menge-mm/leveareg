// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { formatForFhirBundle } from '@/utils/api';
import axios from 'axios';

type Data = {
  data: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const FHIR_BASE_URL = process.env.FHIR_BASE_URL as string;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const formattedData = await formatForFhirBundle(req.body);

  const response = await axios.post(`${FHIR_BASE_URL}/createBundleResource`, formattedData, {
    headers,
  });

  console.log({
    api: 'register-fhir',
    res: response,
    data: response.data,
    entry: JSON.stringify(response.data.entry),
    status: response.status,
  });

  if (response.status === 201) {
    res.status(201).json({ data: response.data, message: 'Resource created successfully' });
  } else if (response.status === 400) {
    res.status(400).json({ data: response.data, message: 'Resource creation failed' });
  } else {
    res.status(500).json({ data: response.data, message: 'Internal server error' });
  }
};

export default handler;
