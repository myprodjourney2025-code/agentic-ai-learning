import { config } from "dotenv";
import { ChatMistralAI } from "@langchain/mistralai";
import { input } from "@inquirer/prompts";
import { HumanMessage, AIMessage } from "langchain";

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

// const response = await model.stream(
//   "Write a js/ts code for fibonacci of a number using recursion.",
// );

// for await (const chunk of response) {
//   process.stdout.write(chunk.text);
// }

// while (true) {
//   const userPrompt = await input({ message: "You : " });

//   const stream = await model.stream(userPrompt);

//   for await (const chunk of stream) {
//     process.stdout.write(chunk.text);
//   }
//   process.stdout.write("\n");
// }

const messageHistory = [];

while (true) {
  const userPrompt = await input({ message: "You : " });

  messageHistory.push(new HumanMessage(userPrompt));

  const stream = await model.stream(messageHistory);

  let aiResponse = "";

  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
    aiResponse += chunk.text;
  }

  messageHistory.push(new AIMessage(aiResponse));

  process.stdout.write("\n");
}
