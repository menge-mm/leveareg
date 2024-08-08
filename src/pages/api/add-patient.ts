import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  data: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const patientData = req.body;
  const patientAndConsentData = {
    patient: {
      ...patientData.patient,
      providerId: '2f114618-2607-4802-ab9d-9586ef58fd04', // "A0CBCCF4-F045-4D5A-8ECC-921FA8867EAA",
      addressId: '6168303a-c695-42e2-a505-834da317da26', //"E03C6B35-C01E-4FB6-81E7-E8EC853BCC63",
    },
    consent: {
      ...patientData.consent,
    },
  };
  const db_url = process.env.BASE_URL as string;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const response = await axios.post(`${db_url}/patient`, patientAndConsentData, { headers });
  console.log({
    api: 'add-patient',
    res: response,
    data: response.data,
    status: response.status,
  });

  if (response.status === 201) {
    res.status(201).json({ data: response.data, message: 'Resource created successfully' });
  } else if (response.status === 400) {
    res.status(400).json({ data: response.data, message: 'Resource creation failed' });
  } else {
    console.log('Internal server error', response.status, response.data, response.statusText);
    res.status(500).json({ data: response.data, message: 'Internal server error' });
  }
};

export default handler;
