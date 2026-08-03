"use client";

import { useState } from "react";

export default function FreeBiosModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-8 w-full rounded-none bg-signal py-3 font-mono text-sm font-bold tracking-wide text-[#04140D] transition duration-300 hover:brightness-110"
      >
        TRY FOR FREE →
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md">
          <div className="panel max-h-[90vh] w-[92%] max-w-2xl overflow-y-auto">

            <div className="h-1 w-full bg-signal"></div>

            <div className="p-8">

              <span className="eyebrow">100% Free Service</span>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-ink">
                RAS TXWEAKS
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

                <div className="border border-line bg-bg-raised-2 p-4 font-mono text-sm">
                  ✔ CPU Optimization
                </div>

                <div className="border border-line bg-bg-raised-2 p-4 font-mono text-sm">
                  ✔ Memory / RAM Tuning
                </div>

                <div className="border border-line bg-bg-raised-2 p-4 font-mono text-sm">
                  ✔ Gaming Performance
                </div>

                <div className="border border-line bg-bg-raised-2 p-4 font-mono text-sm">
                  ✔ Faster Boot Times
                </div>

                <div className="border border-line bg-bg-raised-2 p-4 font-mono text-sm">
                  ✔ Stability Testing
                </div>

                <div className="border border-line bg-bg-raised-2 p-4 font-mono text-sm">
                  ✔ Custom BIOS Configuration
                </div>

              </div>

              <div className="panel panel-alert mt-10 p-6 text-center">

                <h3 className="text-2xl font-black text-alert">
                  Join Our Discord
                </h3>

                <p className="mt-3 text-ink-dim">
                  Open a ticket and we&apos;ll schedule your FREE BIOS optimization.
                </p>

                <a
                  href="https://discord.gg/ZWXkTTSuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-none bg-alert px-8 py-4 font-mono text-sm font-bold tracking-wide text-[#1A0E00] transition duration-300 hover:brightness-110"
                >
                  Join Discord
                </a>

                <p className="mt-4 font-mono text-sm text-alert">
                  discord.gg/ZWXkTTSuc
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-8 w-full border border-line py-3 font-mono text-sm font-bold tracking-wide text-ink transition hover:border-alert hover:text-alert"
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
