"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
        <span className="eyebrow">Field Reports</span>
        <h2 className="mt-3.5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-black tracking-tight text-balance">
          What tuned rigs sound like.
        </h2>

        <div className="relative mt-10">
          <div className="panel p-10 md:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-mono text-xs text-muted">
                  ENTRY {String(current + 1).padStart(3, "0")} / VERIFIED CUSTOMER
                </span>
                <h3 className="mt-4 text-2xl font-bold">{reviews[current].title}</h3>
                <p className="mt-4 text-lg leading-8 text-ink-dim">
                  &ldquo;{reviews[current].body}&rdquo;
                </p>
                <p className="mt-6 font-mono text-sm font-semibold text-signal">
                  — {reviews[current].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="border border-line p-3 text-ink-dim transition hover:border-signal hover:text-signal"
              aria-label="Previous review"
            >
              <FaChevronLeft />
            </button>
            <span className="font-mono text-sm text-muted tabular-nums">
              {current + 1} of {reviews.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="border border-line p-3 text-ink-dim transition hover:border-signal hover:text-signal"
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
