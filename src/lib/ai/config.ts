import { ChatSession, GoogleGenerativeAI } from "@google/generative-ai";

//Set up your API key
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

//You can choose your model here
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export const creativeModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 2.0,
  },
});

//Declare Types

interface ChatHistory {
  type: "user" | "bot";
  message: string;
}

//Declare Functions

export async function createChatSession() {
  const chat: ChatSession = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  return chat;
}

export type { ChatHistory };
