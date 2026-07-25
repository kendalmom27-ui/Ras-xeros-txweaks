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
        <div className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Everything you need to know about {site.fullName}
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold transition hover:text-cyan-400"
                >
                  {faq.question}
                  <FaChevronDown
                    className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
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
                      <p className="border-t border-white/10 px-6 py-5 text-gray-400 leading-7">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">
          <h3 className="text-xl font-bold">More questions?</h3>
          <p className="mt-3 text-gray-400">
            Join our Discord server — feel free to ask us anything!
          </p>
          <Link
            href="/discord"
            className="mt-6 inline-block rounded-xl bg-cyan-500 px-8 py-3 font-bold text-black transition hover:bg-cyan-400"
          >
            Join Discord
          </Link>
        </div>
      </div>
    </section>
  );
}
