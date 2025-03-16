"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import InputArea from "./input-area";
import ChatAiAnswer from "./chat-ai-answer";
import ChatUserPrompt from "./chat-user-prompt";

export default function Chat() {
  const [text, setText] = useState("");
  const { messages, append, error } = useChat();

  const handleOnClick = async () => {
    console.log("handleOnClick");
    console.log("text", text);
    if (text.trim() === "") return;
    append({ content: text, role: "user" });
    console.log("handleOnClick", text);
    setText("");
  };

  return (
    <>
      {messages.map((m) => (
        <div key={m.id} className="w-full">
          {m.role === "user" && <ChatUserPrompt text={m.content} />}

          {m.role === "assistant" && <ChatAiAnswer text={m.content} />}
        </div>
      ))}
      {error && <p className="text-red-500">{error.message}</p>}

      <InputArea text={text} setText={setText} handleOnClick={handleOnClick} />
    </>
  );
}
