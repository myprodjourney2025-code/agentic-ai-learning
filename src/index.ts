import { config } from "dotenv";
import { ChatMistralAI } from "@langchain/mistralai";
import { input } from "@inquirer/prompts";
import {
  HumanMessage,
  AIMessage,
  SystemMessage,
  tool,
  createAgent,
  AIMessageChunk,
} from "langchain";
import * as z from "zod";
import { tavily } from "@tavily/core";

config();

const apiKey = process.env.MISTRAL_API_KEY;
if (!apiKey) {
  throw new Error(
    "MISTRAL_API_KEY is not defined in the environment variables.",
  );
}

const tavilyApiKey = process.env.TAVILY_API_KEY;
if (!tavilyApiKey) {
  throw new Error(
    "TAVILY_API_KEY is not defined in the environment variables.",
  );
}

const tavilyClient = tavily({ apiKey: tavilyApiKey });

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

async function getLatestInformation({
  query,
}: {
  query: string;
}): Promise<string> {
  const response = await tavilyClient.search(query);
  const latestInfo = response.results
    .map((result) => result.content)
    .join("\n\n");

  return latestInfo;
}

const getLatestInfoTool = tool(getLatestInformation, {
  name: "getLatestInformation",
  description: "Get the latest information about a topic or query.",
  schema: z.object({
    query: z
      .string()
      .describe("The topic or query to get the latest information about."),
  }),
});
const agent = createAgent({
  name: "InfoBot",
  model,
  tools: [getLatestInfoTool],
});

const messageHistory: any = [
  new SystemMessage(
    "Hey, Your name is VERONICA. You are a helpful assistant. You are a large language model trained by Mistral AI. You will answer my questions and help me in my day to day life works. You will answer in a friendly and helpful manner.",
  ),
];

while (true) {
  const userPrompt = await input({ message: "You : " });

  messageHistory.push(new HumanMessage(userPrompt));

  //   const stream = await model.stream(messageHistory);
  const stream = await agent.stream(
    { messages: messageHistory },
    {
      streamMode: "messages",
    },
  );

  let aiResponse = "";

  for await (const [chunk] of stream) {
    if (chunk instanceof AIMessageChunk) {
      process.stdout.write(chunk.text);
      aiResponse += chunk.text;
    }
  }

  messageHistory.push(new AIMessage(aiResponse));

  process.stdout.write("\n");
}
