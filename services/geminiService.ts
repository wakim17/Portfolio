import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

// Initialize Gemini Client
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // We construct a chat session. 
    // Note: In a real app, you might want to manage history more carefully.
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: RESUME_CONTEXT,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
    });

    const result = await chat.sendMessage({
      message: message,
    });

    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};