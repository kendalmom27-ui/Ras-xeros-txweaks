"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { site, features, gameBenchmarks, reviews, faqs } from "../../lib/site";

const MAX = Math.max(...gameBenchmarks.map((b) => b.withTweaks));
const AVG = Math.round(
  gameBenchmarks.reduce((s, g) => s + g.boost, 0) / gameBenchmarks.length
);

/* ---------- Hero scope ---------- */

function trace(seed: number, base: number, amp: number, jitter: number) {
  let s = seed;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  return Array.from({ length: 64 }, (_, i) =>
    Math.max(
      0.04,
      Math.min(0.96, base + amp * Math.sin(i * 0.35 + seed) + (rnd() - 0.5) * jitter)
    )
  );
}
const toPath = (pts: number[]) =>
  pts
    .map(
      (p, i) =>
        `${i ? "L" : "M"}${((i / 63) * 600).toFixed(1)},${(230 - p * 230).toFixed(1)}`
    )
    .join(" ");

const STOCK = toPath(trace(11, 0.32, 0.1, 0.22));
const TUNED = toPath(trace(7, 0.72, 0.06, 0.05));

function Scope() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="panel p-[22px]">
      <div className="flex items-baseline justify-between text-xs tracking-wide text-muted">
        <span className="uppercase">Frame time — live</span>
        <span className="tabular-nums">
          {pad(Math.floor(t / 3600))}:{pad(Math.floor((t % 3600) / 60))}:{pad(t % 60)}
        </span>
      </div>
      <div className="relative mt-[18px] h-[230px]">
        <svg
          viewBox="0 0 600 230"
          preserveAspectRatio="none"
          className="block h-full w-full"
          role="img"
          aria-label="Frame-time comparison: stock is jittery and low, tuned is stable and high."
        >
          <defs>
            <linearGradient id="hg-tuned" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2dd4bf" stopOpacity=".26" />
              <stop offset="1" stopColor="#2dd4bf" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="rgba(255,255,255,.1)" strokeWidth="1">
            {[0.5, 57.5, 115, 172.5, 229.5].map((y) => (
              <line key={y} x1="0" y1={y} x2="600" y2={y} />
            ))}
          </g>
          <path d={`${TUNED} L600,230 L0,230 Z`} fill="url(#hg-tuned)" />
          <path d={STOCK} fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="2" strokeLinejoin="round" />
          <path d={TUNED} fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-[rasx-sweep_3.6s_linear_infinite] absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(45,212,191,.10),transparent)]" />
        </div>
      </div>
      <div className="mt-[18px] flex flex-wrap gap-5 text-xs text-ink-dim">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          Stock — jittery, lower
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-signal" />
          Tuned — stable, higher
        </span>
      </div>
    </div>
  );
}

/* ---------- Sections ---------- */

