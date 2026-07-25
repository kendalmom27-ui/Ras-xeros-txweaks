"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { site } from "../../lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-black" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400"
        >
          <FaStar size={12} />
          {site.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-5xl font-black leading-tight md:text-7xl"
        >
          Optimize your PC
          <br />
          <span className="text-cyan-400">for Gaming</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/services"
            className="w-full rounded-xl bg-white px-8 py-4 text-center font-bold text-black transition hover:bg-gray-200 sm:w-auto"
          >
            Explore Services
          </Link>
          <Link
            href="/downloads"
            className="w-full rounded-xl border border-white/30 px-8 py-4 text-center font-bold transition hover:border-cyan-500 hover:bg-cyan-500/10 sm:w-auto"
          >
            Try For Free
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
        >
          <span>No Risk • Free to Test</span>
          <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />
          <span>Discord Support 24/7</span>
          <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />
          <span>{site.stats.customers} Customers</span>
          <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />
          <span>{site.stats.users} Users</span>
        </motion.div>
      </div>
    </section>
  );
}
