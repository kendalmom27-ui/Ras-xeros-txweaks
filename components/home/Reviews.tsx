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
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Reviews</span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-ink-dim">
            Real feedback from gamers running Rasx
          </p>
        </div>

        <div className="relative mt-12">
          <div className="panel p-10 text-center md:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-signal">★★★★★</span>
                <h3 className="mt-4 text-2xl font-semibold">
                  {reviews[current].title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-ink-dim">
                  &ldquo;{reviews[current].body}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-signal">
                  — {reviews[current].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-line p-3 text-ink-dim transition hover:border-signal hover:text-signal"
              aria-label="Previous review"
            >
              <FaChevronLeft />
            </button>
            <span className="text-sm text-muted tabular-nums">
              {current + 1} of {reviews.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-line p-3 text-ink-dim transition hover:border-signal hover:text-signal"
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
