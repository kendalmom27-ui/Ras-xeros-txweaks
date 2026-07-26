"use client";

import { useState } from "react";
import PageShell from "../../components/PageShell";

const faqs = [
  {
    q: "Is BIOS optimization safe?",
    a: "Yes. Every BIOS optimization is discussed before changes are made and is tailored to your hardware."
  },
  {
    q: "Do you support Windows 11?",
    a: "Yes. We support both Windows 10 and Windows 11."
  },
  {
    q: "Can I undo the tweaks?",
    a: "Most Windows optimizations can be reverted if needed."
  },
  {
    q: "How long does optimization take?",
    a: "Anywhere from 15 minutes for basic optimization to around 2 hours for a complete PC and BIOS optimization."
  },
  {
    q: "How much does it cost?",
    a: "RAS TXWEAKS BIOS optimization is FREE. The XERO'S TXWEAKS Utility is $10."
  },
  {
    q: "How do I book a session?",
    a: "Join our Discord server and open a support ticket."
  }
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <main className="min-h-screen bg-[#05070B] pt-28 text-white">
        <section className="mx-auto max-w-5xl px-6 pb-24">

          <h1 className="text-center text-6xl font-black">
            FREQUENTLY <span className="text-cyan-400">ASKED QUESTIONS</span>
          </h1>

          <p className="mt-6 text-center text-gray-400 text-lg">
            Everything you need to know before getting your PC optimized.
          </p>

          <div className="mt-16 space-y-5">

            {faqs.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left text-xl font-bold hover:bg-cyan-500/10 transition"
                >
                  {item.q}
                  <span className="text-cyan-400 text-3xl">
                    {open === i ? "-" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div className="border-t border-white/10 p-6 text-gray-300 leading-8">
                    {item.a}
                  </div>
                )}
              </div>
            ))}

          </div>

          <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10 text-center">

            <h2 className="text-4xl font-black">
              STILL HAVE QUESTIONS?
            </h2>

            <p className="mt-4 text-gray-300">
              Join our Discord and we'll help you choose the best optimization for your PC.
            </p>

            <a
              href="/discord"
              className="mt-8 inline-block rounded-xl bg-cyan-500 px-10 py-4 text-xl font-bold text-black transition hover:bg-cyan-400"
            >
              JOIN DISCORD
            </a>

          </div>

        </section>
      </main>
    </PageShell>
  );
}
