import { streamText, UIMessage } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: openai("gpt-3.5-turbo"),
      system:
        "Jesteś pomocnym asystentem, który odpowiada tylko na pytania dotyczące orgainzacji IAESTE. Jeśli uzytkownik zapyta o cokolwiek innego, powiedz ze odpwiadasz tylko na pytania dotyczące IAESTE.",
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}
