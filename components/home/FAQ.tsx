"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { faqs, site } from "../../lib/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <span className="eyebrow">Support Log</span>
        <h2 className="mt-3.5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-black tracking-tight text-balance">
          Frequently Asked Questions
        </h2>
        <p className="mt-3.5 text-[1.02rem] text-ink-dim">
          Everything you need to know about {site.fullName}
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="panel">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold transition hover:text-signal"
                >
                  {faq.question}
                  <FaChevronDown
                    className={`shrink-0 text-muted transition ${isOpen ? "rotate-180 text-signal" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="border-t border-line px-6 py-5 leading-7 text-ink-dim">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 panel panel-alert p-8 text-center">
          <h3 className="text-xl font-bold">More questions?</h3>
          <p className="mt-3 text-ink-dim">
            Join our Discord server — feel free to ask us anything!
          </p>
          <Link
            href="/discord"
            className="mt-6 inline-block rounded-none bg-alert px-8 py-3 font-mono text-sm font-bold tracking-wide text-[#1A0E00] transition hover:brightness-110"
          >
            Join Discord
          </Link>
        </div>
      </div>
    </section>
  );
}
