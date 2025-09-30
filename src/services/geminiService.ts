/// <reference types="vite/client" />

import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_API_KEY;
if (!apiKey) {
  throw new Error("VITE_API_KEY is not defined in .env file");
}

const ai = new GoogleGenAI({ apiKey });

export const runQuery = async (prompt: string, systemInstruction: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            systemInstruction: systemInstruction,
        }
    });
    // FIX: Fallback to an empty string if response.text is undefined.
    return response.text ?? '';
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return `An error occurred while communicating with the AI. Please check the console for details. Details: ${errorMessage}`;
  }
};