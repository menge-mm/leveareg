import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
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

    const result = await streamText({
      model,
      messages,
    });

    return result.toAIStreamResponse();
  } catch (e) {
    console.log(e);
  }
}
