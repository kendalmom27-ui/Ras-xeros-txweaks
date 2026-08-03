"use client";

import { useEffect, useRef } from "react";
import { gameBenchmarks } from "../../lib/site";

const avgBoost = Math.round(
  gameBenchmarks.reduce((sum, g) => sum + g.boost, 0) / gameBenchmarks.length
);

const stats = [
  { value: 10000, suffix: "+", label: "Customers Tuned" },
  { value: 50000, suffix: "+", label: "Community Users" },
  { value: avgBoost, suffix: "%", label: "Avg FPS Gain / 6 Titles" },
  { value: gameBenchmarks.length, suffix: "", label: "Games Benchmarked" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      const start = performance.now();
      const dur = reduced ? 1 : 1200;
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(value * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref} className="block font-mono text-2xl font-bold tabular-nums text-signal">
      0
    </span>
  );
}

const cellBorders = [
  "border-line",
  "border-line border-l",
  "border-line border-t md:border-t-0 md:border-l",
  "border-line border-l border-t md:border-t-0",
];

export default function Ticker() {
  return (
    <div className="border-y border-line bg-bg-raised">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className={`px-5 py-6 text-left ${cellBorders[i]}`}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="mt-1 block font-mono text-[.68rem] tracking-widest text-muted uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
