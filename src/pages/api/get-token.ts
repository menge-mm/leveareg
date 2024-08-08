// pages/api/getAccessToken.js
import { msalInstance } from "@/auth/msalInstance";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type AccessTokenRequest = {
  scopes: string[];
  account?: any;
};

const accessTokenRequest: AccessTokenRequest = {
  scopes: ["user.read"],
};

const callToApi = async (data: any, accessToken: string) => {
  try {
    // Token for the API call
    const token = `Bearer ${accessToken}`;

    // Headers for the API call
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    // fhir url from environment variables
    const FHIR_URL = process.env.FHIR_URL as string;

    // Check if the FHIR_URL is set
    if (!FHIR_URL) {
      throw new Error("FHIR_URL is not set in the environment variables");
    }

    // Make the API call
    const response = await axios.post(FHIR_URL, data, { headers });

    return response.data;
  } catch (error) {
    console.error("Error calling the API:", error);
    throw new Error("Failed to call the API");
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const account = msalInstance.getAllAccounts()[0];
    if (!account) {
      return res.status(401).json({ error: "No account found" });
    }

    accessTokenRequest.account = account;
    const accessTokenResponse = await msalInstance.acquireTokenSilent(accessTokenRequest);
    const accessToken = accessTokenResponse.accessToken;

    // Call your API with the token
    await callToApi(req.body, accessToken);

    res.status(200).json({ message: "API call successful" });
  } catch (error) {
    console.error("Error acquiring token:", error);
    res.status(500).json({ error: "Failed to acquire token" });
  }
}
