"use client";

import { useEffect, useRef } from "react";
import { gameBenchmarks } from "../../lib/site";

const avgBoost = Math.round(
  gameBenchmarks.reduce((sum, g) => sum + g.boost, 0) / gameBenchmarks.length
);

const stats = [
  { value: 10000, suffix: "+", label: "Customers Tuned" },
  { value: 50000, suffix: "+", label: "Community Users" },
  { value: avgBoost, suffix: "%", label: "Avg FPS Gain" },
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
    <span
      ref={ref}
      className="block bg-gradient-to-r from-signal-light to-signal bg-clip-text text-4xl font-bold tabular-nums text-transparent"
    >
      0
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 md:px-8">
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="mt-2 block text-xs tracking-widest text-muted uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
