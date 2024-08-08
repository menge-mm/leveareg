import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  user: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;
  const data = req.body;

  if (!data.id) {
    return res
      .status(400)
      .json({ user: null, message: "Please provide required id for notification" });
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
      .json({ user: response.data, message: "Notification updates!." });
  } catch (e: any) {
    console.error(e.response?.data);
    return res.status(e.response?.status || 500).json({
      user: null,
      message: e.response?.data?.error || "Unable to update notification.",
    });
  }
};

export default handler;
