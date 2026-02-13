import { GoogleGenerativeAI } from "@google/generative-ai";
import { PROJECTS } from "../constants";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const PORTFOLIO_CONTEXT = `
  You are an enthusiastic and professional AI assistant for the portfolio of Jhony Wakim, a Game Designer & Developer.
  
  Here is the database of Jhony's projects:
  ${JSON.stringify(PROJECTS.map(p => ({
    title: p.title,
    description: p.description,
    tech: p.technologies,
    details: p.longDescription ? p.longDescription.replace(/<[^>]*>?/gm, '') : ""
  })))}

  Your Guidelines:
  1. Answer questions specifically about these projects.
  2. If asked about specific skills (Unity, C#, Narrative), mention the specific projects where he used them.
  3. Keep answers concise (2-4 sentences is best).
  4. If you don't know the answer based on this data, say "I'm not sure about that, but you can check out his resume or contact him directly!"
`;

export const sendMessageToGemini = async (message: string, history: any[]) => {
  try {
    if (!API_KEY) {
       console.warn("No API Key found");
       return "I am running in demo mode. Please add VITE_GEMINI_API_KEY to your .env file.";
    }

    const genAI = new GoogleGenerativeAI(API_KEY);

    // We use the exact string you used in your C++ project
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: PORTFOLIO_CONTEXT }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am ready to answer questions about Jhony's work." }],
        },
        ...history,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("AI Error:", error);
    return "I'm having trouble connecting to the 2.5 model right now. Please check your API key or try again later!";
  }
};