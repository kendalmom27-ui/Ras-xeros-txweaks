"use client";

import { motion } from "framer-motion";
import {
  MdSpeed,
  MdNetworkCheck,
  MdTimer,
  MdGpsFixed,
} from "react-icons/md";
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
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Why Choose Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Experience the difference with our advanced PC optimization
            technology
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-cyan-500/30 hover:bg-cyan-500/5"
              >
                <div className="mb-6 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
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
