import { streamText, UIMessage } from "ai";
import { openai } from "@ai-sdk/openai";
import { OpenAI } from "openai";

const my_openai = new OpenAI({
  apiKey:
    "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",
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    system: "Jesteś pomocnym asystentem",
    messages,
  });

  return result.toDataStreamResponse();
}
