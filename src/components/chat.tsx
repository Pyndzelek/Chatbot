"use client";

import { useState } from "react";
import InputArea from "./input-area";
import ChatAiAnswer from "./chat-ai-answer";
import ChatUserPrompt from "./chat-user-prompt";

export default function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", message: "Elo elo" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    if (text.trim() === "") return;
    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", message: text }]);
    setText("");

    try {
      const res = await fetch("");
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();

      const newAnswer = data.text || "No answer found";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: newAnswer },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", message: "ERROR" }]);
    }
    setIsLoading(false);
  };

  return (
    <>
      {messages.map((m) => (
        <div key={m.message} className="w-full">
          {m.role === "user" && <ChatUserPrompt text={m.message} />}

          {m.role === "assistant" && <ChatAiAnswer text={m.message} />}
        </div>
      ))}
      {isLoading && "Ładowanie..."}

      <InputArea text={text} setText={setText} handleOnClick={handleOnClick} />
    </>
  );
}
