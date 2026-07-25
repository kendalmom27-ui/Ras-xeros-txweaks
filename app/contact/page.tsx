import PageShell from "../../components/PageShell";
import { site } from "../../lib/site";

export default function ContactPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-black pt-28 text-white">
        <section className="mx-auto max-w-4xl px-6 pb-24 md:px-8">
          <h1 className="text-5xl font-black md:text-6xl">Contact Us</h1>
          <p className="mt-6 text-lg text-gray-400">
            Have a question? Reach out and we&apos;ll get back to you as soon as
            possible.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-xl font-bold text-cyan-400">Email</h2>
              <p className="mt-4 text-gray-400">{site.supportEmail}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-xl font-bold text-cyan-400">Discord</h2>
              <p className="mt-4 text-gray-400">
                Fastest way to get help — join our server for live support.
              </p>
              <a
                href={site.discordUrl}
                className="mt-4 inline-block text-cyan-400 hover:underline"
              >
                Join Discord →
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
