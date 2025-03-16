"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import InputArea from "./input-area";
import CopyToClipboard from "./copy-to-clipboard";

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
      {messages.map((m) => (
        <div key={m.id} className="w-full">
          {m.role === "user" && (
            <div className="mb-6 flex">
              <div className="bg-[#005f9e76] ml-auto mt-1.5 text-white p-3 rounded-lg">
                {m.content}
              </div>
            </div>
          )}

          {m.role === "assistant" && (
            <div className="mb-6 flex gap-3">
              <div className="mt-1.5 w-full">
                <div className="flex justify-between">
                  <p className="font-semibold">AI</p>
                  <CopyToClipboard message={m} className="-mt-1" />
                </div>
                <div className="mt-2 text-md text-white">{m.content}</div>
              </div>
            </div>
          )}
        </div>
      ))}

      <InputArea text={text} setText={setText} handleOnClick={handleOnClick} />
    </>
  );
}
