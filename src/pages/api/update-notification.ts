import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  notification: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;
  let data = req.body;
  console.log(data);

  if (!data.id || !data.userId) {
    return res.status(400).json({ notification: null, message: "Please provide required data" });
  }

  let response;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    response = await axios.put(`${db_url}/notification/${data.id}`, data, { headers });

    return res
      .status(response.status)
      .json({ notification: response.data, message: "Notification updated." });
  } catch (e: any) {
    console.error(e.response?.data);
    return res.status(e.response?.status || 500).json({
      notification: null,
      message: e.response?.data?.error || "Unable to update notification.",
    });
  }
};

export default handler;
