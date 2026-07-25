import PageShell from "../../components/PageShell";
import { faqs } from "../../lib/site";

export default function SupportPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-black pt-28 text-white">
        <section className="mx-auto max-w-4xl px-6 pb-24 md:px-8">
          <h1 className="text-5xl font-black md:text-6xl">Support</h1>
          <p className="mt-6 text-lg text-gray-400">
            Find answers to common questions or reach out for help.
          </p>

          <div className="mt-16 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="font-bold text-cyan-400">{faq.question}</h2>
                <p className="mt-3 leading-7 text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">Still need help?</p>
            <a
              href="/discord"
              className="mt-4 inline-block rounded-xl bg-cyan-500 px-8 py-3 font-bold text-black transition hover:bg-cyan-400"
            >
              Contact Support on Discord
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
