"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FaqAccordionItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#0B090A] shadow-[inset_0_-4px_100px_20px_rgba(239,239,239,0.08)] backdrop-blur-[40px] text-left overflow-hidden transition-all">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-2 p-6 focus:outline-none"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-lg font-semibold text-white select-text text-left">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#C3C3C3] transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`px-6 pb-6 text-[#C3C3C3] text-base transition-all duration-200 ${
          open
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          fontFamily: "Inter, var(--font-inter), sans-serif",
          fontWeight: 400,
          lineHeight: "1.5em",
        }}
      >
        {answer}
      </div>
    </div>
  );
}
