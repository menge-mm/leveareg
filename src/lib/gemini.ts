import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

export const google = createGoogleGenerativeAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY,
});

const model = google("models/gemini-pro", {
  safetySettings: [
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
    },
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "HARM_BLOCK_THRESHOLD_UNSPECIFIED",
    },
  ],
});

const text = async () =>
  await generateText({
    model,
    prompt: "What is the symptoms hypertension?",
  });

text().then((res) => console.log(res));
