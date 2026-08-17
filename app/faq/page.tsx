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
    a: "RASX BIOS optimization is FREE, and the Rasx Utility is complimentary with every package. Full Optimization starts at $25, with optional overclocking add-ons at checkout."
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
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="mx-auto max-w-5xl px-6 pb-24">

          <div className="text-center">
            <span className="eyebrow justify-center">Support Log</span>
            <h1 className="mt-3.5 text-center text-6xl font-bold tracking-tight">
              FREQUENTLY <span className="text-signal">ASKED QUESTIONS</span>
            </h1>

            <p className="mt-6 text-center text-lg text-ink-dim">
              Everything you need to know before getting your PC optimized.
            </p>
          </div>

          <div className="mt-16 space-y-3">

            {faqs.map((item, i) => (
              <div key={i} className="panel">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left text-xl font-bold transition hover:text-signal"
                >
                  {item.q}
                  <span className="text-3xl text-signal">
                    {open === i ? "-" : "+"}
                  </span>
                </button>

                {open === i && (
                  <div className="border-t border-line p-6 leading-8 text-ink-dim">
                    {item.a}
                  </div>
                )}
              </div>
            ))}

          </div>

          <div className="mt-20 panel panel-alert p-10 text-center">

            <h2 className="text-4xl font-bold">
              STILL HAVE QUESTIONS?
            </h2>

            <p className="mt-4 text-ink-dim">
              Join our Discord and we&apos;ll help you choose the best optimization for your PC.
            </p>

            <a
              href="/discord"
              className="btn btn-primary mt-8"
            >
              JOIN DISCORD
            </a>

          </div>

        </section>
      </main>
    </PageShell>
  );
}
