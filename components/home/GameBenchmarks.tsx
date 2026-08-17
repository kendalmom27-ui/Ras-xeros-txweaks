"use client";

import { useEffect, useRef } from "react";
import { gameBenchmarks } from "../../lib/site";

const max = Math.max(...gameBenchmarks.map((g) => g.withTweaks));

function BenchRow({
  game,
  without,
  withTweaks,
  boost,
}: {
  game: string;
  without: number;
  withTweaks: number;
  boost: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const stockRef = useRef<HTMLDivElement>(null);
  const tunedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stockRef.current?.style.setProperty("width", `${(without / max) * 100}%`);
            tunedRef.current?.style.setProperty("width", `${(withTweaks / max) * 100}%`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(row);
    return () => observer.disconnect();
  }, [without, withTweaks]);

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 gap-3 border-b border-line py-5 last:border-b-0 sm:grid-cols-[150px_1fr_96px] sm:items-center sm:gap-4"
    >
      <div className="text-sm font-semibold">{game}</div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <span className="w-12 flex-none text-[.66rem] text-muted">Stock</span>
          <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/[.06]">
            <div
              ref={stockRef}
              className="absolute inset-y-0 left-0 w-0 rounded-full bg-white/25 transition-[width] duration-1000 ease-out"
            />
          </div>
          <span className="w-14 flex-none text-right text-xs text-muted tabular-nums">
            {without} fps
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-12 flex-none text-[.66rem] text-muted">Tuned</span>
          <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/[.06]">
            <div
              ref={tunedRef}
              className="absolute inset-y-0 left-0 w-0 rounded-full bg-gradient-to-r from-signal-light to-signal transition-[width] duration-1000 ease-out"
            />
          </div>
          <span className="w-14 flex-none text-right text-xs text-ink-dim tabular-nums">
            {withTweaks} fps
          </span>
        </div>
      </div>

      <div className="text-left sm:text-right">
        <span className="font-semibold text-signal">+{boost}%</span>
        <small className="block text-[.62rem] font-normal tracking-widest text-muted uppercase">
          Boost
        </small>
      </div>
    </div>
  );
}

export default function GameBenchmarks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Benchmarks</span>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold tracking-tight">
            Real Gains, Measured
          </h2>
          <p className="mt-4 text-lg text-ink-dim">
            Stock vs. tuned in the games you actually play
          </p>
        </div>

        <div className="panel mt-14 px-6 py-2 md:px-8">
          {gameBenchmarks.map((bench) => (
            <BenchRow key={bench.game} {...bench} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            Stock settings
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-signal" />
            After tuning
          </span>
          <span>Tested on i7 12700KF • RTX 3070 • 32GB DDR4 4000MHz</span>
        </div>
      </div>
    </section>
  );
}
