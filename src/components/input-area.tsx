"use client";

import { ChangeEvent, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useChat } from "@ai-sdk/react";

export default function InputArea() {
  return (
    <>
      <div className="w-full flex items-center rounded-md bg-[#f0f8fa] shadow-lg ">
        <textarea
          placeholder="Zapytaj mnie o coś..."
          className="w-full p-4 field-sizing-content bg-transparent outline-none placeholder-gray-400 text-black resize-none overflow-hidden"
          rows={1}
        />
        <button className="w-8 h-8 mr-2 rounded-full flex justify-center items-center hover:bg-gray-200 transition active:bg-gray-300">
          <FaArrowUp className="text-black" />
        </button>
      </div>
    </>
  );
}
