"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Monitor, MessageSquare, Star, ChevronUp, ChevronDown, Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PROTOTYPES = [
  { id: "1", name: "The Grey Lady", path: "/proto/1" },
  { id: "2", name: "The Wire", path: "/proto/2" },
  { id: "3", name: "Sovereign Scroll", path: "/proto/3" },
  { id: "4", name: "Digital Agora", path: "/proto/4" },
  { id: "5", name: "Executive Brief", path: "/proto/5" },
  { id: "6", name: "Campaign Trail", path: "/proto/6" },
  { id: "7", name: "Archival Vault", path: "/proto/7" },
  { id: "8", name: "Eagle Eye", path: "/proto/8" },
];

export default function MetaLayer({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const currentProto = PROTOTYPES.find((p) => p.path === pathname) || PROTOTYPES[0];

  const submitFeedback = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      await fetch(`${apiUrl}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prototype_id: currentProto.id,
          comment,
          rating,
        }),
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowFeedback(false);
        setComment("");
      }, 2000);
    } catch (e) {
      console.error("Failed to submit feedback", e);
    }
  };

  return (
    <div className="relative min-h-screen">
      <main className="pb-20">{children}</main>

      {/* Meta Control Layer */}
      <div className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isOpen ? "w-[90vw] max-w-2xl" : "w-auto"
      )}>
        <div className="bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-2 flex items-center gap-2">
          {isOpen ? (
            <div className="flex flex-col w-full p-2 gap-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <Monitor className="w-4 h-4" /> Switch Prototype Style
                </span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PROTOTYPES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      router.push(p.path);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "text-xs p-3 rounded-xl border transition-all text-left flex flex-col gap-1",
                      pathname === p.path 
                        ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20" 
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                    )}
                  >
                    <span className="font-bold">Proto {p.id}</span>
                    <span>{p.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center gap-2 border-t border-white/10 pt-4">
                <button 
                  onClick={() => setShowFeedback(!showFeedback)}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-white bg-white/10 px-4 py-2 rounded-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Leave Feedback
                </button>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                  EFEL Sovereign Stack • Phase 1
                </div>
              </div>

              {showFeedback && (
                <div className="bg-white/5 rounded-xl p-4 flex flex-col gap-3 border border-white/10 animate-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">How's the "{currentProto.name}" style?</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button key={s} onClick={() => setRating(s)}>
                          <Star className={cn("w-4 h-4 transition-colors", s <= rating ? "fill-yellow-400 text-yellow-400" : "text-white/20")} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="What do you think? Contrast? Readability? Vibes?"
                    className="bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white placeholder:text-white/20 h-24 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  <button 
                    onClick={submitFeedback}
                    disabled={submitted}
                    className={cn(
                      "w-full py-2 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2",
                      submitted ? "bg-green-600 text-white" : "bg-blue-600 hover:bg-blue-500 text-white"
                    )}
                  >
                    {submitted ? <><Check className="w-4 h-4" /> Submitted!</> : "Send Feedback"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-xl transition-all"
              >
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-white/40 uppercase font-black tracking-tighter">Current Style</span>
                  <span className="text-white text-sm font-bold">{currentProto.name}</span>
                </div>
                <div className="bg-white/10 p-1.5 rounded-lg">
                  <ChevronUp className="w-4 h-4 text-white" />
                </div>
              </button>
              <div className="h-8 w-[1px] bg-white/10 mx-1" />
              <button 
                onClick={() => {
                  setIsOpen(true);
                  setShowFeedback(true);
                }}
                className="p-3 text-white/60 hover:text-white transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
