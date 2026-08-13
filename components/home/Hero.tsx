"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "../../lib/site";

function ScopeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clockRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const clockEl = clockRef.current;
    if (!canvas || !clockEl) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight || 210;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const t0 = Date.now();
    const clockTimer = setInterval(() => {
      const s = Math.floor((Date.now() - t0) / 1000);
      const hh = String(Math.floor(s / 3600)).padStart(2, "0");
      const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const ss = String(s % 60).padStart(2, "0");
      clockEl.textContent = `${hh}:${mm}:${ss}`;
    }, 1000);

    const styles = getComputedStyle(document.documentElement);
    const signal = styles.getPropertyValue("--color-signal").trim() || "#57F0A6";
    const alert = styles.getPropertyValue("--color-alert").trim() || "#FFB454";
    const line = styles.getPropertyValue("--color-line").trim() || "rgba(232,242,236,.1)";

    const N = 64;
    function gen(phase: number, jitter: number, base: number, amp: number) {
      const pts: number[] = [];
      for (let i = 0; i < N; i++) {
        const v = base + amp * Math.sin(i * 0.35 + phase) + (Math.random() - 0.5) * jitter;
        pts.push(Math.max(0.04, Math.min(0.96, v)));
      }
      return pts;
    }

    function drawTrace(points: number[], w: number, h: number, color: string) {
      ctx!.beginPath();
      points.forEach((p, i) => {
        const x = (i / (points.length - 1)) * w;
        const y = h - p * h;
        if (i === 0) ctx!.moveTo(x, y);
        else ctx!.lineTo(x, y);
      });
      ctx!.strokeStyle = color;
      ctx!.lineWidth = 2;
      ctx!.lineJoin = "round";
      ctx!.stroke();
    }

    let phase = 0;
    let frameId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    function frame() {
      const w = canvas!.clientWidth;
      const h = canvas!.clientHeight || 210;
      ctx!.clearRect(0, 0, w, h);

      ctx!.strokeStyle = line;
      ctx!.lineWidth = 1;
      for (let gy = 0; gy <= 4; gy++) {
        const y = (gy / 4) * h;
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(w, y);
        ctx!.stroke();
      }

      const stock = gen(phase * 0.6, 0.22, 0.32, 0.1);
      const tuned = gen(phase * 0.9, 0.05, 0.72, 0.06);

      drawTrace(stock, w, h, alert);
      drawTrace(tuned, w, h, signal);

      phase += reduced ? 0 : 0.045;
      if (!reduced) {
        frameId = requestAnimationFrame(frame);
      } else {
        timeoutId = setTimeout(frame, 4000);
      }
    }
    frame();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(clockTimer);
      if (frameId) cancelAnimationFrame(frameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="panel p-4">
      <div className="flex items-baseline justify-between font-mono text-xs tracking-wide text-muted">
        <span>FRAME_TIME.LOG</span>
        <span ref={clockRef} className="tabular-nums">
          00:00:00
        </span>
      </div>
      <canvas
        ref={canvasRef}
        className="mt-3 block h-[210px] w-full"
        role="img"
        aria-label="Animated comparison of frame-time stability before and after Rasx tuning, showing a smoother, higher trace after tuning."
      />
      <div className="mt-3 flex gap-5 font-mono text-xs text-ink-dim">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 bg-alert" />
          STOCK — jittery, lower
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 bg-signal" />
          TUNED — stable, higher
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const hero = heroRef.current;
    const glow = hero?.querySelector<HTMLDivElement>("[data-glow]");
    if (!hero || !glow) return;

    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      glow.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
      glow.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    hero.addEventListener("pointermove", onMove);
    return () => hero.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-40 pb-20">
      <div
        data-glow
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(480px 320px at var(--gx, 50%) var(--gy, 10%), var(--color-signal-dim), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Live Readout — Tuning Bench
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[clamp(2.35rem,5vw,3.6rem)] font-black leading-[1.06] tracking-tight text-balance"
          >
            Your rig is running <span className="text-signal">stock settings</span>{" "}
            while you&apos;re playing ranked.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-[52ch] text-lg leading-8 text-ink-dim"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="rounded-none bg-signal px-7 py-4 text-center font-mono text-sm font-bold tracking-wide text-[#04140D] transition hover:brightness-110"
            >
              See the benchmarks
            </Link>
            <Link
              href="/free-bios"
              className="rounded-none border border-line-strong px-7 py-4 text-center font-mono text-sm font-bold tracking-wide text-ink transition hover:border-alert hover:text-alert"
            >
              Get free BIOS tuning
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-6 font-mono text-xs text-muted"
          >
            <span>
              <span className="text-ink">{site.stats.customers}</span> customers tuned
            </span>
            <span>
              <span className="text-ink">{site.stats.users}</span> in the community
            </span>
          </motion.div>
        </div>

        <ScopeCanvas />
      </div>
    </section>
  );
}
