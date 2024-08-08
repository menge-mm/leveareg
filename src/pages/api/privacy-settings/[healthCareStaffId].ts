import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  settings: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;
  const healthCareStaffId = req.query.healthCareStaffId as string;
  if (!healthCareStaffId) {
    return res.status(400).json({ settings: null, message: "Please provide homeAccountId" });
  }

  let response;
  try {
    response = await axios.get(`${db_url}/user-privacy-settings/${healthCareStaffId}`);

    return res
      .status(response.status)
      .json({ settings: response.data, message: "Settings retrieved successfully" });
  } catch (e: any) {
    return res.status(e.response?.status || 500).json({
      settings: null,
      message: e.response?.data?.error || "Unable to retrieve privacy settings.",
    });
  }
};

export default handler;