const stats = [
  { value: site.stats.customers, label: "Customers Tuned" },
  { value: site.stats.users, label: "Community Users" },
  { value: `${AVG}%`, label: "Avg FPS Gain" },
  { value: String(gameBenchmarks.length), label: "Games Benchmarked" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-46 pb-22">
      <div
        aria-hidden
        className="hero-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_40%,black_15%,transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-[8%] h-[520px] w-[760px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(45,212,191,.14),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge-pill"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal [box-shadow:0_0_10px_rgba(45,212,191,.9)]" />
            Free BIOS tuning — live now
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-7 text-[clamp(2.6rem,4.6vw,4rem)] leading-[1.05] font-bold tracking-[-0.03em]"
          >
            Optimize Your PC.
            <br />
            <span className="bg-gradient-to-r from-signal-light to-signal bg-clip-text text-transparent">
              Unlock Its Full Potential.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.9] text-ink-dim"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/products" className="btn btn-primary">
              Get Rasx Tweaks
            </Link>
            <Link href="/free-bios" className="btn btn-ghost">
              See What It Does
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <Scope />
        </motion.div>
      </div>

      <div className="relative mx-auto mt-18 max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-2 border-y border-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-line px-6 py-7">
              <span className="block bg-gradient-to-r from-signal-light to-signal bg-clip-text text-4xl font-bold tracking-tight tabular-nums text-transparent">
                {s.value}
              </span>
              <span className="mt-1.5 block text-[.7rem] tracking-[0.16em] text-muted uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-18 px-6 md:px-8 lg:grid-cols-[.85fr_1.15fr]">
        <div className="lg:sticky lg:top-30">
          <span className="eyebrow">Why Rasx</span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold tracking-tight">
            Built for Performance
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.9] text-ink-dim">
            Real optimizations, not placebo toggles
          </p>
        </div>
        <div className="flex flex-col">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="grid grid-cols-[52px_1fr] items-start gap-6 border-b border-line py-7 transition-[padding] duration-300 hover:pl-2.5"
            >
              <span className="pt-1.5 text-xs font-semibold tracking-widest text-signal tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.375rem] font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2.5 max-w-[48ch] leading-[1.9] text-ink-dim">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benchmarks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[34rem]">
            <span className="eyebrow">Benchmarks</span>
            <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold tracking-tight">
              Real Gains, Measured
            </h2>
            <p className="mt-4 text-[1.0625rem] text-ink-dim">
              Stock vs. tuned in the games you actually play
            </p>
          </div>
          <p className="text-right text-xs leading-[1.9] text-muted">
            Tested on i7 12700KF
            <br />
            RTX 3070 · 32GB DDR4 4000MHz
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gameBenchmarks.map((b) => (
            <div
              key={b.game}
              className="panel relative flex flex-col overflow-hidden p-[26px] transition duration-300 hover:-translate-y-1 hover:border-signal/45"
            >
              <div className="flex min-h-[52px] items-baseline justify-between gap-3">
                <h3 className="text-[1.0625rem] font-semibold">{b.game}</h3>
                <span className="text-lg font-bold text-signal tabular-nums">
                  +{b.boost}%
                </span>
              </div>

              <div className="mt-3.5 flex flex-col gap-3">
                {(
                  [
                    ["Stock", b.without, "bg-white/25", "text-muted"],
                    ["Tuned", b.withTweaks, "bg-gradient-to-r from-signal-light to-signal", "text-white font-semibold"],
                  ] as const
                ).map(([label, value, bar, valueClass]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="w-11 flex-none text-[.66rem] tracking-wide text-muted uppercase">
                      {label}
                    </span>
                    <span className="block h-2 flex-1 overflow-hidden rounded-full bg-white/[.06]">
                      <span
                        className={`block h-full rounded-full ${bar}`}
                        style={{ width: `${(value / MAX) * 100}%` }}
                      />
                    </span>
                    <span className={`w-[60px] flex-none text-right text-sm tabular-nums ${valueClass}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <span className="mt-auto block pt-4 text-[.66rem] tracking-[0.14em] text-white/35 uppercase">
                Frames per second
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const utilityPoints = [
  "77 optimizations across 9 categories",
  "Live CPU and RAM monitoring",
  "One-click backup before any change",
];

export function UtilityShowcase() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative grid grid-cols-1 items-center gap-14 overflow-hidden rounded-[18px] border border-line bg-white/[.03] py-14 pl-14 lg:grid-cols-[.9fr_1.1fr] bg-[radial-gradient(70%_90%_at_88%_50%,rgba(45,212,191,.16),transparent_70%)]">
          <div className="pr-14 lg:pr-0">
            <span className="eyebrow">Included Free</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.4rem)] font-bold tracking-tight">
              The Rasx Utility
            </h2>
            <p className="mt-4 max-w-[42ch] text-[1.0625rem] leading-[1.9] text-ink-dim">
              Our desktop utility — complimentary with every optimization.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              {utilityPoints.map((p) => (
                <div key={p} className="flex items-center gap-3 text-ink-dim">
                  <span className="inline-flex size-5 flex-none items-center justify-center rounded-full bg-signal-dim text-[.6rem] text-signal">
                    ✓
                  </span>
                  {p}
                </div>
              ))}
            </div>
            <Link href="/downloads" className="btn btn-outline mt-8">
              Download Free
            </Link>
          </div>

          <div className="relative [perspective:1400px]">
            <div className="overflow-hidden rounded-l-xl border border-r-0 border-white/15 bg-[#0b1011] [transform:rotateY(-9deg)_rotateX(3deg)] [transform-origin:left_center] [box-shadow:-30px_40px_80px_rgba(0,0,0,.6),0_0_60px_rgba(45,212,191,.14)]">
              <div className="flex items-center gap-[7px] border-b border-white/10 bg-gradient-to-b from-white/[.07] to-white/[.02] px-3.5 py-2.5">
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-signal [box-shadow:0_0_8px_rgba(45,212,191,.8)]" />
                <span className="ml-2 text-[.6rem] font-semibold tracking-[0.2em] text-white/55 uppercase">
                  Rasx Utility
                </span>
              </div>
              <Image
                src="/rasx-utility-dashboard.png"
                alt="Rasx Utility dashboard"
                width={1280}
                height={719}
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Reviews</span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-[1.0625rem] text-ink-dim">
            Real feedback from gamers running Rasx
          </p>
        </div>
        <div className="mt-14 grid items-start gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.title}
              className="panel p-8 transition duration-300 hover:-translate-y-1 hover:border-signal/40"
            >
              <span className="text-[1.0625rem] tracking-widest text-signal">★★★★★</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-3.5 leading-[1.95] text-ink-dim">&ldquo;{r.body}&rdquo;</p>
              <p className="mt-6 border-t border-line pt-5 text-sm font-semibold text-signal">
                — {r.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSplit() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="pt-24 pb-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-18 px-6 md:px-8 lg:grid-cols-[.85fr_1.15fr]">
        <div className="lg:sticky lg:top-30">
          <span className="eyebrow">Got Questions?</span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[1.9] text-ink-dim">
            Everything you need to know about {site.fullName}
          </p>
          <Link href="/discord" className="btn btn-primary mt-7">
            Join Discord
          </Link>
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-5 py-[26px] text-left text-lg font-semibold transition ${
                    isOpen ? "text-signal" : "text-white"
                  }`}
                >
                  {f.question}
                  <span
                    className={`flex-none text-sm text-signal transition-transform duration-250 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-[56ch] pb-[26px] leading-[1.95] text-ink-dim">
                    {f.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="pt-14 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[18px] border border-signal/30 bg-signal/[.04] px-10 py-18 text-center bg-[radial-gradient(80%_140%_at_50%_120%,rgba(45,212,191,.20),transparent_70%)]">
          <div
            aria-hidden
            className="absolute inset-0 [background-image:linear-gradient(rgba(45,212,191,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,.06)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_50%_100%,black_10%,transparent_70%)]"
          />
          <div className="relative">
            <h2 className="text-[clamp(2rem,3.6vw,2.75rem)] font-bold tracking-tight">
              {site.tagline}
            </h2>
            <p className="mx-auto mt-4.5 max-w-[44ch] text-[1.0625rem] leading-[1.9] text-ink-dim">
              Think of these as a PC upgrade for a fraction of the price.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/products" className="btn btn-primary">
                Get Rasx Tweaks
              </Link>
              <Link href="/free-bios" className="btn btn-ghost">
                Free BIOS Tuning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
