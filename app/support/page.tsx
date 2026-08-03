import PageShell from "../../components/PageShell";
import { faqs } from "../../lib/site";

export default function SupportPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="mx-auto max-w-4xl px-6 pb-24 md:px-8">
          <span className="eyebrow">Support</span>
          <h1 className="mt-3.5 text-5xl font-black tracking-tight md:text-6xl">Support</h1>
          <p className="mt-6 text-lg text-ink-dim">
            Find answers to common questions or reach out for help.
          </p>

          <div className="mt-16 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="panel p-6">
                <h2 className="font-bold text-signal">{faq.question}</h2>
                <p className="mt-3 leading-7 text-ink-dim">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-ink-dim">Still need help?</p>
            <a
              href="/discord"
              className="mt-4 inline-block rounded-none bg-signal px-8 py-3 font-mono text-sm font-bold tracking-wide text-[#04140D] transition hover:brightness-110"
            >
              Contact Support on Discord
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
