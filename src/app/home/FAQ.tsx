"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";

export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Homestaq?",
      answer:
        "Homestaq is a premium platform that helps you find verified properties across Nigeria without the usual hassles. We connect you directly with property owners and eliminate unnecessary fees and delays.",
    },
    {
      question: "How does the verification process work?",
      answer:
        "Every property on Homestaq goes through a rigorous verification process. We verify ownership documents, inspect the property condition, confirm pricing, and ensure all legal requirements are met before listing.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees whatsoever! Our transparent pricing means you only pay what you see. No surprise inspection fees, documentation charges, or middleman costs. Everything is clearly stated upfront.",
    },
    {
      question: "Which cities do you cover?",
      answer:
        "We currently operate in Lagos, Abuja, Port Harcourt, Kano, Ibadan, and other major Nigerian cities. We're constantly expanding to serve more locations across the country.",
    },
    {
      question: "How quickly can I find a property?",
      answer:
        "Most users find their perfect property within 7 days of starting their search. Our smart matching system and direct contact with property owners significantly speeds up the process.",
    },
  ];

  return (
    <section className="relative bg-[#010101] py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-white text-[48px] font-normal leading-[60px] tracking-[-1.68px]">
            Frequently asked questions
          </h2>
          <p className="text-[#c3c3c3] text-base leading-6 max-w-[529px] mx-auto">
            Everything you need to know about Homestaq. Find answers to the most
            common questions below.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;
            return (
              <div
                key={index}
                className={`glass-card gradient-border rounded-3xl transition-all duration-300 ${
                  isOpen ? "p-6" : "p-6"
                }`}
                style={
                  {
                         background:
            "linear-gradient(180deg, rgba(2,7,26,0.04) 0%, rgba(2,7,26,0.16) 100%)",
                    "--gradient-border-width": "2px",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-white text-xl font-normal leading-7 tracking-[-0.8px] flex-1 text-left">
                    {faq.question}
                  </h3>
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="bg-white rounded-full w-12 h-12 flex items-center justify-center ml-6 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      <Plus className="h-6 w-6 text-black" />
                    </motion.span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-white/5">
                        <p className="text-[#c3c3c3] text-base leading-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
