"use client";

import { useState } from "react";
import { useScrollLock } from "../lib/useScrollLock";

export default function FreeBiosModal() {
  const [open, setOpen] = useState(false);

  useScrollLock(open);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn btn-primary mt-8 w-full"
      >
        TRY FOR FREE →
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md">
          <div className="panel max-h-[90vh] w-[92%] max-w-2xl overflow-y-auto">

                        <div className="p-8">

              <span className="eyebrow">100% Free Service</span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink">
                RASX
              </h1>

              <h2 className="mt-2 text-2xl font-bold text-signal">
                Advanced BIOS Optimization
              </h2>

              <p className="mt-6 leading-8 text-ink-dim">
                Get a completely <span className="font-bold text-signal">FREE</span> advanced BIOS optimization
                tailored specifically to your hardware. Every configuration is
                customized to maximize FPS, reduce latency, improve stability,
                and unlock your PC&apos;s full gaming performance.
              </p>

              <div className="mt-8 grid gap-3 md:grid-cols-3">

                <div className="rounded-xl border border-line bg-white/[.04] p-4 text-sm">
                  ✔ CPU Optimization
                </div>

                <div className="rounded-xl border border-line bg-white/[.04] p-4 text-sm">
                  ✔ Memory / RAM Tuning
                </div>

                <div className="rounded-xl border border-line bg-white/[.04] p-4 text-sm">
                  ✔ Gaming Performance
                </div>

                <div className="rounded-xl border border-line bg-white/[.04] p-4 text-sm">
                  ✔ Faster Boot Times
                </div>

                <div className="rounded-xl border border-line bg-white/[.04] p-4 text-sm">
                  ✔ Stability Testing
                </div>

                <div className="rounded-xl border border-line bg-white/[.04] p-4 text-sm">
                  ✔ Custom BIOS Configuration
                </div>

              </div>

              <div className="panel panel-alert mt-10 p-6 text-center">

                <h3 className="text-2xl font-bold text-alert">
                  Join Our Discord
                </h3>

                <p className="mt-3 text-ink-dim">
                  Open a ticket and we&apos;ll schedule your FREE BIOS optimization.
                </p>

                <a
                  href="https://discord.gg/ZWXkTTSuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-6"
                >
                  Join Discord
                </a>

                <p className="mt-4 text-sm text-alert">
                  discord.gg/ZWXkTTSuc
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="btn btn-ghost mt-8 w-full"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
