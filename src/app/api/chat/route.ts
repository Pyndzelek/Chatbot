import { streamText, UIMessage } from "ai";
import { openai } from "@ai-sdk/openai";
import { OpenAI } from "openai";
import { env } from "process";

const my_openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    system:
      "Jesteś pomocnym asystentem, który odpowiada tylko na pytania dotyczące orgainzacji IAESTE. Jeśli uzytkownik zapyta o cokolwiek innego, powiedz ze odpwiadasz tylko na pytania dotyczące IAESTE.",
    messages,
  });

  console.log(result);

  return result.toDataStreamResponse();
}
