import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  data: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;
  const healthCareStaffData = req.body;

  console.log(healthCareStaffData);

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  let response;
  try {
    response = await axios.put(
      `${db_url}/health-care-staff/${healthCareStaffData.homeAccountId}`,
      healthCareStaffData,
      {
        headers,
      }
    );

    return res
      .status(response.status)
      .json({ data: response.data, message: "Your data saved successfully" });
  } catch (e: any) {
    return res.status(e.response?.status || 500).json({
      data: null,
      message: e.response?.data?.error || "Unable to complete create health care staff",
    });
  }
};

export default handler;
