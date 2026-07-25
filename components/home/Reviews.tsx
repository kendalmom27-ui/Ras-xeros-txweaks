"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { reviews } from "../../lib/site";

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((index) => (index === 0 ? reviews.length - 1 : index - 1));
  const next = () =>
    setCurrent((index) => (index === reviews.length - 1 ? 0 : index + 1));

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Real feedback from gamers who&apos;ve experienced the Ras&Xero
            difference
          </p>
        </div>

        <div className="relative mt-16">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 md:p-14">
            <FaQuoteLeft className="text-cyan-500/40" size={32} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-6 text-2xl font-bold">{reviews[current].title}</h3>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  {reviews[current].body}
                </p>
                <p className="mt-6 text-sm font-semibold text-cyan-400">
                  — {reviews[current].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-lg border border-white/10 p-3 transition hover:border-cyan-500/50 hover:text-cyan-400"
              aria-label="Previous review"
            >
              <FaChevronLeft />
            </button>
            <span className="text-sm text-gray-500">
              {current + 1} of {reviews.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="rounded-lg border border-white/10 p-3 transition hover:border-cyan-500/50 hover:text-cyan-400"
              aria-label="Next review"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
