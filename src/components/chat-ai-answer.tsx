import React from "react";
import CopyToClipboard from "./copy-to-clipboard";

export default function ChatAiAnswer({ text }: { text: string }) {
  return (
    <div className="mb-6 flex gap-3">
      <div className="mt-1.5 w-full">
        <div className="flex justify-between">
          <p className="font-semibold">AI</p>
          <CopyToClipboard text={text} className="-mt-1" />
        </div>
        <div className="mt-2 text-md text-white">{text}</div>
      </div>
    </div>
  );
}
