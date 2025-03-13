import Logo from "@/components/logo";
import OpenAI from "openai";
import InputArea from "@/components/input-area";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [{ role: "user", content: "write a haiku about ai" }],
});

completion.then((result) => console.log(result.choices[0].message));

export default function Home() {
  return (
    <section className="md:w-[100vh] w-[70vh] mx-auto px-4 h-screen flex flex-col items-center justify-center -mt-[30px]">
      <Logo width={300} />

      <InputArea />
    </section>
  );
}
