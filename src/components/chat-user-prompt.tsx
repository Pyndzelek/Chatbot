import React from "react";

export default function ChatUserPrompt({ text }: { text: string }) {
  return (
    <div className="mb-6 flex">
      <div className="bg-[#005f9e76] ml-auto mt-1.5 text-white p-3 rounded-lg">
        {text}
      </div>
    </div>
  );
}
