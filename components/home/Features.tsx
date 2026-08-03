"use client";

import { motion } from "framer-motion";
import { features } from "../../lib/site";

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-[62ch]">
          <span className="eyebrow">What We Tune</span>
          <h2 className="mt-3.5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-black tracking-tight text-balance">
            Four channels, one signal chain.
          </h2>
          <p className="mt-3.5 text-[1.02rem] text-ink-dim">
            Every optimization pass runs the same four channels — each one closes a
            specific gap between what your hardware can do and what it&apos;s
            actually doing mid-match.
          </p>
        </div>

        <div className="bus-line mt-10 mb-10">
          <span className="pulse" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="panel p-5"
            >
              <span className="font-mono text-[.68rem] tracking-widest text-muted">
                CH.0{index + 1}
              </span>
              <h3 className="mt-2.5 text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-dim">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
