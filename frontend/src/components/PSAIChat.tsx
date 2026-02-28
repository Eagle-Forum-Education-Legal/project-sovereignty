"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  role: "user" | "assistant";
  content: string;
  chunks?: any[];
}

export default function PSAIChat({ style = "modern" }: { style?: "modern" | "classic" | "future" | "minimal" }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "I am the Phyllis Schlafly AI. How can I help you explore her archives today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: input,
          collections: ["book_chunks", "psr_chunks", "psc_chunks", "columns_chunks", "commentaries"],
          chunk_limit: 5,
        }),
      });

      const data = await response.json();
      const assistantMessage: Message = { 
        role: "assistant", 
        content: data.response || "I'm sorry, I couldn't find a response for that.",
        chunks: data.chunks
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Connection error with the Sovereignty Engine." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const themeClasses = {
    modern: "bg-white border border-gray-200 shadow-sm",
    classic: "bg-[#fdfcf0] border-2 border-[#d6cfb8] font-serif",
    future: "bg-black/40 backdrop-blur-md border border-blue-500/30 text-blue-50",
    minimal: "bg-transparent border-t border-gray-100 rounded-none shadow-none"
  };

  return (
    <div className={cn("flex flex-col h-[500px] rounded-2xl overflow-hidden", themeClasses[style])}>
      {/* Header */}
      <div className={cn(
        "px-6 py-4 flex items-center justify-between border-b",
        style === "future" ? "border-blue-500/30" : "border-gray-100"
      )}>
        <div className="flex items-center gap-2">
          <Sparkles className={cn("w-5 h-5", style === "future" ? "text-blue-400" : "text-blue-600")} />
          <span className="font-bold text-sm tracking-tight">Ask the Oracle</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase font-bold opacity-50">Sovereign Engine Active</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-3 max-w-[85%]",
                msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600",
                style === "future" && msg.role === "assistant" && "bg-blue-900/50 text-blue-400 border border-blue-500/20"
              )}>
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={cn(
                "p-3 rounded-2xl text-sm leading-relaxed",
                msg.role === "user" 
                  ? "bg-blue-600 text-white rounded-tr-none" 
                  : "bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100",
                style === "future" && msg.role === "assistant" && "bg-blue-900/20 text-blue-100 border-blue-500/10"
              )}>
                {msg.content}
                
                {msg.chunks && msg.chunks.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-black/5 text-[10px] opacity-60">
                    <span className="font-bold uppercase tracking-wider">Sources:</span>
                    <ul className="mt-1 space-y-1">
                      {msg.chunks.slice(0, 2).map((c: any, i: number) => (
                        <li key={i} className="truncate">• {c.metadata?.book_title || c.metadata?.doc_type || 'Unknown Archive'}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex gap-3 max-w-[85%] mr-auto">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
              <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
            </div>
            <div className="p-3 bg-gray-50 rounded-2xl rounded-tl-none border border-gray-100">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="p-4 border-t border-gray-100 bg-white/50">
        <div className="relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search the Index..."
            className={cn(
              "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 pr-12 transition-all",
              style === "future" && "bg-black/60 border-blue-500/20 text-white placeholder:text-blue-500/30"
            )}
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
