// Fix: Add Vite client types to resolve `import.meta.env` error.
/// <reference types="vite/client" />

import { GoogleGenAI } from "@google/genai";

// Per coding guidelines, the API key is assumed to be pre-configured and accessible.
// The Gemini client is initialized directly using the environment variable from Vite.
// This also removes the need for runtime checks for the API key's existence.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export const runQuery = async (prompt: string, systemInstruction: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            systemInstruction: systemInstruction,
        }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return `An error occurred while communicating with the AI. Please check the console for details. Details: ${error instanceof Error ? error.message : String(error)}`;
  }
};
