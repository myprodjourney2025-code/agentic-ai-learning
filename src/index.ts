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

// const response = await model.invoke("Write a js/ts code for fibonacci of a number using recursion.");

// console.log("Response from Mistral:", response.text);

const response = await model.stream(
  "Write a js/ts code for fibonacci of a number using recursion.",
);

for await (const chunk of response) {
  process.stdout.write(chunk.text);
}
