"use client";

import { ChangeEvent, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function InputArea() {
  const [text, setText] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="w-full flex items-center rounded-md bg-[#f0f8fa] shadow-lg ">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleInputChange}
        placeholder="Zapytaj mnie o coś..."
        className="w-full p-4 bg-transparent outline-none placeholder-gray-400 text-black resize-none overflow-hidden"
        rows={1}
      />
      <button className="w-8 h-8 mr-2 rounded-full flex justify-center items-center hover:bg-gray-200 transition active:bg-gray-300">
        <FaArrowUp className="text-black" />
      </button>
    </div>
  );
}
