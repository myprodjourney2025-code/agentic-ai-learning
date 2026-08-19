import { config } from "dotenv";
import { ChatMistralAI } from "@langchain/mistralai";

config();

const apiKey = process.env.MISTRAL_API_KEY;
if (!apiKey) {
  throw new Error(
    "MISTRAL_API_KEY is not defined in the environment variables.",
  );
}
const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: apiKey,
});

const response = await model.invoke("Hello, mistral!")

console.log("Response from Mistral:", response.text);