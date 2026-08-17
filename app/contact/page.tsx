import PageShell from "../../components/PageShell";
import { site } from "../../lib/site";

export default function ContactPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="mx-auto max-w-4xl px-6 pb-24 md:px-8">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3.5 text-5xl font-bold tracking-tight md:text-6xl">Contact Us</h1>
          <p className="mt-6 text-lg text-ink-dim">
            Have a question? Reach out and we&apos;ll get back to you as soon as
            possible.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="panel p-8">
              <h2 className="mt-3 text-xl font-bold text-signal">Email</h2>
              <p className="mt-4 text-ink-dim">{site.supportEmail}</p>
            </div>

            <div className="panel panel-alert p-8">
              <h2 className="mt-3 text-xl font-bold text-alert">Discord</h2>
              <p className="mt-4 text-ink-dim">
                Fastest way to get help — join our server for live support.
              </p>
              <a
                href={site.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-bold text-alert hover:underline"
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
