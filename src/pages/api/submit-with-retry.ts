// pages/api/submitForms.ts

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const submitFhirResource = async (fhirData: any): Promise<any> => {
  const BASE_FHIR_URL = process.env.BASE_FHIR_URL;
  try {
    const response = await axios.post(`${BASE_FHIR_URL}/createBundleResource`, fhirData);
    return response.data;
  } catch (error) {
    throw new Error("FHIR resource submission failed");
  }
};

const submitPatientData = async (
  patientData: any,
  maxRetry: number,
  retryCount: number = 0
): Promise<any> => {
  const BASE_URL = process.env.BASE_URL;

  try {
    const response = await axios.post(`${BASE_URL}/add-patient`, patientData);
    return response.data;
  } catch (error) {
    retryCount++;
    if (retryCount >= maxRetry) {
      throw new Error("Patient data submission failed");
    } else {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
      return submitPatientData(patientData, maxRetry, retryCount);
    }
  }
};

const rollbackFhirResourceSubmission = async (firstSubmissionResult: any): Promise<void> => {
  const BASE_FHIR_URL = process.env.BASE_FHIR_URL;
  const { resourceId } = firstSubmissionResult;
  try {
    await axios.delete(`${BASE_FHIR_URL}/deleteResource/${resourceId}`);
  } catch (error) {
    console.error("Failed to revert FHIR resource submission");
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const formData = req.body;
  const fhirData = formData.fhirData;
  const patientData = formData.patientData;

  if (req.method === "POST") {
    try {
      // Submit the first form
      const fhirSubmissionResult = await submitFhirResource(fhirData);
      if (!fhirSubmissionResult.resourceId) {
        throw new Error("FHIR resource submission failed");
      }

      try {
        // Attempt to submit the second form with retries
        const patientSubmissionResult = await submitPatientData(patientData, 2);
        res.status(201).json({
          success: true,
          fhirResult: fhirSubmissionResult,
          patientResult: patientSubmissionResult,
        });
      } catch (error: unknown) {
        // If second form submission fails after retries, revert the first submission
        await rollbackFhirResourceSubmission(fhirSubmissionResult);
        res.status(500).json({ success: false, error: (error as Error).message });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
