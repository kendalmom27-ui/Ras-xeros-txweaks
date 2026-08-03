"use client";

import { useState } from "react";

export default function FreeBiosModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-8 w-full rounded-xl bg-green-500 py-3 font-bold text-black transition duration-300 hover:bg-green-400 hover:scale-[1.02]"
      >
        Try For Free
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in p-4">
          <div className="relative w-[92%] max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-green-500/30 bg-[#090909] shadow-[0_0_40px_rgba(34,197,94,.18)]">

            <div className="h-1 w-full bg-gradient-to-r from-green-400 via-cyan-400 to-green-400"></div>

            <div className="p-8">

              <span className="rounded-full bg-green-500/15 px-4 py-2 text-xs font-bold tracking-widest text-green-400">
                100% FREE SERVICE
              </span>

              <h1 className="mt-6 text-4xl font-black text-white">
                RAS TXWEAKS
              </h1>

              <h2 className="mt-2 text-2xl font-bold text-green-400">
                Advanced BIOS Optimization
              </h2>

              <p className="mt-6 leading-8 text-gray-300">
                Get a completely <span className="font-bold text-green-400">FREE</span> advanced BIOS optimization
                tailored specifically to your hardware. Every configuration is
                customized to maximize FPS, reduce latency, improve stability,
                and unlock your PC&apos;s full gaming performance.
              </p>

              <div className="mt-8 grid gap-3 md:grid-cols-3">

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  ✔ CPU Optimization
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  ✔ Memory / RAM Tuning
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  ✔ Gaming Performance
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  ✔ Faster Boot Times
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  ✔ Stability Testing
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  ✔ Custom BIOS Configuration
                </div>

              </div>

              <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6 text-center">

                <h3 className="text-2xl font-black text-cyan-400">
                  Join Our Discord
                </h3>

                <p className="mt-3 text-gray-300">
                  Open a ticket and we&apos;ll schedule your FREE BIOS optimization.
                </p>

                <a
                  href="https://discord.gg/ZWXkTTSuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-400"
                >
                  Join Discord
                </a>

                <p className="mt-4 text-cyan-300">
                  discord.gg/ZWXkTTSuc
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                className="mt-8 w-full rounded-xl border border-white/10 py-3 font-bold text-white transition hover:border-red-500 hover:text-red-400"
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


