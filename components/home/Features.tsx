"use client";

import { motion } from "framer-motion";
import { MdSpeed, MdNetworkCheck, MdTimer, MdGpsFixed } from "react-icons/md";
import { features } from "../../lib/site";

const icons = {
  fps: MdSpeed,
  ping: MdNetworkCheck,
  latency: MdTimer,
  aim: MdGpsFixed,
};

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Rasx</span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold tracking-tight">
            Built for Performance
          </h2>
          <p className="mt-4 text-lg text-ink-dim">
            Real optimizations, not placebo toggles
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="panel p-6 transition hover:border-signal/40"
              >
                <div className="inline-flex rounded-xl bg-signal-dim p-3 text-signal">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-dim">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
