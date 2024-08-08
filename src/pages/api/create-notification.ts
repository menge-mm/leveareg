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

  if (!data.userId) {
    return res.status(400).json({ user: null, message: "Please provide required data" });
  }

  let response;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    response = await axios.post(`${db_url}/notification`, data, { headers });

    return res
      .status(response.status)
      .json({ user: response.data, message: "Notification Created!" });
  } catch (e: any) {
    console.error(e.response?.data);
    return res.status(e.response?.status || 500).json({
      user: null,
      message: e.response?.data?.error || "Unable to create notification.",
    });
  }
};

export default handler;
