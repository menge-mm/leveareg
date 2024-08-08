import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  notifications: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;
  const offset = req.query.offset as string;
  const limit = req.query.limit as string;

  let response;
  try {
    response = await axios.get(`${db_url}/notifications?offset=${offset}&limit=${limit}`);

    return res
      .status(response.status)
      .json({ notifications: response.data, message: "Notification retrieved successfully" });
  } catch (e: any) {
    return res.status(e.response?.status || 500).json({
      notifications: null,
      message: e.response?.data?.error || "Unable to retrieve notifications.",
    });
  }
};

export default handler;
