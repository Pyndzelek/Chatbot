"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import InputArea from "./input-area";

export default function Chat() {
  const [text, setText] = useState("");
  const { messages, append } = useChat();

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
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.content}</div>
        ))}
      </div>

      <InputArea text={text} setText={setText} handleOnClick={handleOnClick} />
    </>
  );
}
