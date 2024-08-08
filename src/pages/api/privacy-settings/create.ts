import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  user: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;
  const data = req.body;
  console.log(data);
  if (!data.healthCareStaffId) {
    return res.status(400).json({ user: null, message: "Please provide required data" });
  }

  let response;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    response = await axios.post(`${db_url}/user-privacy-settings`, data, { headers });

    return res
      .status(response.status)
      .json({ user: response.data, message: "Your user privacy data saved successfully." });
  } catch (e: any) {
    console.error(e.response?.data);
    return res.status(e.response?.status || 500).json({
      user: null,
      message: e.response?.data?.error || "Unable to retrieve health care staff.",
    });
  }
};

export default handler;
