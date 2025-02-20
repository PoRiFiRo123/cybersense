import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("Missing OpenAI API Key. Check your .env.local file.");
}

const openai = new OpenAI({ apiKey });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { formattedText } = req.body;

  if (!formattedText) {
    return res.status(400).json({ error: "Missing input data" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: formattedText }],
      temperature: 0.7,
    });

    return res.status(200).json({ generatedText: response.choices[0].message?.content || "No response generated." });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return res.status(500).json({ error: "Failed to generate text" });
  }
}
