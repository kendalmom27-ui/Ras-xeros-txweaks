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
      className="grid grid-cols-1 gap-3 border-b border-line py-4 first:border-t sm:grid-cols-[150px_1fr_96px] sm:items-center sm:gap-4"
    >
      <div className="text-sm font-bold">{game}</div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <span className="w-11 flex-none font-mono text-[.66rem] text-muted">STOCK</span>
          <div className="relative h-[9px] flex-1 overflow-hidden bg-bg-raised-2">
            <div
              ref={stockRef}
              className="absolute inset-y-0 left-0 w-0 bg-alert/75 transition-[width] duration-1000 ease-out"
            />
          </div>
          <span className="w-14 flex-none text-right font-mono text-xs text-ink-dim tabular-nums">
            {without} fps
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-11 flex-none font-mono text-[.66rem] text-muted">TUNED</span>
          <div className="relative h-[9px] flex-1 overflow-hidden bg-bg-raised-2">
            <div
              ref={tunedRef}
              className="absolute inset-y-0 left-0 w-0 bg-signal transition-[width] duration-1000 ease-out"
            />
          </div>
          <span className="w-14 flex-none text-right font-mono text-xs text-ink-dim tabular-nums">
            {withTweaks} fps
          </span>
        </div>
      </div>

      <div className="text-left font-mono font-bold text-signal sm:text-right">
        +{boost}%
        <small className="block font-mono text-[.62rem] font-normal tracking-widest text-muted">
          BOOST
        </small>
      </div>
    </div>
  );
}

export default function GameBenchmarks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-[62ch]">
          <span className="eyebrow">Benchmarks</span>
          <h2 className="mt-3.5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-black tracking-tight text-balance">
            Stock vs. tuned, measured per title.
          </h2>
          <p className="mt-3.5 text-[1.02rem] text-ink-dim">
            Every bar below is a real average FPS reading, stock vs. after a
            Ras&amp;Xero optimization pass, scaled to the same axis so the gap is
            honest.
          </p>
        </div>

        <div className="mt-10">
          {gameBenchmarks.map((bench) => (
            <BenchRow key={bench.game} {...bench} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-6 font-mono text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 bg-alert/75" />
            Stock settings
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 bg-signal" />
            After tuning
          </span>
        </div>

        <p className="mt-6 font-mono text-xs text-muted">
          Tested on i7 12700KF • RTX 3070 • 32GB DDR4 4000MHz
        </p>
      </div>
    </section>
  );
}
