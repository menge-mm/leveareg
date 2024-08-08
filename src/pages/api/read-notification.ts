import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  settings: any;
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const db_url = process.env.BASE_URL as string;
  const id = req.query.id as string;

  if (!id) {
    return res.status(400).json({ settings: null, message: "Please provide notification id" });
  }

  let response;
  try {
    response = await axios.get(`${db_url}/notification/${id}`);
    return res
      .status(response.status)
      .json({ settings: response.data, message: "Notification retrieved successfully" });
  } catch (e: any) {
    return res.status(e.response?.status || 500).json({
      settings: null,
      message: e.response?.data?.error || "Unable to retrieve notification.",
    });
  }
};

export default handler;
