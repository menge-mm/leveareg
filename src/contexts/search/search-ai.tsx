import React from "react";

import { useChat } from "ai/react";
import { Button } from "@/components/atoms/button";
import Markdown from "react-markdown";

const SearchAI = ({ ai, search }: { ai: boolean; search: string }) => {
  const { messages, input, handleSubmit, handleInputChange } = useChat();
  return (
    <div className="flex relative flex-col w-full py-4 pb-24 scrollbar overflow-x-hidden">
      <div>
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === "user" ? "User: " : "AI: "}
            {m.role === "user" ? (
              m.content
            ) : (
              <div className="pl-5 max-h-[60vh] overflow-scroll">
                <Markdown>{m.content}</Markdown>
              </div>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="absolute bottom-1 flex items-center">
        <input
          className="flex-1 max-w-md p-2 border border-gray-300 rounded shadow-xl"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default SearchAI;
