import { GoogleGenerativeAI } from "@google/generative-ai";

// Access the API key securely
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBITBhHaqYkoRbL4mUZ0x3zCbR_LLZhoiE";

export const sendMessageToGemini = async (message: string, history: any[]) => {
  try {
    if (!API_KEY) {
       // Fallback for demo/development if no key is present
       console.warn("No API Key found");
       await new Promise(resolve => setTimeout(resolve, 1000));
       return "I am running in demo mode. Please add VITE_GEMINI_API_KEY to your .env file to connect to the real AI.";
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("AI Error:", error);
    throw error;
  }
};